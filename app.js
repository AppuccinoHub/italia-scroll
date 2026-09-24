(() => {
  'use strict';

  const DATA = window.ITALIA_SCROLL;
  if (!DATA) {
    console.error('Italia Scroll: data.js missing');
    return;
  }

  const STORAGE = {
    progress: 'italiaScroll.progress.v1',
    help: 'italiaScroll.helpLevel',
    mute: 'italiaScroll.muted',
    theme: 'italiaScroll.theme',
  };

  const HELP_HINTS = {
    more: 'English gloss + a gentle tip on every card. Soft retry on misses.',
    mid: 'Clear context + English gloss. Soft explanation if you miss.',
    challenge: 'Italian + context only. Short soft hint after a miss.',
  };

  const $ = (id) => document.getElementById(id);

  const state = {
    helpLevel: localStorage.getItem(STORAGE.help) || 'mid',
    muted: localStorage.getItem(STORAGE.mute) !== '0', // muted by default
    theme: (['light','fall','dark'].includes(localStorage.getItem(STORAGE.theme)) ? localStorage.getItem(STORAGE.theme) : 'light'),
    unlocked: 1, // highest unlocked level id (1–4)
    completed: {}, // { "1": { bestFirstTry, plays }, ... , "quick": {...} }
    mode: null, // 'level' | 'quick'
    levelId: null,
    cards: [],
    index: 0,
    firstTryCorrect: 0,
    attempted: {}, // cardId -> true after first caption attempt
    locked: false,
    captionOk: {}, // cardId -> true after correct caption (before prove-it)
    answeredOk: {}, // cardId -> true when caption + prove-it cleared
  };

  let audioCtx = null;

  // —— Progress persistence ——
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE.progress);
      if (!raw) return;
      const p = JSON.parse(raw);
      if (p.unlocked >= 1 && p.unlocked <= 4) state.unlocked = p.unlocked;
      if (p.completed && typeof p.completed === 'object') state.completed = p.completed;
    } catch (_) { /* ignore */ }
  }

  function saveProgress() {
    localStorage.setItem(
      STORAGE.progress,
      JSON.stringify({ unlocked: state.unlocked, completed: state.completed })
    );
  }

  function cardsForLevel(levelId) {
    return DATA.cards.filter((c) => c.level === levelId);
  }

  function cardsForQuick() {
    const byId = Object.fromEntries(DATA.cards.map((c) => [c.id, c]));
    return DATA.quickPlay.cardIds.map((id) => byId[id]).filter(Boolean);
  }

  // —— Theme / mute / help ——
  const THEMES = ['light', 'fall', 'dark'];
  const THEME_META = {
    light: { color: '#cfe8f8', nextIcon: '🍂', label: 'Theme: Sky lemon. Tap for Fall' },
    fall: { color: '#f6ebe0', nextIcon: '🌙', label: 'Theme: Fall. Tap for Dark' },
    dark: { color: '#141210', nextIcon: '🍋', label: 'Theme: Dark. Tap for Sky lemon' },
  };

  function normalizeTheme(t) {
    return THEMES.includes(t) ? t : 'light';
  }

  function applyTheme() {
    state.theme = normalizeTheme(state.theme);
    document.documentElement.setAttribute('data-theme', state.theme);
    const meta = $('metaTheme');
    const info = THEME_META[state.theme];
    if (meta) meta.setAttribute('content', info.color);
    $('btnTheme').textContent = info.nextIcon;
    $('btnTheme').setAttribute('aria-label', info.label);
    $('btnTheme').setAttribute('title', info.label);
  }

  function updateMuteUI() {
    $('btnMute').textContent = state.muted ? '🔇' : '🔊';
    $('btnMute').setAttribute('aria-label', state.muted ? 'Unmute sound' : 'Mute sound');
  }

  function syncHelpChips() {
    document.querySelectorAll('.help-chip').forEach((chip) => {
      chip.setAttribute('aria-pressed', chip.dataset.help === state.helpLevel ? 'true' : 'false');
    });
    const hh = $('helpHint');
    if (hh) hh.textContent = HELP_HINTS[state.helpLevel] || HELP_HINTS.mid;
  }

  function setHelp(level) {
    if (!HELP_HINTS[level]) return;
    state.helpLevel = level;
    localStorage.setItem(STORAGE.help, level);
    syncHelpChips();
  }

  function beep(ok) {
    if (state.muted) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.connect(g);
      g.connect(audioCtx.destination);
      o.type = 'sine';
      o.frequency.value = ok ? 660 : 280;
      g.gain.value = 0.04;
      o.start();
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);
      o.stop(audioCtx.currentTime + 0.2);
    } catch (_) { /* ignore */ }
  }

  // —— Screens ——
  function showScreen(el) {
    document.querySelectorAll('.screen').forEach((s) => {
      const on = s === el;
      s.classList.toggle('active', on);
      if (on) s.removeAttribute('hidden');
      else s.setAttribute('hidden', '');
    });
    const home = $('btnHome');
    if (home) home.hidden = el === $('screenStart');
    const phone = $('phone');
    if (phone) phone.classList.toggle('play-mode', el === $('screenPlay'));
  }

  // —— Level list ——
  function renderLevelList() {
    const list = $('levelList');
    list.innerHTML = '';
    DATA.levels.forEach((lvl) => {
      const unlocked = lvl.id <= state.unlocked;
      const done = state.completed[String(lvl.id)];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'level-card' + (unlocked ? '' : ' locked');
      btn.setAttribute('role', 'listitem');
      btn.disabled = !unlocked;
      btn.innerHTML =
        '<span class="level-num">' + (unlocked ? lvl.id : '🔒') + '</span>' +
        '<span><p class="lvl-title">' + escapeHtml(lvl.title) + '</p>' +
        '<p class="lvl-blurb">' + escapeHtml(lvl.blurb) + '</p></span>' +
        '<span class="lvl-meta">' +
        (done ? 'Best ' + done.bestFirstTry + '/' + done.total : escapeHtml(lvl.minutes)) +
        '</span>';
      if (unlocked) {
        btn.addEventListener('click', () => startLevel(lvl.id));
      }
      list.appendChild(btn);
    });
    const next = Math.min(4, state.unlocked);
    const lh = $('levelHint');
    if (lh) {
      lh.textContent =
        state.unlocked >= 4
          ? ''
          : '';
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // —— Play ——
  function startLevel(levelId) {
    state.mode = 'level';
    state.levelId = levelId;
    state.cards = cardsForLevel(levelId);
    beginPlay();
  }

  function startQuick() {
    state.mode = 'quick';
    state.levelId = 'quick';
    state.cards = cardsForQuick();
    beginPlay();
  }

  function beginPlay() {
    state.index = 0;
    state.firstTryCorrect = 0;
    state.attempted = {};
    state.captionOk = {};
    state.answeredOk = {};
    state.locked = false;
    const badge =
      state.mode === 'quick'
        ? 'Quick Play · ' + DATA.quickPlay.minutes
        : 'Livello ' + state.levelId + ' · ' + (DATA.levels[state.levelId - 1] || {}).title;
    $('levelBadge').textContent = badge;
    $('headerSubtitle').textContent =
      state.mode === 'quick'
        ? 'Quick Play · ' + (DATA.quickPlay.minutes || '≈ 2–3 min')
        : 'Livello ' + state.levelId + ' · Italiano 3';
    showScreen($('screenPlay'));
    renderFeed();
    updateSoftScore();
    updateNavLock();
    requestAnimationFrame(() => scrollToIndex(0, false));
  }

  function updateSoftScore() {
    const done = Object.keys(state.answeredOk).length;
    $('softScore').textContent =
      state.firstTryCorrect + ' · ' + done + '/' + state.cards.length;
    $('feedPos').textContent = state.index + 1 + ' / ' + state.cards.length;
  }

  function renderFeed() {
    const feed = $('feed');
    feed.innerHTML = '';
    state.cards.forEach((card, i) => {
      feed.appendChild(buildCardEl(card, i));
    });
  }

  function buildCardEl(card, i) {
    const art = document.createElement('article');
    art.className = 'feed-card';
    art.dataset.index = String(i);
    art.dataset.id = card.id;

    const visual = document.createElement('div');
    visual.className = 'card-visual ' + (card.bg || 'bg-cinque');
    visual.innerHTML =
      '<div class="glow"></div>' +
      '<div class="card-emoji" aria-hidden="true">' + escapeHtml(card.emoji || '🇮🇹') + '</div>' +
      '<div class="card-shade"></div>';

    const imgUrl = card.image || (DATA.placeImages && DATA.placeImages[card.region]) || '';
    if (imgUrl) {
      const img = document.createElement('img');
      img.className = 'card-photo';
      img.alt = '';
      img.decoding = 'async';
      img.loading = i < 2 ? 'eager' : 'lazy';
      img.src = imgUrl;
      img.addEventListener('load', () => {
        visual.classList.add('has-photo');
      });
      img.addEventListener('error', () => {
        img.hidden = true;
        visual.classList.remove('has-photo');
      });
      visual.insertBefore(img, visual.querySelector('.card-shade'));
    }

    const body = document.createElement('div');
    body.className = 'card-body';
    const tag = card.tag ? '<span class="region-sub">' + escapeHtml(card.tag) + '</span>' : '';
    // Show don't tell: place + one culture line. Captions are the lesson.
    body.innerHTML =
      '<div class="region-row"><span class="region-tag">' +
      escapeHtml(card.region) +
      '</span>' +
      tag +
      '</div>' +
      '<p class="culture">' +
      escapeHtml(card.culture || '') +
      '</p>';

    // Optional short gloss only when help is on (mid/more). Never a how-to essay.
    if (state.helpLevel !== 'challenge' && card.gloss) {
      const gloss = document.createElement('p');
      gloss.className = 'gloss';
      gloss.textContent = card.gloss;
      body.appendChild(gloss);
    }

    const row = document.createElement('div');
    row.className = 'caption-row';
    row.setAttribute('role', 'group');
    row.setAttribute('aria-label', 'Choose caption');
    card.captions.forEach((text, ci) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'caption-btn';
      b.textContent = text;
      b.dataset.idx = String(ci);
      b.addEventListener('click', () => onCaption(card, ci, art));
      row.appendChild(b);
    });

    const fb = document.createElement('div');
    fb.className = 'feedback';
    fb.hidden = true;
    fb.setAttribute('role', 'status');
    fb.setAttribute('aria-live', 'polite');

    art.appendChild(visual);
    art.appendChild(body);
    art.appendChild(row);
    art.appendChild(fb);

    if (state.answeredOk[card.id]) {
      lockCardCorrect(art, card);
    } else if (state.captionOk[card.id]) {
      const btns = art.querySelectorAll('.caption-btn');
      btns.forEach((b, i) => {
        b.disabled = true;
        if (i === card.correct) b.classList.add('correct-flash');
      });
      const fb = art.querySelector('.feedback');
      if (fb) {
        fb.hidden = false;
        fb.className = 'feedback ok';
        fb.textContent = '✓';
      }
      showProveIt(art, card);
    }

    return art;
  }

  function lockCardCorrect(art, card) {
    const btns = art.querySelectorAll('.caption-btn');
    btns.forEach((b, i) => {
      b.disabled = true;
      if (i === card.correct) b.classList.add('correct-flash');
    });
    const fb = art.querySelector('.feedback');
    if (fb) {
      fb.hidden = false;
      fb.className = 'feedback ok';
      fb.textContent = '✓';
    }
    // Fully cleared: hide prove panel if present
    const prove = art.querySelector('.prove');
    if (prove) {
      prove.hidden = true;
    }
  }

  function ensureProveEl(art, card) {
    let prove = art.querySelector('.prove');
    if (prove) return prove;
    prove = document.createElement('div');
    prove.className = 'prove';
    prove.hidden = true;
    prove.setAttribute('role', 'group');
    prove.setAttribute('aria-label', 'Prove it');
    const fb = art.querySelector('.feedback');
    if (fb && fb.parentNode === art && fb.nextSibling) art.insertBefore(prove, fb.nextSibling);
    else art.appendChild(prove);
    return prove;
  }

  function showProveIt(art, card) {
    const prove = ensureProveEl(art, card);
    const p = card.prove;
    if (!p || !p.choices || !p.choices.length) {
      // No prove data — treat as cleared
      clearCard(art, card);
      return;
    }
    prove.hidden = false;
    prove.innerHTML = '';
    const row = document.createElement('div');
    row.className = 'prove-row';
    p.choices.forEach((text, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'prove-btn';
      b.textContent = text;
      b.dataset.idx = String(i);
      b.addEventListener('click', () => onProve(card, i, art));
      row.appendChild(b);
    });
    const miss = document.createElement('div');
    miss.className = 'prove-miss';
    miss.hidden = true;
    miss.setAttribute('role', 'status');
    miss.setAttribute('aria-live', 'polite');
    prove.appendChild(row);
    prove.appendChild(miss);
  }

  function onProve(card, choiceIdx, art) {
    if (state.answeredOk[card.id]) return;
    if (!state.captionOk[card.id]) return;
    const p = card.prove;
    const prove = art.querySelector('.prove');
    const miss = prove && prove.querySelector('.prove-miss');
    const btns = prove ? prove.querySelectorAll('.prove-btn') : [];

    if (choiceIdx === p.correct) {
      beep(true);
      btns.forEach((b, i) => {
        b.disabled = true;
        if (i === choiceIdx) b.classList.add('correct-flash');
        b.classList.remove('miss');
      });
      if (miss) {
        miss.hidden = true;
        miss.textContent = '';
      }
      clearCard(art, card);
    } else {
      beep(false);
      btns.forEach((b, i) => {
        b.classList.toggle('miss', i === choiceIdx);
      });
      if (miss) {
        miss.hidden = false;
        miss.textContent = p.miss || 'Not quite — try again.';
      }
    }
  }

  function clearCard(art, card) {
    state.answeredOk[card.id] = true;
    lockCardCorrect(art, card);
    updateSoftScore();
    updateNavLock();

    const allDone = state.cards.every((c) => state.answeredOk[c.id]);
    if (allDone) {
      setTimeout(finishLevel, 700);
    } else {
      setTimeout(() => {
        if (state.index < state.cards.length - 1) goTo(state.index + 1);
      }, 650);
    }
  }

  function onCaption(card, choiceIdx, art) {
    if (state.answeredOk[card.id] || state.captionOk[card.id]) return;
    const firstTry = !state.attempted[card.id];
    state.attempted[card.id] = true;

    const fb = art.querySelector('.feedback');
    const btns = art.querySelectorAll('.caption-btn');

    if (choiceIdx === card.correct) {
      if (firstTry) state.firstTryCorrect += 1;
      state.captionOk[card.id] = true;
      beep(true);
      btns.forEach((b, i) => {
        b.disabled = true;
        if (i === choiceIdx) b.classList.add('correct-flash');
        b.classList.remove('miss');
      });
      fb.hidden = false;
      fb.className = 'feedback ok';
      fb.textContent = '✓';
      updateSoftScore();
      // Do NOT unlock next yet — prove-it first
      showProveIt(art, card);
    } else {
      beep(false);
      btns.forEach((b, i) => {
        b.classList.toggle('miss', i === choiceIdx);
      });
      fb.hidden = false;
      fb.className = 'feedback';
      let msg = (card.why && card.why[choiceIdx]) || 'Not quite — same person, different tense. Try again.';
      if (state.helpLevel === 'challenge') {
        msg = (card.why && card.why[choiceIdx]) || 'Not quite — think now vs used-to vs finished. Try again.';
      }
      fb.textContent = msg;
      updateSoftScore();
      updateNavLock();
    }
  }

  function finishLevel() {
    const total = state.cards.length;
    const key = String(state.levelId);
    const prev = state.completed[key] || { bestFirstTry: 0, total: total, plays: 0 };
    state.completed[key] = {
      bestFirstTry: Math.max(prev.bestFirstTry || 0, state.firstTryCorrect),
      total: total,
      plays: (prev.plays || 0) + 1,
    };

    if (state.mode === 'level' && state.levelId === state.unlocked && state.unlocked < 4) {
      state.unlocked += 1;
    }
    saveProgress();

    showScreen($('screenEnd'));
    const title =
      state.mode === 'quick'
        ? 'Quick Play fatto!'
        : 'Livello ' + state.levelId + ' completato';
    $('endTitle').textContent = title;
    $('endScore').textContent = state.firstTryCorrect + '/' + total;
    let note = '';
    if (state.mode === 'level' && state.levelId < 4 && state.unlocked > state.levelId) {
      note = '→ ' + (state.levelId + 1);
    }
    $('endNote').textContent = note;
    $('endNote').hidden = !note;

    const nextBtn = $('btnNextLevel');
    if (state.mode === 'level' && state.levelId < 4 && state.unlocked >= state.levelId + 1) {
      nextBtn.hidden = false;
      nextBtn.textContent = 'Livello ' + (state.levelId + 1) + ' →';
    } else {
      nextBtn.hidden = true;
    }
  }

  // —— Feed navigation (next card locked until current is correct) ——
  function canVisit(i) {
    if (i < 0 || i >= state.cards.length) return false;
    if (i === 0) return true;
    // May revisit any cleared card, or the first uncleared card in order
    for (let j = 0; j < i; j++) {
      if (!state.answeredOk[state.cards[j].id]) return false;
    }
    return true;
  }

  function maxReachableIndex() {
    let max = 0;
    for (let j = 0; j < state.cards.length; j++) {
      if (state.answeredOk[state.cards[j].id]) max = j + 1;
      else {
        max = j; // may sit on the first uncleared
        break;
      }
    }
    return Math.min(max, state.cards.length - 1);
  }

  function updateNavLock() {
    const prev = $('btnPrev');
    const next = $('btnNext');
    if (!prev || !next) return;
    prev.disabled = state.index <= 0;
    const nextIdx = state.index + 1;
    next.disabled = nextIdx >= state.cards.length || !canVisit(nextIdx);
  }

  function scrollToIndex(i, smooth) {
    if (!canVisit(i)) i = maxReachableIndex();
    const feed = $('feed');
    const el = feed.querySelector('.feed-card[data-index="' + i + '"]');
    if (!el) return;
    el.scrollIntoView({ behavior: smooth === false ? 'auto' : 'smooth', block: 'start' });
    state.index = i;
    updateSoftScore();
    updateNavLock();
  }

  function goTo(i) {
    if (i < 0 || i >= state.cards.length) return;
    if (!canVisit(i)) return;
    scrollToIndex(i, true);
  }

  function syncIndexFromScroll() {
    const feed = $('feed');
    const cards = [...feed.querySelectorAll('.feed-card')];
    if (!cards.length) return;
    const top = feed.scrollTop;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetTop - top);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    if (!canVisit(best)) {
      const capped = maxReachableIndex();
      if (capped !== state.index) scrollToIndex(capped, true);
      else scrollToIndex(capped, false);
      return;
    }
    if (best !== state.index) {
      state.index = best;
      updateSoftScore();
      updateNavLock();
    }
  }

  // —— Events ——
  function wire() {
    $('btnMute').addEventListener('click', () => {
      state.muted = !state.muted;
      localStorage.setItem(STORAGE.mute, state.muted ? '1' : '0');
      updateMuteUI();
    });

    $('btnTheme').addEventListener('click', () => {
      const i = THEMES.indexOf(normalizeTheme(state.theme));
      state.theme = THEMES[(i + 1) % THEMES.length];
      localStorage.setItem(STORAGE.theme, state.theme);
      applyTheme();
    });

    $('btnHome').addEventListener('click', () => {
      showScreen($('screenStart'));
      renderLevelList();
      $('headerSubtitle').textContent = 'For You · Italiano 3';
    });

    $('btnQuick').addEventListener('click', startQuick);

    document.querySelectorAll('.help-chip').forEach((chip) => {
      chip.addEventListener('click', () => setHelp(chip.dataset.help));
    });

    $('btnPrev').addEventListener('click', () => goTo(state.index - 1));
    $('btnNext').addEventListener('click', () => goTo(state.index + 1));

    const feed = $('feed');
    let scrollTimer = null;
    feed.addEventListener(
      'scroll',
      () => {
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(syncIndexFromScroll, 80);
      },
      { passive: true }
    );

    // Keyboard / trackpad helpers on Chromebook
    document.addEventListener('keydown', (e) => {
      if (!$('screenPlay').classList.contains('active')) return;
      if (e.key === 'ArrowDown' || e.key === 'j' || e.key === 'PageDown') {
        e.preventDefault();
        goTo(state.index + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'k' || e.key === 'PageUp') {
        e.preventDefault();
        goTo(state.index - 1);
      }
    });

    $('btnReplay').addEventListener('click', () => {
      if (state.mode === 'quick') startQuick();
      else startLevel(state.levelId);
    });

    $('btnNextLevel').addEventListener('click', () => {
      if (state.mode === 'level' && state.levelId < 4) startLevel(state.levelId + 1);
    });

    $('btnBackHome').addEventListener('click', () => {
      showScreen($('screenStart'));
      renderLevelList();
      $('headerSubtitle').textContent = 'For You · Italiano 3';
    });
  }

  // —— Init ——
  loadProgress();
  applyTheme();
  updateMuteUI();
  syncHelpChips();
  renderLevelList();
  wire();
  showScreen($('screenStart'));
})();
