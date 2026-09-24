/* Italia Scroll — content pack
   Pacing: ~8–10 min/level (~9 cards). Quick Play ≈ 5 cards / 5 min.
   Region hop: Bacoli → Monte di Procida (Prof.ssa Scotto) → Ischia → Capri,
   then lesser-known gems. Avoid Rome/Venice leads.
   Captions = real conjugated Italian — never tense-name buttons. */
window.ITALIA_SCROLL = {
  version: 3,
  levels: [
    {
      id: 1,
      title: 'Ora o abitudine?',
      blurb: 'Presente vs Imperfetto — happening now vs how things used to feel.',
      minutes: '≈ 8–10 min',
      contrast: 'presente-imperfetto',
    },
    {
      id: 2,
      title: 'Ora o fatto?',
      blurb: 'Presente vs Passato prossimo — live action vs a finished beat.',
      minutes: '≈ 8–10 min',
      contrast: 'presente-passato',
    },
    {
      id: 3,
      title: 'Sfondo o momento?',
      blurb: 'Passato prossimo vs Imperfetto — the scene vs the sudden event.',
      minutes: '≈ 8–10 min',
      contrast: 'passato-imperfetto',
    },
    {
      id: 4,
      title: 'Mix totale',
      blurb: 'All three — pick the caption that fits the vibe.',
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
  cards: [
    /* ========== LEVEL 1: Presente vs Imperfetto (9) ========== */
    {
      id: 'l1-1', level: 1, region: 'Bacoli', tag: 'Campania · golfo', emoji: '🌊🌅', bg: 'bg-bacoli',
      culture: 'Centumcellae vibes — lake, sea, and that late-summer light over the gulf.',
      prompt: 'You’re on the Bacoli waterfront RIGHT NOW. Caption it.',
      gloss: 'Live coastal moment — not an old habit.',
      captions: [
        'Siamo a Bacoli e il golfo è incredibile stasera',
        'Eravamo a Bacoli e il golfo era sempre incredibile',
      ],
      correct: 0,
      why: [
        '',
        'That second caption paints a past scene. You’re there tonight — present.',
      ],
    },
    {
      id: 'l1-2', level: 1, region: 'Monte di Procida', tag: 'Campania · casa della prof', emoji: '🏔️🇮🇹', bg: 'bg-mdp',
      culture: 'Hometown of Professoressa Scotto — cliff belvedere over the gulf, passeggiata energy, gelato with a view (not a tourist brochure).',
      prompt: 'Class trip vibe: you’re at the belvedere in the professoressa’s town. Caption RIGHT NOW.',
      gloss: 'Live overlook moment — “la professoressa è di qui.”',
      captions: [
        'Siamo al belvedere di Monte di Procida — la professoressa è di qui!',
        'Andavamo sempre al belvedere di Monte di Procida da piccoli',
      ],
      correct: 0,
      why: [
        '',
        'Imperfect is a childhood habit. You’re standing there now with the class — present.',
      ],
    },
    {
      id: 'l1-3', level: 1, region: 'Ischia', tag: 'Campania · isola', emoji: '♨️🏖️', bg: 'bg-ischia',
      culture: 'Thermal steam + beach bag — locals know which spiaggia stays chill.',
      prompt: 'Caption how summers USED TO feel on the island.',
      gloss: 'Looking back on repeated summers → imperfect.',
      captions: [
        'Ogni estate andavamo a Ischia e restavamo ore in spiaggia',
        'Stasera andiamo a Ischia e restiamo ore in spiaggia',
      ],
      correct: 0,
      why: [
        '',
        '“Stasera andiamo” is tonight’s plan. Prompt wants how summers used to go — imperfect.',
      ],
    },
    {
      id: 'l1-4', level: 1, region: 'Capri', tag: 'Campania · faraglioni', emoji: '⛵💙', bg: 'bg-capri',
      culture: 'Faraglioni from the boat — phones up, wind in your face.',
      prompt: 'Boat is moving NOW toward the Faraglioni. Live caption?',
      gloss: 'Happening as you post → present.',
      captions: [
        'Vediamo i Faraglioni dalla barca, raga 🔥',
        'Vedevamo sempre i Faraglioni dalla barca',
      ],
      correct: 0,
      why: [
        '',
        'Imperfect = past habit. You’re on the boat now — present.',
      ],
    },
    {
      id: 'l1-5', level: 1, region: 'Tropea', tag: 'Calabria', emoji: '🏖️🧅', bg: 'bg-tropea',
      culture: 'Red onions, turquoise water, fruit stalls on the beach path.',
      prompt: 'Posting LIVE from the sand.',
      gloss: 'Right now on the beach → present.',
      captions: [
        'Siamo a Tropea e il mare è pazzesco oggi 💙',
        'Eravamo a Tropea e il mare era sempre pazzesco',
      ],
      correct: 0,
      why: [
        '',
        'Imperfect paints a past scene. You’re there today — present.',
      ],
    },
    {
      id: 'l1-6', level: 1, region: 'Polignano', tag: 'Puglia', emoji: '🤿🌅', bg: 'bg-puglia',
      culture: 'Cliff jumpers + gelato drips on the lungomare.',
      prompt: 'How August evenings USED TO feel here.',
      gloss: 'Repeated past evenings → imperfect.',
      captions: [
        'Ogni sera a agosto ci tuffavamo e poi prendevamo un gelato',
        'Stasera ci tuffiamo e poi prendiamo un gelato',
      ],
      correct: 0,
      why: [
        '',
        '“Stasera ci tuffiamo” is tonight. Prompt wants how August used to feel — imperfect.',
      ],
    },
    {
      id: 'l1-7', level: 1, region: 'Matera', tag: 'Basilicata', emoji: '🪨🌙', bg: 'bg-matera',
      culture: 'Sassi lit up at dusk — stone lanes, soft voices.',
      prompt: 'How evenings USED TO feel when you first visited.',
      gloss: 'Remembered atmosphere → imperfect.',
      captions: [
        'A Matera la sera i Sassi diventano magici',
        'A Matera la sera i Sassi diventavano magici e noi camminavamo in silenzio',
      ],
      correct: 1,
      why: [
        'Present is a general truth. Prompt wants how it used to feel on your trip — imperfect.',
        '',
      ],
    },
    {
      id: 'l1-8', level: 1, region: 'Alberobello', tag: 'Puglia', emoji: '🏠⚪', bg: 'bg-trulli',
      culture: 'Trulli roofs, souvenir magnets, gelato between cone houses.',
      prompt: 'Wandering the trulli streets RIGHT NOW.',
      gloss: 'Live stroll → present.',
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
      culture: 'Portici + tortellini opinions after school.',
      prompt: 'How afternoons USED TO go near Via Zamboni.',
      gloss: 'Past student routine → imperfect.',
      captions: [
        'Dopo scuola andavamo sempre sotto i portici a mangiare qualcosa',
        'Dopo scuola andiamo sotto i portici a mangiare qualcosa',
      ],
      correct: 0,
      why: [
        '',
        '“Andiamo” is today. Old after-school loop = imperfect.',
      ],
    },

    /* ========== LEVEL 2: Presente vs Passato prossimo (9) ========== */
    {
      id: 'l2-1', level: 2, region: 'Bacoli', tag: 'Campania · golfo', emoji: '🏖️📸', bg: 'bg-bacoli',
      culture: 'Stairs down to the water — salt on your phone case.',
      prompt: 'You JUST reached the sand. Finished climb.',
      gloss: 'Completed arrival → passato prossimo.',
      captions: [
        'Siamo scesi in spiaggia a Bacoli, finalmente!',
        'Scendiamo in spiaggia a Bacoli, finalmente!',
      ],
      correct: 0,
      why: [
        '',
        '“Scendiamo” = still going down. You’re already on the sand — “siamo scesi.”',
      ],
    },
    {
      id: 'l2-2', level: 2, region: 'Monte di Procida', tag: 'Campania · casa della prof', emoji: '🍦🌄', bg: 'bg-mdp',
      culture: 'Gelato stop with a gulf view — belvedere light, local passeggiata energy.',
      prompt: 'Still choosing a flavor at the gelateria LIVE.',
      gloss: 'In progress → present.',
      captions: [
        'Aspetta, scelgo il gusto guardando il golfo…',
        'Aspetta, ho scelto il gusto guardando il golfo…',
      ],
      correct: 0,
      why: [
        '',
        '“Ho scelto” = already picked. You’re still deciding — present.',
      ],
    },
    {
      id: 'l2-3', level: 2, region: 'Ischia', tag: 'Campania · isola', emoji: '⛴️🌞', bg: 'bg-ischia',
      culture: 'Ferry crossing with too many backpacks.',
      prompt: 'Ferry just DOCKED. Mark the arrival.',
      gloss: 'Finished event → passato prossimo.',
      captions: [
        'Il traghetto è arrivato a Ischia, ci vediamo al porto!',
        'Il traghetto arriva a Ischia, ci vediamo al porto!',
      ],
      correct: 0,
      why: [
        '',
        '“Arriva” = it’s arriving. It already docked — “è arrivato.”',
      ],
    },
    {
      id: 'l2-4', level: 2, region: 'Capri', tag: 'Campania · faraglioni', emoji: '📸💙', bg: 'bg-capri',
      culture: 'Piazzetta energy — quick photo, then keep moving.',
      prompt: 'Snapping photos NOW.',
      gloss: 'Live shooting → present.',
      captions: [
        'Faccio un sacco di foto a Capri, aspetta',
        'Ho fatto un sacco di foto a Capri, aspetta',
      ],
      correct: 0,
      why: [
        '',
        '“Ho fatto” = already done. You’re still shooting — present.',
      ],
    },
    {
      id: 'l2-5', level: 2, region: 'Lecce', tag: 'Puglia', emoji: '🏛️🍨', bg: 'bg-lecce',
      culture: 'Baroque stone + pasticciotto sugar crash.',
      prompt: 'You just GRABBED pasticciotti for the group. Done.',
      gloss: 'Completed errand → passato prossimo.',
      captions: [
        'Ok fatto, ho preso i pasticciotti per tutti',
        'Ok, prendo i pasticciotti per tutti',
      ],
      correct: 0,
      why: [
        '',
        '“Prendo” = still doing it. “Ho preso” = bag is already in hand.',
      ],
    },
    {
      id: 'l2-6', level: 2, region: 'Genova', tag: 'Liguria', emoji: '🚢🌿', bg: 'bg-genova',
      culture: 'Vicoli, focaccia, sudden rain near the porto antico.',
      prompt: 'Ordering focaccia at the counter LIVE.',
      gloss: 'Current order → present.',
      captions: [
        'Prendo una focaccia e corro al porto, ehi',
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
      culture: 'Lake selfie line — cold water, big mountains.',
      prompt: 'You JUST rented the rowboat.',
      gloss: 'Completed rental → passato prossimo.',
      captions: [
        'Abbiamo noleggiato la barca, andiamo sul lago!',
        'Noleggiamo la barca, andiamo sul lago!',
      ],
      correct: 0,
      why: [
        '',
        '“Noleggiamo” = still renting. Boat’s already yours — “abbiamo noleggiato.”',
      ],
    },
    {
      id: 'l2-8', level: 2, region: 'Palermo', tag: 'Sicilia', emoji: '🥙🔥', bg: 'bg-palermo',
      culture: 'Ballarò market — panelle, noise, scooter mirrors.',
      prompt: 'Walking through the market NOW.',
      gloss: 'Live wander → present.',
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
      culture: 'Market fish, island alleys, sunset on the bridge.',
      prompt: 'Sofia JUST texted the group from the market.',
      gloss: 'Message already sent → passato prossimo.',
      captions: [
        'Sofia ha scritto: “raga Ortigia è pazzesca”',
        'Sofia scrive: “raga Ortigia è pazzesca”',
      ],
      correct: 0,
      why: [
        '',
        '“Scrive” = she’s writing / habit. She already hit send — “ha scritto.”',
      ],
    },

    /* ========== LEVEL 3: Passato prossimo vs Imperfetto (9) ========== */
    {
      id: 'l3-1', level: 3, region: 'Monte di Procida', tag: 'Campania · casa della prof', emoji: '🌅💨', bg: 'bg-mdp',
      culture: 'Wind on the belvedere — gulf glittering below the cliff town.',
      prompt: 'Set the SCENE of that windy evening overlook.',
      gloss: 'Background weather / vibe → imperfect.',
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
      culture: 'Island bus on a tiny road — mirrors and prayers.',
      prompt: 'Sudden near-miss with a bus. Mark the EVENT.',
      gloss: 'Sudden finished moment → passato prossimo.',
      captions: [
        'All’improvviso un bus ci è passato a un centimetro',
        'All’improvviso un bus ci passava a un centimetro',
      ],
      correct: 0,
      why: [
        '',
        '“All’improvviso” + completed scare = passato prossimo, not ongoing imperfect.',
      ],
    },
    {
      id: 'l3-3', level: 3, region: 'Capri', tag: 'Campania · faraglioni', emoji: '⛵💙', bg: 'bg-capri',
      culture: 'Boat tour pause under the Faraglioni.',
      prompt: 'How the water FELT while you floated there.',
      gloss: 'Atmosphere → imperfect.',
      captions: [
        'Sotto i Faraglioni l’acqua era trasparente e tutti restavano in silenzio',
        'Sotto i Faraglioni l’acqua è stata trasparente e tutti sono restati in silenzio',
      ],
      correct: 0,
      why: [
        '',
        'Mood and ongoing quiet = imperfect. Passato prossimo sounds like a checklist.',
      ],
    },
    {
      id: 'l3-4', level: 3, region: 'Bologna', tag: 'Emilia-Romagna', emoji: '🎂🎉', bg: 'bg-bologna',
      culture: 'Surprise torta in a tiny trattoria after exams.',
      prompt: 'The cake suddenly APPEARED. Event.',
      gloss: 'Sudden completed beat → passato prossimo.',
      captions: [
        'Poi è arrivata la torta e abbiamo cantato tutti',
        'Poi arrivava la torta e cantavamo tutti',
      ],
      correct: 0,
      why: [
        '',
        'Cake arrival is a finished story beat — passato prossimo.',
      ],
    },
    {
      id: 'l3-5', level: 3, region: 'Matera', tag: 'Basilicata', emoji: '🕯️🪨', bg: 'bg-matera',
      culture: 'Night walk in the Sassi with the class trip.',
      prompt: 'How the stone city FELT that night.',
      gloss: 'Atmosphere → imperfect.',
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
      culture: 'Street calcio — sudden winning goal.',
      prompt: 'The GOAL itself. Finished moment.',
      gloss: 'Single completed event → passato prossimo.',
      captions: [
        'All’ultimo minuto abbiamo segnato e tutti hanno urlato',
        'All’ultimo minuto segnavamo e tutti urlavano',
      ],
      correct: 0,
      why: [
        '',
        'That goal and the shout are finished beats — passato prossimo.',
      ],
    },
    {
      id: 'l3-7', level: 3, region: 'Torino', tag: 'Piemonte', emoji: '🌙🍫', bg: 'bg-torino',
      culture: 'Late walk with gianduiotto in hand.',
      prompt: 'How the evening FELT while you walked.',
      gloss: 'Ongoing evening mood → imperfect.',
      captions: [
        'Era tardi ma nessuno voleva tornare a casa',
        'È stato tardi ma nessuno ha voluto tornare a casa',
      ],
      correct: 0,
      why: [
        '',
        '“It was late / nobody wanted” = imperfect mood.',
      ],
    },
    {
      id: 'l3-8', level: 3, region: 'Tropea', tag: 'Calabria', emoji: '🚌😅', bg: 'bg-tropea',
      culture: 'Coastal bus finally shows — 40 minutes late.',
      prompt: 'The bus finally SHOWED UP. Event.',
      gloss: 'Completed arrival → passato prossimo.',
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
      culture: 'Cabin study session while snow taps the window.',
      prompt: 'Background: snow + quiet study vibe.',
      gloss: 'Ongoing scene → imperfect.',
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
      culture: 'Last light over the gulf — story time.',
      prompt: 'You JUST posted the story. Finished action.',
      gloss: 'Completed post → passato prossimo.',
      captions: [
        'Ho messo la storia da Bacoli, guardate',
        'Metto la storia da Bacoli, guardate',
        'Mettevo sempre la storia da Bacoli',
      ],
      correct: 0,
      why: [
        '',
        '“Metto” = doing it now. You already posted — passato prossimo.',
        'Imperfect is an old habit. This is today’s finished post.',
      ],
    },
    {
      id: 'l4-2', level: 4, region: 'Monte di Procida', tag: 'Campania · casa della prof', emoji: '🚌☀️', bg: 'bg-mdp',
      culture: 'Class bus rolling into the cliff town over the gulf.',
      prompt: 'Live update FROM the bus as you arrive.',
      gloss: 'Happening now → present.',
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
      culture: 'Quiet thermal garden after the crowds thin out.',
      prompt: 'How the garden FELT while you wandered.',
      gloss: 'Past atmosphere → imperfect.',
      captions: [
        'Nel giardino termale c’era pace e tutti parlavano piano',
        'Nel giardino termale c’è pace e tutti parlano piano',
        'Nel giardino termale c’è stata pace e tutti hanno parlato piano',
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
      culture: 'Sudden clear view of the Faraglioni after clouds break.',
      prompt: 'The view suddenly OPENED. Mark the event.',
      gloss: 'Finished beat → passato prossimo.',
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
      culture: 'Cliff selfie with the Adriatic behind you.',
      prompt: 'You’re posing RIGHT NOW.',
      gloss: 'Live selfie → present.',
      captions: [
        'Facciamo una foto sulla scogliera, dai — uno, due, tre!',
        'Abbiamo fatto una foto sulla scogliera, dai',
        'Facevamo sempre una foto sulla scogliera',
      ],
      correct: 0,
      why: [
        '',
        '“Abbiamo fatto” = already snapped. You’re counting down — present.',
        'Imperfect = old habit. This is the live countdown.',
      ],
    },
    {
      id: 'l4-6', level: 4, region: 'Ortigia', tag: 'Sicilia', emoji: '🍦🌙', bg: 'bg-ortigia',
      culture: 'Gelato walk after dinner with cousins.',
      prompt: 'How evenings USED TO go at zia’s.',
      gloss: 'Repeated past evenings → imperfect.',
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
      culture: 'Street concert in the vicoli — phones up.',
      prompt: 'They JUST finished the last song.',
      gloss: 'Completed set → passato prossimo.',
      captions: [
        'Hanno finito di suonare e tutti hanno applaudito',
        'Finiscono di suonare e tutti applaudono',
        'Finivano di suonare e tutti applaudivano',
      ],
      correct: 0,
      why: [
        '',
        'Present is live encore energy. Song is over — passato prossimo.',
        'Imperfect = they were finishing. It’s done — passato prossimo.',
      ],
    },
    {
      id: 'l4-8', level: 4, region: 'Lecce', tag: 'Puglia', emoji: '🧊☀️', bg: 'bg-lecce',
      culture: 'July stone heat + iced caffè at the bar.',
      prompt: 'Live complaint FROM the bar counter.',
      gloss: 'Happening now → present.',
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
      culture: 'Rainy evening in the Sassi — soft lights, quiet lanes.',
      prompt: 'Paint LAST Sunday’s cozy scene.',
      gloss: 'Past atmosphere → imperfect.',
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
