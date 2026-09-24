/* Italia Scroll — content pack
   Pacing: ~8–10 min/level (~9 cards). Quick Play ≈ 5 cards / 5 min.
   Region hop: Bacoli → Monte di Procida (Prof.ssa Scotto) → Ischia → Capri,
   then lesser-known gems. Avoid Rome/Venice leads.
   Captions = real conjugated Italian — never tense-name buttons.
   Person scope: ONLY io, tu, lui/lei, noi (no voi, no loro).
   Distractors = same person/number, different tense. */
window.ITALIA_SCROLL = {
  version: 6,
  levels: [
    {
      id: 1,
      title: 'Ora o abitudine?',
      blurb: 'Presente · Imperfetto',
      minutes: '≈ 8–10 min',
      contrast: 'presente-imperfetto',
    },
    {
      id: 2,
      title: 'Ora o fatto?',
      blurb: 'Presente · Passato',
      minutes: '≈ 8–10 min',
      contrast: 'presente-passato',
    },
    {
      id: 3,
      title: 'Sfondo o momento?',
      blurb: 'Passato · Imperfetto',
      minutes: '≈ 8–10 min',
      contrast: 'passato-imperfetto',
    },
    {
      id: 4,
      title: 'Mix totale',
      blurb: 'Mix',
      minutes: '≈ 8–10 min',
      contrast: 'mixed',
    },
  ],
  quickPlay: {
    title: 'Quick Play',
    blurb: 'Five cards · about five minutes. Mixed tenses — warm-up or exit ticket.',
    minutes: '≈ 5 min',
    cardIds: ['l1-2', 'l2-1', 'l3-1', 'l4-2', 'l2-5'],
  },

  /* Full-bleed Unsplash photos per place (HTTPS). Gradient fallback if load fails. */
  placeImages: {
    'Bacoli': 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=900&h=1600&q=80&auto=format&fit=crop',
    'Monte di Procida': 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&h=1600&q=80&auto=format&fit=crop',
    'Ischia': 'https://images.unsplash.com/photo-1678147406500-3ade97bc4eab?w=900&h=1600&q=80&auto=format&fit=crop',
    'Capri': 'https://images.unsplash.com/photo-1562450291-1000b9ca5639?w=900&h=1600&q=80&auto=format&fit=crop',
    'Tropea': 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=900&h=1600&q=80&auto=format&fit=crop',
    'Polignano': 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=900&h=1600&q=80&auto=format&fit=crop',
    'Matera': 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&h=1600&q=80&auto=format&fit=crop',
    'Alberobello': 'https://images.unsplash.com/photo-1753641390035-0a949ca6d913?w=900&h=1600&q=80&auto=format&fit=crop',
    'Bologna': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=900&h=1600&q=80&auto=format&fit=crop',
    'Lecce': 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=900&h=1600&q=80&auto=format&fit=crop',
    'Genova': 'https://images.unsplash.com/photo-1766776964239-a531dd934b01?w=900&h=1600&q=80&auto=format&fit=crop',
    'Braies': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=1600&q=80&auto=format&fit=crop',
    'Palermo': 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=900&h=1600&q=80&auto=format&fit=crop',
    'Ortigia': 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&h=1600&q=80&auto=format&fit=crop',
    'Torino': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900&h=1600&q=80&auto=format&fit=crop',
  },
  cards: [
    /* ========== LEVEL 1: Presente vs Imperfetto (9) — noi / tu / lui ========== */
    {
      id: 'l1-1', level: 1, region: 'Bacoli', tag: 'Campania · golfo', emoji: '🌊🌅', bg: 'bg-bacoli',
      culture: 'Golfo light. Tonight.',
      prompt: 'You’re on the Bacoli waterfront RIGHT NOW. Caption it.',
      gloss: 'right now',
      person: 'noi',
      captions: [
        'Siamo a Bacoli e il golfo è incredibile stasera',
        'Eravamo a Bacoli e il golfo era sempre incredibile',
      ],
      correct: 0,
      why: [
        '',
        'Imperfect paints a past scene. You’re there tonight — present.',
      ],
    },
    {
      id: 'l1-2', level: 1, region: 'Monte di Procida', tag: 'Campania · casa della prof', emoji: '🏔️🇮🇹', bg: 'bg-mdp',
      culture: 'Casa della professoressa.',
      prompt: 'Class trip: you’re at the belvedere in her town. Caption RIGHT NOW.',
      gloss: 'right now',
      person: 'noi',
      captions: [
        'Siamo al belvedere di Monte di Procida — la professoressa è di qui!',
        'Eravamo al belvedere di Monte di Procida — la professoressa era di qui!',
      ],
      correct: 0,
      why: [
        '',
        'Imperfect is a past scene. You’re standing there now — present.',
      ],
    },
    {
      id: 'l1-3', level: 1, region: 'Ischia', tag: 'Campania · isola', emoji: '♨️🏖️', bg: 'bg-ischia',
      culture: 'Island summers.',
      prompt: 'Caption how summers USED TO feel on the island.',
      gloss: 'used to',
      person: 'noi',
      captions: [
        'Ogni estate andavamo a Ischia e restavamo ore in spiaggia',
        'Ogni estate andiamo a Ischia e restiamo ore in spiaggia',
      ],
      correct: 0,
      why: [
        '',
        'Present is today’s habit. Prompt wants how summers used to go — imperfect.',
      ],
    },
    {
      id: 'l1-4', level: 1, region: 'Capri', tag: 'Campania · faraglioni', emoji: '⛵💙', bg: 'bg-capri',
      culture: 'Faraglioni from the boat.',
      prompt: 'Boat is moving NOW toward the Faraglioni. Live caption?',
      gloss: 'right now',
      person: 'noi',
      captions: [
        'Vediamo i Faraglioni dalla barca, raga 🔥',
        'Vedevamo i Faraglioni dalla barca, raga',
      ],
      correct: 0,
      why: [
        '',
        'Imperfect = past habit. You’re on the boat now — present.',
      ],
    },
    {
      id: 'l1-5', level: 1, region: 'Tropea', tag: 'Calabria', emoji: '🏖️🧅', bg: 'bg-tropea',
      culture: 'Turquoise + cipolla rossa.',
      prompt: 'Posting LIVE from the sand.',
      gloss: 'right now',
      person: 'noi',
      captions: [
        'Siamo a Tropea e il mare è pazzesco oggi 💙',
        'Eravamo a Tropea e il mare era pazzesco',
      ],
      correct: 0,
      why: [
        '',
        'Imperfect paints a past scene. You’re there today — present.',
      ],
    },
    {
      id: 'l1-6', level: 1, region: 'Polignano', tag: 'Puglia', emoji: '🤿🌅', bg: 'bg-puglia',
      culture: 'Cliff + gelato evenings.',
      prompt: 'How August evenings USED TO feel here.',
      gloss: 'used to',
      person: 'noi',
      captions: [
        'Ogni sera ad agosto ci tuffavamo e poi prendevamo un gelato',
        'Ogni sera ad agosto ci tuffiamo e poi prendiamo un gelato',
      ],
      correct: 0,
      why: [
        '',
        'Present is tonight. Prompt wants how August used to feel — imperfect.',
      ],
    },
    {
      id: 'l1-7', level: 1, region: 'Matera', tag: 'Basilicata', emoji: '🪨🌙', bg: 'bg-matera',
      culture: 'Sassi at dusk.',
      prompt: 'How evenings USED TO feel when you first visited.',
      gloss: 'used to',
      person: 'noi',
      captions: [
        'A Matera la sera camminiamo in silenzio tra i Sassi',
        'A Matera la sera camminavamo in silenzio tra i Sassi',
      ],
      correct: 1,
      why: [
        'Present is a general now. Prompt wants how it used to feel — imperfect.',
        '',
      ],
    },
    {
      id: 'l1-8', level: 1, region: 'Alberobello', tag: 'Puglia', emoji: '🏠⚪', bg: 'bg-trulli',
      culture: 'Trulli + gelato.',
      prompt: 'Wandering the trulli streets RIGHT NOW.',
      gloss: 'right now',
      person: 'tu',
      captions: [
        'Giri tra i trulli e mangi un gelato, classico',
        'Giravi tra i trulli e mangiavi un gelato',
      ],
      correct: 0,
      why: [
        '',
        'Imperfect is a past wander. You’re there now — present.',
      ],
    },
    {
      id: 'l1-9', level: 1, region: 'Bologna', tag: 'Emilia-Romagna', emoji: '🍝🏫', bg: 'bg-bologna',
      culture: 'Portici after school.',
      prompt: 'How afternoons USED TO go near Via Zamboni.',
      gloss: 'used to',
      person: 'noi',
      captions: [
        'Dopo scuola andavamo sempre sotto i portici a mangiare qualcosa',
        'Dopo scuola andiamo sotto i portici a mangiare qualcosa',
      ],
      correct: 0,
      why: [
        '',
        'Present is today. Old after-school loop = imperfect.',
      ],
    },

    /* ========== LEVEL 2: Presente vs Passato prossimo (9) ========== */
    {
      id: 'l2-1', level: 2, region: 'Bacoli', tag: 'Campania · golfo', emoji: '🏖️📸', bg: 'bg-bacoli',
      culture: 'Stairs → sand.',
      prompt: 'You JUST reached the sand. Finished climb.',
      gloss: 'just finished',
      person: 'noi',
      captions: [
        'Siamo scesi in spiaggia a Bacoli, finalmente!',
        'Scendiamo in spiaggia a Bacoli, finalmente!',
      ],
      correct: 0,
      why: [
        '',
        'Present = still going down. You’re already on the sand — passato prossimo.',
      ],
    },
    {
      id: 'l2-2', level: 2, region: 'Monte di Procida', tag: 'Campania · casa della prof', emoji: '🍦🌄', bg: 'bg-mdp',
      culture: 'Gelato, gulf view.',
      prompt: 'Still choosing a flavor at the gelateria LIVE.',
      gloss: 'still deciding',
      person: 'io',
      captions: [
        'Aspetta, scelgo il gusto guardando il golfo…',
        'Aspetta, ho scelto il gusto guardando il golfo…',
      ],
      correct: 0,
      why: [
        '',
        'Passato prossimo = already picked. You’re still deciding — present.',
      ],
    },
    {
      id: 'l2-3', level: 2, region: 'Ischia', tag: 'Campania · isola', emoji: '⛴️🌞', bg: 'bg-ischia',
      culture: 'Ferry at the porto.',
      prompt: 'Ferry just DOCKED. Mark the arrival.',
      gloss: 'just finished',
      person: 'lui',
      captions: [
        'Il traghetto è arrivato a Ischia — ci vediamo al porto!',
        'Il traghetto arriva a Ischia — ci vediamo al porto!',
      ],
      correct: 0,
      why: [
        '',
        'Present = it’s arriving. It already docked — passato prossimo.',
      ],
    },
    {
      id: 'l2-4', level: 2, region: 'Capri', tag: 'Campania · faraglioni', emoji: '📸💙', bg: 'bg-capri',
      culture: 'Piazzetta photos.',
      prompt: 'Snapping photos NOW.',
      gloss: 'right now',
      person: 'io',
      captions: [
        'Faccio un sacco di foto a Capri, aspetta',
        'Ho fatto un sacco di foto a Capri, aspetta',
      ],
      correct: 0,
      why: [
        '',
        'Passato prossimo = already done. You’re still shooting — present.',
      ],
    },
    {
      id: 'l2-5', level: 2, region: 'Lecce', tag: 'Puglia', emoji: '🏛️🍨', bg: 'bg-lecce',
      culture: 'Pasticciotti run.',
      prompt: 'You just GRABBED pasticciotti for the group. Done.',
      gloss: 'just finished',
      person: 'io',
      captions: [
        'Ok fatto, ho preso i pasticciotti per tutti',
        'Ok, prendo i pasticciotti per tutti',
      ],
      correct: 0,
      why: [
        '',
        'Present = still doing it. Bag is already in hand — passato prossimo.',
      ],
    },
    {
      id: 'l2-6', level: 2, region: 'Genova', tag: 'Liguria', emoji: '🚢🌿', bg: 'bg-genova',
      culture: 'Focaccia counter.',
      prompt: 'Ordering focaccia at the counter LIVE.',
      gloss: 'right now',
      person: 'io',
      captions: [
        'Prendo una focaccia e corro al porto',
        'Ho preso una focaccia e sono corso al porto',
      ],
      correct: 0,
      why: [
        '',
        'Passato prossimo = already bought and ran. You’re ordering now — present.',
      ],
    },
    {
      id: 'l2-7', level: 2, region: 'Braies', tag: 'Dolomiti', emoji: '🏔️🚣', bg: 'bg-braies',
      culture: 'Rowboat on the lake.',
      prompt: 'You JUST rented the rowboat.',
      gloss: 'just finished',
      person: 'noi',
      captions: [
        'Abbiamo noleggiato la barca — andiamo sul lago!',
        'Noleggiamo la barca — andiamo sul lago!',
      ],
      correct: 0,
      why: [
        '',
        'Present = still renting. Boat’s already yours — passato prossimo.',
      ],
    },
    {
      id: 'l2-8', level: 2, region: 'Palermo', tag: 'Sicilia', emoji: '🥙🔥', bg: 'bg-palermo',
      culture: 'Ballarò noise.',
      prompt: 'Walking through the market NOW.',
      gloss: 'right now',
      person: 'noi',
      captions: [
        'Giriamo a Ballarò e mangiamo panelle al volo',
        'Abbiamo girato a Ballarò e abbiamo mangiato panelle',
      ],
      correct: 0,
      why: [
        '',
        'Passato prossimo wraps a finished trip. You’re still in the market — present.',
      ],
    },
    {
      id: 'l2-9', level: 2, region: 'Ortigia', tag: 'Sicilia', emoji: '🐟🌅', bg: 'bg-ortigia',
      culture: 'Sofia’s text.',
      prompt: 'Sofia JUST texted the group from the market.',
      gloss: 'just finished',
      person: 'lei',
      captions: [
        'Sofia ha scritto: “raga Ortigia è pazzesca”',
        'Sofia scrive: “raga Ortigia è pazzesca”',
      ],
      correct: 0,
      why: [
        '',
        'Present = she’s writing now. She already hit send — passato prossimo.',
      ],
    },

    /* ========== LEVEL 3: Passato prossimo vs Imperfetto (9) ========== */
    {
      id: 'l3-1', level: 3, region: 'Monte di Procida', tag: 'Campania · casa della prof', emoji: '🌅💨', bg: 'bg-mdp',
      culture: 'Windy belvedere.',
      prompt: 'Set the SCENE of that windy evening overlook.',
      gloss: 'the scene',
      person: 'lui',
      captions: [
        'C’era vento sul belvedere ma il golfo era bellissimo',
        'C’è stato vento sul belvedere ma il golfo è stato bellissimo',
      ],
      correct: 0,
      why: [
        '',
        'Ongoing wind + vibe = imperfect. Passato prossimo punches single finished events.',
      ],
    },
    {
      id: 'l3-2', level: 3, region: 'Ischia', tag: 'Campania · isola', emoji: '🚌😱', bg: 'bg-ischia',
      culture: 'Bus on a tiny road.',
      prompt: 'A bus suddenly PASSED you. Mark the EVENT.',
      gloss: 'sudden moment',
      person: 'lui',
      captions: [
        'All’improvviso un bus mi è passato a un centimetro',
        'All’improvviso un bus mi passava a un centimetro',
      ],
      correct: 0,
      why: [
        '',
        '“All’improvviso” + completed scare = passato prossimo, not ongoing imperfect.',
      ],
    },
    {
      id: 'l3-3', level: 3, region: 'Capri', tag: 'Campania · faraglioni', emoji: '⛵💙', bg: 'bg-capri',
      culture: 'Under the Faraglioni.',
      prompt: 'How the water FELT while you floated there.',
      gloss: 'the scene',
      person: 'lei',
      captions: [
        'Sotto i Faraglioni l’acqua era trasparente',
        'Sotto i Faraglioni l’acqua è stata trasparente',
      ],
      correct: 0,
      why: [
        '',
        'Mood and ongoing look = imperfect. Passato prossimo sounds like a checklist.',
      ],
    },
    {
      id: 'l3-4', level: 3, region: 'Bologna', tag: 'Emilia-Romagna', emoji: '🎂🎉', bg: 'bg-bologna',
      culture: 'Surprise torta.',
      prompt: 'The cake suddenly ARRIVED. Event.',
      gloss: 'sudden moment',
      person: 'lei',
      captions: [
        'Poi è arrivata la torta e noi abbiamo cantato',
        'Poi arrivava la torta e noi cantavamo',
      ],
      correct: 0,
      why: [
        '',
        'Cake arrival is a finished story beat — passato prossimo.',
      ],
    },
    {
      id: 'l3-5', level: 3, region: 'Matera', tag: 'Basilicata', emoji: '🕯️🪨', bg: 'bg-matera',
      culture: 'Night in the Sassi.',
      prompt: 'How the stone city FELT that night.',
      gloss: 'the scene',
      person: 'lui',
      captions: [
        'Nei Sassi faceva fresco e le luci erano d’oro',
        'Nei Sassi ha fatto fresco e le luci sono state d’oro',
      ],
      correct: 0,
      why: [
        '',
        'Mood and ongoing glow = imperfect.',
      ],
    },
    {
      id: 'l3-6', level: 3, region: 'Palermo', tag: 'Sicilia', emoji: '⚽💥', bg: 'bg-palermo',
      culture: 'Street calcio.',
      prompt: 'YOU scored the GOAL. Finished moment.',
      gloss: 'sudden moment',
      person: 'noi',
      captions: [
        'All’ultimo minuto abbiamo segnato e abbiamo urlato',
        'All’ultimo minuto segnavamo e urlavamo',
      ],
      correct: 0,
      why: [
        '',
        'That goal and the shout are finished beats — passato prossimo.',
      ],
    },
    {
      id: 'l3-7', level: 3, region: 'Torino', tag: 'Piemonte', emoji: '🌙🍫', bg: 'bg-torino',
      culture: 'Gianduiotto walk.',
      prompt: 'How YOU felt that evening while walking.',
      gloss: 'the scene',
      person: 'io',
      captions: [
        'Era tardi ma non volevo tornare a casa',
        'È stato tardi ma non ho voluto tornare a casa',
      ],
      correct: 0,
      why: [
        '',
        '“It was late / I didn’t want” = imperfect mood.',
      ],
    },
    {
      id: 'l3-8', level: 3, region: 'Tropea', tag: 'Calabria', emoji: '🚌😅', bg: 'bg-tropea',
      culture: 'Late coastal bus.',
      prompt: 'The bus finally SHOWED UP. Event.',
      gloss: 'sudden moment',
      person: 'lui',
      captions: [
        'Alla fine il bus è arrivato con quaranta minuti di ritardo',
        'Alla fine il bus arrivava con quaranta minuti di ritardo',
      ],
      correct: 0,
      why: [
        '',
        '“Alla fine” + arrival = passato prossimo.',
      ],
    },
    {
      id: 'l3-9', level: 3, region: 'Braies', tag: 'Dolomiti', emoji: '🎧❄️', bg: 'bg-braies',
      culture: 'Snow + headphones.',
      prompt: 'Background: snow + quiet study vibe.',
      gloss: 'the scene',
      person: 'noi',
      captions: [
        'Fuori nevicava e noi studiavamo con la musica bassa',
        'Fuori ha nevicato e noi abbiamo studiato con la musica bassa',
      ],
      correct: 0,
      why: [
        '',
        'Setting the study scene = imperfect.',
      ],
    },

    /* ========== LEVEL 4: Mixed — 3 captions (9) ========== */
    {
      id: 'l4-1', level: 4, region: 'Bacoli', tag: 'Campania · golfo', emoji: '📲🌊', bg: 'bg-bacoli',
      culture: 'Last light, story.',
      prompt: 'You JUST posted the story. Finished action.',
      gloss: 'just finished',
      person: 'io',
      captions: [
        'Ho messo la storia da Bacoli, guardate',
        'Metto la storia da Bacoli, guardate',
        'Mettevo sempre la storia da Bacoli',
      ],
      correct: 0,
      why: [
        '',
        'Present = doing it now. You already posted — passato prossimo.',
        'Imperfect is an old habit. This is today’s finished post.',
      ],
    },
    {
      id: 'l4-2', level: 4, region: 'Monte di Procida', tag: 'Campania · casa della prof', emoji: '🚌☀️', bg: 'bg-mdp',
      culture: 'Bus into her town.',
      prompt: 'Live update FROM the bus as you arrive.',
      gloss: 'right now',
      person: 'noi',
      captions: [
        'Siamo sul bus per Monte di Procida — la professoressa è di qui! 🇮🇹',
        'Siamo stati sul bus per Monte di Procida',
        'Eravamo sul bus per Monte di Procida',
      ],
      correct: 0,
      why: [
        '',
        'Passato prossimo wraps a finished trip. You’re still arriving — present.',
        'Imperfect is a past scene. This is live — present.',
      ],
    },
    {
      id: 'l4-3', level: 4, region: 'Ischia', tag: 'Campania · isola', emoji: '♨️🕰️', bg: 'bg-ischia',
      culture: 'Thermal garden quiet.',
      prompt: 'How the garden FELT while you wandered.',
      gloss: 'the scene',
      person: 'noi',
      captions: [
        'Nel giardino termale c’era pace e noi parlavamo piano',
        'Nel giardino termale c’è pace e noi parliamo piano',
        'Nel giardino termale c’è stata pace e noi abbiamo parlato piano',
      ],
      correct: 0,
      why: [
        '',
        'Present is now. Prompt wants remembered vibe — imperfect.',
        'Passato prossimo lists finished actions. Scene-setting = imperfect.',
      ],
    },
    {
      id: 'l4-4', level: 4, region: 'Capri', tag: 'Campania · faraglioni', emoji: '⛵✨', bg: 'bg-capri',
      culture: 'Clouds break.',
      prompt: 'The view suddenly OPENED. Mark the event.',
      gloss: 'sudden moment',
      person: 'noi',
      captions: [
        'All’improvviso abbiamo visto i Faraglioni e siamo rimasti senza parole',
        'All’improvviso vediamo i Faraglioni e restiamo senza parole',
        'All’improvviso vedevamo i Faraglioni e restavamo senza parole',
      ],
      correct: 0,
      why: [
        '',
        'Present would be a live call; this is a finished story beat.',
        'Imperfect keeps it ongoing. The reveal already happened — passato prossimo.',
      ],
    },
    {
      id: 'l4-5', level: 4, region: 'Polignano', tag: 'Puglia', emoji: '📸🌅', bg: 'bg-puglia',
      culture: 'Cliff selfie.',
      prompt: 'You’re posing RIGHT NOW.',
      gloss: 'right now',
      person: 'noi',
      captions: [
        'Facciamo una foto sulla scogliera — uno, due, tre!',
        'Abbiamo fatto una foto sulla scogliera',
        'Facevamo sempre una foto sulla scogliera',
      ],
      correct: 0,
      why: [
        '',
        'Passato prossimo = already snapped. You’re counting down — present.',
        'Imperfect = old habit. This is the live countdown.',
      ],
    },
    {
      id: 'l4-6', level: 4, region: 'Ortigia', tag: 'Sicilia', emoji: '🍦🌙', bg: 'bg-ortigia',
      culture: 'Gelato after cena.',
      prompt: 'How evenings USED TO go at zia’s.',
      gloss: 'used to',
      person: 'noi',
      captions: [
        'Da zia uscivamo sempre dopo cena per un gelato',
        'Da zia usciamo sempre dopo cena per un gelato',
        'Da zia siamo usciti dopo cena per un gelato',
      ],
      correct: 0,
      why: [
        '',
        'Present is today’s habit. “Used to” = imperfect.',
        'Passato prossimo = one outing. Habitual past = imperfect.',
      ],
    },
    {
      id: 'l4-7', level: 4, region: 'Genova', tag: 'Liguria', emoji: '🎸👏', bg: 'bg-genova',
      culture: 'Vicoli concert.',
      prompt: 'The band JUST finished the last song. (Marco = lui)',
      gloss: 'just finished',
      person: 'lui',
      captions: [
        'Marco ha finito di suonare e io ho applaudito',
        'Marco finisce di suonare e io applaudo',
        'Marco finiva di suonare e io applaudivo',
      ],
      correct: 0,
      why: [
        '',
        'Present is live encore energy. Song is over — passato prossimo.',
        'Imperfect = he was finishing. It’s done — passato prossimo.',
      ],
    },
    {
      id: 'l4-8', level: 4, region: 'Lecce', tag: 'Puglia', emoji: '🧊☀️', bg: 'bg-lecce',
      culture: 'July heat, iced caffè.',
      prompt: 'Live complaint FROM the bar counter.',
      gloss: 'right now',
      person: 'io',
      captions: [
        'Prendo un caffè freddo perché sto morendo di caldo',
        'Ho preso un caffè freddo perché sono morto di caldo',
        'Prendevo un caffè freddo perché morivo di caldo',
      ],
      correct: 0,
      why: [
        '',
        'Passato prossimo = already ordered. You’re ordering — present.',
        'Imperfect is a past heat habit. This is today’s order — present.',
      ],
    },
    {
      id: 'l4-9', level: 4, region: 'Matera', tag: 'Basilicata', emoji: '🪨🌧️', bg: 'bg-matera',
      culture: 'Rainy Sassi Sunday.',
      prompt: 'Paint LAST Sunday’s cozy scene.',
      gloss: 'the scene',
      person: 'noi',
      captions: [
        'Domenica scorsa pioveva e camminavamo tra i Sassi tutto il pomeriggio',
        'Domenica scorsa piove e camminiamo tra i Sassi tutto il pomeriggio',
        'Domenica scorsa ha piovuto e abbiamo camminato tra i Sassi',
      ],
      correct: 0,
      why: [
        '',
        'Present doesn’t fit “domenica scorsa.”',
        'Passato prossimo can list actions, but the cozy ongoing vibe wants imperfect.',
      ],
    },
  ],
};
