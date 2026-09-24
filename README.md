# Italia Scroll · Italiano 3

TikTok-style **vertical scroll through Italy** for Sue Scotto’s Italian 3 (AppuccinoHub).

Each card = a **region moment** + culture/food bite + **choose the correct Italian caption** (real conjugated sentences — never buttons labeled Presente / Imperfetto / Passato prossimo).

**Live:** https://appuccinohub.github.io/italia-scroll/

## Classroom pacing

| Mode | Length | Notes |
|------|--------|--------|
| Levels 1–4 | ≈ 8–10 min each (~9 cards) | One level per class day works best |
| Quick Play | ≈ 5 min (5 cards) | Warm-up or exit ticket |

Kids turn 10-minute plans into 20 and get bored — keep sessions short.

## Unlock path

1. **Ora o abitudine?** — Presente vs Imperfetto  
2. **Ora o fatto?** — Presente vs Passato prossimo  
3. **Sfondo o momento?** — Passato prossimo vs Imperfetto  
4. **Mix totale** — all three (3 caption choices)

Complete a level to unlock the next (IEP-friendly). Soft first-try score. Replay unlocked levels. Progress in `localStorage`.

On a miss: short high-school English explanation, then try again. Help for everyone (English gloss default-on).

## Regions (Campania coast first → unique Italy)

**Opener (Sue’s area):** Bacoli → **Monte di Procida** (hometown of Professoressa Scotto — light teacher cameo) → Ischia → Capri.

Then: Tropea, Polignano, Matera, Alberobello, Bologna, Lecce, Genova, Braies, Palermo, Ortigia, Torino, and more.

**Not** a Rome/Venice tourist brochure lead.

## Tech

Vanilla HTML/CSS/JS. No build step.

```
index.html  styles.css  app.js  data.js  manifest.webmanifest  og.png
```

Cache-bust: `?v=3` on assets. Themes (header tap cycles, persisted): **Sky lemon** (default light) → **Fall** (terracotta / muted gold) → **Dark**. Sound muted by default. Mute + theme always in the header — no modal sheets.

Chromebook: centered ~400px feed, trackpad scroll, ↑↓ / click next. Phone: full-viewport snap scroll.

**No modal bottom sheets / Chiudi overlays** (Safari trap learned on Film Set).

## Local

Open `index.html` or serve the folder:

```bash
python3 -m http.server 8080 --directory .
```

## Identity

AppuccinoHub classroom app for Sue Scotto. Do not confuse with italian-dms / film-set-demo / time-glitch-demo.
