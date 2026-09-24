/* Italia Scroll — content pack
   Pacing: ~8–10 min/level (~9 cards). Quick Play ≈ 5 cards / 5 min.
   Region hop: late-summer coast FIRST, then unique inland gems (not Rome/Venice tourist leads).
   Captions = real conjugated Italian — never tense-name buttons. */
window.ITALIA_SCROLL = {
  version: 2,
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
    cardIds: ['l1-1', 'l2-2', 'l3-1', 'l4-2', 'l2-5'],
  },
  cards: [
    /* ========== LEVEL 1: Presente vs Imperfetto (9) — coast → inland ========== */
    {
      id: 'l1-1', level: 1, region: 'Riomaggiore', tag: 'Cinque Terre', emoji: '🌊🚂', bg: 'bg-cinque',
      culture: 'Late-summer last swim before the regional train home.',
      prompt: 'You’re still ON the rocks with wet hair. Caption RIGHT NOW.',
      gloss: 'Live beach moment — not an old habit.',
      captions: [
        'Facciamo l’ultimo bagno prima del treno, dai!',
        'Facevamo sempre l’ultimo bagno prima del treno',
      ],
      correct: 0,
      why: [
        '',
        'That second caption is a past habit (“we used to”). You’re in the water now — present.',
      ],
    },
    {
      id: 'l1-2', level: 1, region: 'Polignano', tag: 'Puglia', emoji: '🤿🌅', bg: 'bg-puglia',
      culture: 'Cliff jumpers + gelato drips on the lungomare.',
      prompt: 'Caption how August evenings USED TO feel here.',
      gloss: 'Looking back on repeated summers → imperfect.',
      captions: [
        'Ogni sera a agosto ci tuffavamo e poi prendevamo un gelato',
        'Stasera ci tuffiamo e poi prendiamo un gelato',
      ],
      correct: 0,
      why: [
        '',
        '“Stasera ci tuffiamo” is tonight’s plan. Prompt wants how August used to go — imperfect.',
      ],
    },
    {
      id: 'l1-3', level: 1, region: 'Tropea', tag: 'Calabria', emoji: '🏖️🧅', bg: 'bg-tropea',
      culture: 'Red onions, turquoise water, nonni selling fruit on the beach path.',
      prompt: 'Posting LIVE from the sand. What’s happening?',
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
      id: 'l1-4', level: 1, region: 'San Vito', tag: 'Sicilia', emoji: '⛺🐬', bg: 'bg-sicilia',
      culture: 'Camping near San Vito Lo Capo — tent zippers and sea salt.',
      prompt: 'Nostalgia: how camping mornings USED TO start.',
      gloss: 'Repeated past mornings → imperfect.',
      captions: [
        'Al campeggio ci svegliamo con il suono del mare',
        'Al campeggio ci svegliavamo con il suono del mare',
      ],
      correct: 1,
      why: [
        '“Ci svegliamo” is today’s routine. Prompt wants the old camping vibe — imperfect.',
        '',
      ],
    },
    {
      id: 'l1-5', level: 1, region: 'Procida', tag: 'Campania', emoji: '🎨⛴️', bg: 'bg-procida',
      culture: 'Pastel harbor, tiny ferry, zero tourist-brochure energy.',
      prompt: 'Ferry is pulling in NOW. Live caption?',
      gloss: 'Happening as you post → present.',
      captions: [
        'Il traghetto arriva e tutti scattano foto del porto',
        'Il traghetto arrivava e tutti scattavano foto del porto',
      ],
      correct: 0,
      why: [
        '',
        'Imperfect = past scene. Ferry is arriving in real time — present.',
      ],
    },
    {
      id: 'l1-6', level: 1, region: 'Matera', tag: 'Basilicata', emoji: '🪨🌙', bg: 'bg-matera',
      culture: 'Sassi lit up at dusk — stone lanes, soft voices.',
      prompt: 'How evenings USED TO feel when you first visited.',
      gloss: 'Remembered atmosphere → imperfect.',
      captions: [
        'A Matera la sera i Sassi diventano magici',
        'A Matera la sera i Sassi diventavano magici e noi camminavamo in silenzio',
      ],
      correct: 1,
      why: [
        'Present describes a general truth. Prompt wants how it used to feel on your trip — imperfect.',
        '',
      ],
    },
    {
      id: 'l1-7', level: 1, region: 'Alberobello', tag: 'Puglia', emoji: '🏠⚪', bg: 'bg-trulli',
      culture: 'Trulli roofs, souvenir magnets, gelato between cone-shaped houses.',
      prompt: 'You’re wandering the trulli streets RIGHT NOW.',
      gloss: 'Live stroll → present.',
      captions: [
        'Giri tra i trulli e mangi un gelato, classico',
        'Giravi tra i trulli e mangiavi un gelato',
      ],
      correct: 0,
      why: [
        '',
        'Imperfect is a past wander. You’re there now — present (“giri / mangi”).',
      ],
    },
    {
      id: 'l1-8', level: 1, region: 'Bologna', tag: 'Emilia-Romagna', emoji: '🍝🏫', bg: 'bg-bologna',
      culture: 'Portici + tortellini opinions after school.',
      prompt: 'Looking back: how afternoons USED TO go near Via Zamboni.',
      gloss: 'Past student routine → imperfect.',
      captions: [
        'Dopo scuola andavamo sempre sotto i portici a mangiare qualcosa',
        'Dopo scuola andiamo sotto i portici a mangiare qualcosa',
      ],
      correct: 0,
      why: [
        '',
        '“Andiamo” is today’s plan. Old after-school loop = imperfect.',
      ],
    },
    {
      id: 'l1-9', level: 1, region: 'Torino', tag: 'Piemonte', emoji: '☕🍫', bg: 'bg-torino',
      culture: 'Bicerin + arcade lights near Piazza Castello.',
      prompt: 'It’s raining and you’re IN the historic caffè NOW.',
      gloss: 'Current moment → present.',
      captions: [
        'Prendo un bicerin e aspetto che smetta di piovere',
        'Prendevo un bicerin e aspettavo che smettesse di piovere',
      ],
      correct: 0,
      why: [
        '',
        'Imperfect = past rainy habit. You’re ordering now — present.',
      ],
    },

    /* ========== LEVEL 2: Presente vs Passato prossimo (9) ========== */
    {
      id: 'l2-1', level: 2, region: 'Sperlonga', tag: 'Lazio costa', emoji: '🏖️📸', bg: 'bg-sperlonga',
      culture: 'White town above the beach — stairs, salt, selfies.',
      prompt: 'You JUST reached the sand. Finished climb.',
      gloss: 'Completed arrival → passato prossimo.',
      captions: [
        'Siamo scesi in spiaggia, finalmente!',
        'Scendiamo in spiaggia, finalmente!',
      ],
      correct: 0,
      why: [
        '',
        '“Scendiamo” = still going down. You’re already on the sand — “siamo scesi.”',
      ],
    },
    {
      id: 'l2-2', level: 2, region: 'Costa Smeralda', tag: 'Sardegna', emoji: '⛵💙', bg: 'bg-sardegna',
      culture: 'Not yacht-brochure — just teens on a local beach bus.',
      prompt: 'Still scrolling for the next bus LIVE.',
      gloss: 'In progress → present.',
      captions: [
        'Aspetta, guardo orari del bus per la spiaggia…',
        'Aspetta, ho guardato orari del bus per la spiaggia…',
      ],
      correct: 0,
      why: [
        '',
        '“Ho guardato” = already checked. You’re mid-scroll — present.',
      ],
    },
    {
      id: 'l2-3', level: 2, region: 'Elba', tag: 'Toscana', emoji: '⛴️🌞', bg: 'bg-elba',
      culture: 'Ferry crossing with too many backpacks.',
      prompt: 'Ferry just DOCKED. Mark the arrival.',
      gloss: 'Finished event → passato prossimo.',
      captions: [
        'Il traghetto è arrivato, ci vediamo al porto!',
        'Il traghetto arriva, ci vediamo al porto!',
      ],
      correct: 0,
      why: [
        '',
        '“Arriva” = it’s arriving. It already docked — “è arrivato.”',
      ],
    },
    {
      id: 'l2-4', level: 2, region: 'Ortigia', tag: 'Sicilia', emoji: '🐟🌅', bg: 'bg-ortigia',
      culture: 'Market fish, island alleys, sunset on the bridge.',
      prompt: 'Snapping market photos NOW.',
      gloss: 'Live shooting → present.',
      captions: [
        'Faccio un sacco di foto al mercato, aspetta',
        'Ho fatto un sacco di foto al mercato, aspetta',
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
      prompt: 'You JUST rented the rowboat. Finished step.',
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
      prompt: 'Walking through the market NOW with friends.',
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
      id: 'l2-9', level: 2, region: 'Ravenna', tag: 'Emilia-Romagna', emoji: '✨🏛️', bg: 'bg-ravenna',
      culture: 'Gold mosaics that make everyone whisper.',
      prompt: 'Sofia JUST texted the group from inside.',
      gloss: 'Message already sent → passato prossimo.',
      captions: [
        'Sofia ha scritto: “raga i mosaici sono assurdi”',
        'Sofia scrive: “raga i mosaici sono assurdi”',
      ],
      correct: 0,
      why: [
        '',
        '“Scrive” = she’s writing / habit. She already hit send — “ha scritto.”',
      ],
    },

    /* ========== LEVEL 3: Passato prossimo vs Imperfetto (9) ========== */
    {
      id: 'l3-1', level: 3, region: 'Salento', tag: 'Puglia', emoji: '🌊💨', bg: 'bg-puglia',
      culture: 'Wind kicked up mid-beach day — towels everywhere.',
      prompt: 'Set the SCENE of that windy morning.',
      gloss: 'Background weather / vibe → imperfect.',
      captions: [
        'C’era un vento fortissimo ma il mare era bellissimo',
        'C’è stato un vento fortissimo ma il mare è stato bellissimo',
      ],
      correct: 0,
      why: [
        '',
        'Ongoing weather + vibe = imperfect. Passato prossimo punches single finished events.',
      ],
    },
    {
      id: 'l3-2', level: 3, region: 'Positano', tag: 'Costiera', emoji: '🛵😱', bg: 'bg-amalfi',
      culture: 'Tiny road, big bus, heart-attack mirrors.',
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
      id: 'l3-3', level: 3, region: 'Matera', tag: 'Basilicata', emoji: '🕯️🪨', bg: 'bg-matera',
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
        'Mood and ongoing glow = imperfect. Passato prossimo sounds like a checklist.',
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
      id: 'l3-5', level: 3, region: 'Chioggia', tag: 'Veneto laguna', emoji: '🚤🌧️', bg: 'bg-chioggia',
      culture: 'Mini-Venice locals actually use — fish market + bikes.',
      prompt: 'Ongoing rain on the calli that afternoon.',
      gloss: 'Ongoing situation → imperfect.',
      captions: [
        'Pioveva sui canali e noi pedalavamo sotto un ombrello solo',
        'Ha piovuto sui canali e noi abbiamo pedato sotto un ombrello solo',
      ],
      correct: 0,
      why: [
        '',
        'Painting the rainy ride = imperfect. Passato prossimo stacks finished results.',
      ],
    },
    {
      id: 'l3-6', level: 3, region: 'Palermo', tag: 'Sicilia', emoji: '⚽💥', bg: 'bg-palermo',
      culture: 'Street calcio in the neighborhood — sudden winning goal.',
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
        '“Alla fine” + arrival = passato prossimo. Imperfect keeps it unfinished.',
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
      id: 'l4-1', level: 4, region: 'Riomaggiore', tag: 'Cinque Terre', emoji: '📲🌊', bg: 'bg-cinque',
      culture: 'Last-day story from the harbor stairs.',
      prompt: 'You JUST posted the story. Finished action.',
      gloss: 'Completed post → passato prossimo.',
      captions: [
        'Ho messo la storia dal porto, guardate',
        'Metto la storia dal porto, guardate',
        'Mettevo sempre la storia dal porto',
      ],
      correct: 0,
      why: [
        '',
        '“Metto” = doing it now. You already posted — passato prossimo.',
        'Imperfect is an old habit. This is today’s finished post.',
      ],
    },
    {
      id: 'l4-2', level: 4, region: 'Polignano', tag: 'Puglia', emoji: '🚌☀️', bg: 'bg-puglia',
      culture: 'Beach-bus morning — someone always forgets sunscreen.',
      prompt: 'Live update FROM the bus.',
      gloss: 'Happening now → present.',
      captions: [
        'Siamo sul bus e Marco non trova la crema solare 😂',
        'Siamo stati sul bus e Marco non ha trovato la crema',
        'Eravamo sul bus e Marco non trovava la crema',
      ],
      correct: 0,
      why: [
        '',
        'Passato prossimo wraps a finished trip. You’re still on the bus — present.',
        'Imperfect is a past scene. This is live — present.',
      ],
    },
    {
      id: 'l4-3', level: 4, region: 'Matera', tag: 'Basilicata', emoji: '🪨🕯️', bg: 'bg-matera',
      culture: 'Quiet lanes after the day-trip crowds leave.',
      prompt: 'How the Sassi FELT while you wandered at dusk.',
      gloss: 'Past atmosphere → imperfect.',
      captions: [
        'Nei Sassi c’era silenzio e tutti parlavano piano',
        'Nei Sassi c’è silenzio e tutti parlano piano',
        'Nei Sassi c’è stato silenzio e tutti hanno parlato piano',
      ],
      correct: 0,
      why: [
        '',
        'Present is now. Prompt wants remembered dusk — imperfect.',
        'Passato prossimo lists finished actions. Scene-setting = imperfect.',
      ],
    },
    {
      id: 'l4-4', level: 4, region: 'Bologna', tag: 'Emilia-Romagna', emoji: '⚽🧡', bg: 'bg-bologna',
      culture: 'Neighborhood pickup game under the portici lights.',
      prompt: 'Sudden winning goal. Mark the event.',
      gloss: 'Finished beat → passato prossimo.',
      captions: [
        'All’ultimo minuto abbiamo segnato e siamo impazziti',
        'All’ultimo minuto segniamo e impazziamo',
        'All’ultimo minuto segnavamo e impazzivamo',
      ],
      correct: 0,
      why: [
        '',
        'Present would be a live call; this is a finished story beat.',
        'Imperfect keeps it ongoing. Goal already landed — passato prossimo.',
      ],
    },
    {
      id: 'l4-5', level: 4, region: 'Procida', tag: 'Campania', emoji: '📸🎨', bg: 'bg-procida',
      culture: 'Harbor selfie with pastel houses behind you.',
      prompt: 'You’re posing RIGHT NOW.',
      gloss: 'Live selfie → present.',
      captions: [
        'Facciamo una foto al porto, dai — uno, due, tre!',
        'Abbiamo fatto una foto al porto, dai',
        'Facevamo sempre una foto al porto',
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
      id: 'l4-9', level: 4, region: 'Braies', tag: 'Dolomiti', emoji: '🌧️🏠', bg: 'bg-braies',
      culture: 'Rainy cabin Sunday — movies, blankets, snacks.',
      prompt: 'Paint LAST Sunday’s cozy scene.',
      gloss: 'Past atmosphere → imperfect.',
      captions: [
        'Domenica scorsa pioveva e guardavamo film tutto il giorno',
        'Domenica scorsa piove e guardiamo film tutto il giorno',
        'Domenica scorsa ha piovuto e abbiamo guardato film tutto il giorno',
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
