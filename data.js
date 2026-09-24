/* Italia Scroll — content pack
   Trip through Italy. Captions = real Italian. Sneak teaching: now vs past-scene feel.
   Only presente vs imperfetto under the hood (never labeled).
   Person scope: io, tu, lui/lei, noi.
   Silent unlock every 15 clears. Prove-it after correct caption.
   Hooks: Ferrari + school-safe stylish teens every ~5–8 cards. */
window.ITALIA_SCROLL = {
  "version": 9,
  "unlockEvery": 15,
  "levels": [
    {
      "id": 1,
      "title": "Costa Campania",
      "blurb": "Bacoli → Monte → Ischia → Capri…",
      "minutes": "≈ 8–10 min"
    },
    {
      "id": 2,
      "title": "Sud e isole",
      "blurb": "Tropea → Polignano → Matera…",
      "minutes": "≈ 8–10 min"
    },
    {
      "id": 3,
      "title": "Centro e Nord",
      "blurb": "Bologna → Genova → Braies…",
      "minutes": "≈ 8–10 min"
    }
  ],
  "quickPlay": {
    "title": "Quick Play",
    "blurb": "Eight cards · about two–three minutes.",
    "minutes": "≈ 2–3 min",
    "cardIds": [
      "c1-01",
      "c1-05",
      "c2-01",
      "c2-06",
      "c3-01",
      "c1-09",
      "c2-09",
      "c3-12"
    ]
  },
  "placeImages": {
    "Bacoli": [
      "images/hometown/capo-miseno.jpg",
      "images/hometown/molo-tramonto.jpg",
      "images/hometown/scogli-golfo.jpg",
      "images/hometown/faro.jpg",
      "images/hometown/lago-collina.jpg",
      "images/hometown/notte-luna.jpg",
      "images/hometown/dal-mare.jpg"
    ],
    "Monte di Procida": [
      "images/hometown/dal-mare.jpg",
      "images/hometown/capo-miseno.jpg",
      "images/hometown/faro.jpg",
      "images/hometown/lago-collina.jpg",
      "images/hometown/notte-luna.jpg",
      "images/hometown/scogli-golfo.jpg",
      "images/hometown/molo-tramonto.jpg"
    ],
    "Ischia": [
      "images/places/ischia-1.jpg",
      "images/places/ischia-2.jpg"
    ],
    "Capri": [
      "images/places/capri-fara-alt.jpg",
      "images/places/capri-1.jpg",
      "images/places/capri-2.jpg"
    ],
    "Tropea": [
      "images/places/tropea-1.jpg",
      "images/places/tropea-2.jpg"
    ],
    "Polignano": [
      "images/places/polignano-1.jpg",
      "images/places/polignano-2.jpg"
    ],
    "Matera": [
      "images/places/matera-1.jpg",
      "images/places/matera-2.jpg"
    ],
    "Alberobello": [
      "images/places/alberobello-1.jpg",
      "images/places/alberobello-2.jpg"
    ],
    "Bologna": [
      "images/places/bologna-1.jpg",
      "images/places/bologna-2.jpg"
    ],
    "Lecce": [
      "images/places/lecce-1.jpg",
      "images/places/lecce-2.jpg"
    ],
    "Genova": [
      "images/places/genova-1.jpg",
      "images/places/genova-2.jpg"
    ],
    "Braies": [
      "images/places/braies-1.jpg",
      "images/places/braies-2.jpg"
    ],
    "Palermo": [
      "images/places/palermo-1.jpg",
      "images/places/palermo-2.jpg"
    ],
    "Ortigia": [
      "images/places/ortigia-1.jpg",
      "images/places/ortigia-2.jpg"
    ],
    "Torino": [
      "images/places/torino-1.jpg",
      "images/places/torino-2.jpg"
    ],
    "Amalfi": [
      "images/places/amalfi-1.jpg",
      "images/places/amalfi-2.jpg"
    ],
    "Procida": [
      "images/places/procida-1.jpg",
      "images/places/procida-2.jpg"
    ],
    "Sperlonga": [
      "images/places/sperlonga-1.jpg",
      "images/places/sperlonga-2.jpg"
    ],
    "Ravenna": [
      "images/places/ravenna-1.jpg",
      "images/places/ravenna-2.jpg"
    ],
    "Chioggia": [
      "images/places/chioggia-1.jpg",
      "images/places/chioggia-2.jpg"
    ]
  },
  "cards": [
    {
      "id": "c1-01",
      "level": 1,
      "region": "Bacoli",
      "image": "images/hometown/molo-tramonto.jpg",
      "culture": "Golfo light. Tonight.",
      "prompt": "You’re on the Bacoli waterfront RIGHT NOW.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Siamo a Bacoli e il golfo è incredibile stasera",
        "Eravamo a Bacoli e il golfo era sempre incredibile"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one paints a past scene. You’re there tonight — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We’re there tonight",
          "We used to be there"
        ],
        "correct": 0,
        "miss": "Live now — not a memory."
      },
      "hook": false
    },
    {
      "id": "c1-02",
      "level": 1,
      "region": "Monte di Procida",
      "image": "images/hometown/capo-miseno.jpg",
      "culture": "Casa della professoressa.",
      "prompt": "Class trip: belvedere in her town. Caption RIGHT NOW.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Siamo al belvedere di Monte di Procida — la professoressa è di qui!",
        "Eravamo al belvedere di Monte di Procida — la professoressa era di qui!"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one is a past scene. You’re standing there now — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We’re at her town overlook now",
          "We used to visit her town"
        ],
        "correct": 0,
        "miss": "You’re there live."
      },
      "hook": false
    },
    {
      "id": "c1-03",
      "level": 1,
      "region": "Ischia",
      "culture": "Island summers.",
      "prompt": "How summers USED TO feel on the island.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Ogni estate andavamo a Ischia e restavamo ore in spiaggia",
        "Ogni estate andiamo a Ischia e restiamo ore in spiaggia"
      ],
      "correct": 0,
      "why": [
        "",
        "The now one is today’s habit. Prompt wants how summers used to go — The past-scene one."
      ],
      "help": "Is this painting a past scene / habit — or happening now?",
      "explain": "This one paints a past scene or “used to” habit — not a live now.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to go every summer",
          "We go every summer now"
        ],
        "correct": 0,
        "miss": "“Used to” = past habit."
      },
      "hook": false
    },
    {
      "id": "c1-04",
      "level": 1,
      "region": "Capri",
      "culture": "Faraglioni from the boat.",
      "prompt": "Boat is moving NOW toward the Faraglioni.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Vediamo i Faraglioni dalla barca, raga 🔥",
        "Vedevamo i Faraglioni dalla barca, raga"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one = past habit. You’re on the boat now — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We see them live from the boat",
          "We used to see them from the boat"
        ],
        "correct": 0,
        "miss": "Live view = present."
      },
      "hook": false
    },
    {
      "id": "c1-05",
      "level": 1,
      "region": "Capri",
      "hook": true,
      "image": "images/hooks/ferrari-1.jpg",
      "culture": "Rosso corsa on the coast.",
      "prompt": "You spot a bright red Ferrari RIGHT NOW.",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Guardo quella Ferrari rossa — pazzesca!",
        "Guardavo sempre quella Ferrari rossa"
      ],
      "correct": 0,
      "why": [
        "",
        "Past-scene “used to watch.” You’re spotting it live now."
      ],
      "help": "Are you seeing it live right now — or remembering how it used to look?",
      "explain": "This matches a live “I’m looking at it now” moment.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "I’m looking at the red Ferrari now",
          "I used to look at that Ferrari"
        ],
        "correct": 0,
        "miss": "Live look = now."
      }
    },
    {
      "id": "c1-06",
      "level": 1,
      "region": "Procida",
      "culture": "Colorful harbor.",
      "prompt": "Marco is THERE right now (lui).",
      "gloss": "right now",
      "person": "lui",
      "captions": [
        "Marco è a Procida e guarda i colori del porto",
        "Marco era a Procida e guardava i colori del porto"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one = he used to be there. He’s there now — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "Marco is there looking at the harbor",
          "Marco used to look at the harbor"
        ],
        "correct": 0,
        "miss": "He’s there now."
      },
      "hook": false
    },
    {
      "id": "c1-07",
      "level": 1,
      "region": "Amalfi",
      "culture": "Lemon coast selfie.",
      "prompt": "You’re THERE now — live story.",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Sono ad Amalfi e mangio un gelato al limone",
        "Ero ad Amalfi e mangiavo un gelato al limone"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one = past scene. You’re posting live — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "I am in Amalfi eating gelato",
          "I used to be in Amalfi eating gelato"
        ],
        "correct": 0,
        "miss": "Live selfie = present."
      },
      "hook": false
    },
    {
      "id": "c1-08",
      "level": 1,
      "region": "Capri",
      "culture": "Second look from the boat.",
      "prompt": "You’re spotting them RIGHT NOW (tu).",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Vedi i Faraglioni? Guarda lì!",
        "Vedevi i Faraglioni? Guardavi lì!"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one = past look. You’re pointing live — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "You see them right now",
          "You used to see them"
        ],
        "correct": 0,
        "miss": "Live point."
      },
      "hook": false
    },
    {
      "id": "c1-09",
      "level": 1,
      "region": "Capri",
      "hook": true,
      "image": "images/hooks/teen-girl-1.jpg",
      "culture": "Belvedere selfie energy.",
      "prompt": "She is posing for a story RIGHT NOW.",
      "gloss": "right now",
      "person": "lei",
      "captions": [
        "Lei fa una storia al belvedere, aspetta",
        "Lei faceva sempre una storia al belvedere"
      ],
      "correct": 0,
      "why": [
        "",
        "Past habit. She’s posting live now."
      ],
      "help": "Is she doing this live right now — or was it how she used to post?",
      "explain": "This matches something happening in the moment.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "She’s posting a story now",
          "She used to post stories here"
        ],
        "correct": 0,
        "miss": "Live story."
      }
    },
    {
      "id": "c1-10",
      "level": 1,
      "region": "Bacoli",
      "image": "images/hometown/faro.jpg",
      "culture": "Last light on the golfo.",
      "prompt": "Staying for sunset RIGHT NOW.",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Resto a Bacoli fino al tramonto, non parto",
        "Restavo a Bacoli fino al tramonto, non partivo"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one = you used to stay. You’re staying tonight — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "I’m staying for sunset",
          "I used to stay for sunset"
        ],
        "correct": 0,
        "miss": "Tonight = present."
      },
      "hook": false
    },
    {
      "id": "c1-11",
      "level": 1,
      "region": "Monte di Procida",
      "image": "images/hometown/lago-collina.jpg",
      "culture": "Gelato, gulf view.",
      "prompt": "How gelato stops USED TO feel here.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Al belvedere prendevamo sempre un gelato guardando il golfo",
        "Al belvedere prendiamo sempre un gelato guardando il golfo"
      ],
      "correct": 0,
      "why": [
        "",
        "That’s today’s habit. Prompt wants the old loop."
      ],
      "help": "Is this an old habit/scene — or what you do today?",
      "explain": "This paints a past habit — how gelato stops used to go.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to get gelato at the overlook",
          "We get gelato at the overlook today"
        ],
        "correct": 0,
        "miss": "Old gelato loop."
      }
    },
    {
      "id": "c1-12",
      "level": 1,
      "region": "Ischia",
      "image": null,
      "culture": "Ferry at the porto.",
      "prompt": "You’re waiting — ferry arrives in the LIVE feed.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Aspettiamo il traghetto a Ischia — ci vediamo al porto!",
        "Aspettavamo sempre il traghetto a Ischia"
      ],
      "correct": 0,
      "why": [
        "",
        "Past waiting loop. You’re waiting live now."
      ],
      "help": "Waiting live now — or how waiting used to feel?",
      "explain": "This matches the live wait happening now.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We’re waiting for the ferry now",
          "We used to wait for the ferry"
        ],
        "correct": 0,
        "miss": "Live wait."
      }
    },
    {
      "id": "c1-13",
      "level": 1,
      "region": "Amalfi",
      "hook": true,
      "image": "images/hooks/teen-boy-2.jpg",
      "culture": "Lemon-coast smile.",
      "prompt": "He is smiling for the group pic RIGHT NOW.",
      "gloss": "right now",
      "person": "lui",
      "captions": [
        "Lui sorride per la foto ad Amalfi",
        "Lui sorrideva sempre per le foto ad Amalfi"
      ],
      "correct": 0,
      "why": [
        "",
        "Past habit of smiling. He’s mid-smile now."
      ],
      "help": "Live smile right now — or how he used to smile for photos?",
      "explain": "This matches a smile happening in the moment.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "He’s smiling for the photo now",
          "He used to smile for photos"
        ],
        "correct": 0,
        "miss": "Live smile."
      }
    },
    {
      "id": "c1-14",
      "level": 1,
      "region": "Procida",
      "culture": "Colorful harbor habit.",
      "prompt": "How harbor evenings USED TO feel.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "La sera al porto guardavamo i colori e parlavamo piano",
        "La sera al porto guardiamo i colori e parliamo piano"
      ],
      "correct": 0,
      "why": [
        "",
        "Tonight’s habit. Prompt wants old evenings."
      ],
      "help": "Old evening scene — or what you do tonight?",
      "explain": "This paints how evenings used to feel at the harbor.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to watch the harbor colors",
          "We watch the harbor colors tonight"
        ],
        "correct": 0,
        "miss": "Old evenings."
      }
    },
    {
      "id": "c1-15",
      "level": 1,
      "region": "Capri",
      "hook": true,
      "image": "images/hooks/ferrari-2.jpg",
      "culture": "Another rosso flex.",
      "prompt": "How spotting Ferraris USED TO feel on Capri.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "A Capri vedevamo sempre una Ferrari rossa davanti al bar",
        "A Capri vediamo sempre una Ferrari rossa davanti al bar"
      ],
      "correct": 0,
      "why": [
        "",
        "That’s today’s flex. Prompt wants the old “used to see” vibe."
      ],
      "help": "Old Capri habit of spotting Ferraris — or today’s habit?",
      "explain": "This paints a past habit — Ferraris used to show up like that.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to see a red Ferrari by the bar",
          "We see a red Ferrari by the bar today"
        ],
        "correct": 0,
        "miss": "Used-to Capri flex."
      }
    },
    {
      "id": "c2-01",
      "level": 2,
      "region": "Tropea",
      "culture": "Turquoise + cipolla rossa.",
      "prompt": "Posting LIVE from the sand.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Siamo a Tropea e il mare è pazzesco oggi 💙",
        "Eravamo a Tropea e il mare era pazzesco"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one paints a past scene. You’re there today — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We’re on the sand today",
          "We used to be on the sand"
        ],
        "correct": 0,
        "miss": "Today = present."
      },
      "hook": false
    },
    {
      "id": "c2-02",
      "level": 2,
      "region": "Polignano",
      "culture": "Cliff + gelato evenings.",
      "prompt": "How August evenings USED TO feel here.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Ogni sera ad agosto ci tuffavamo e poi prendevamo un gelato",
        "Ogni sera ad agosto ci tuffiamo e poi prendiamo un gelato"
      ],
      "correct": 0,
      "why": [
        "",
        "The now one is tonight. Prompt wants how August used to feel — The past-scene one."
      ],
      "help": "Is this painting a past scene / habit — or happening now?",
      "explain": "This one paints a past scene or “used to” habit — not a live now.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to dive then get gelato",
          "We dive then get gelato tonight"
        ],
        "correct": 0,
        "miss": "Old August loop."
      },
      "hook": false
    },
    {
      "id": "c2-03",
      "level": 2,
      "region": "Tropea",
      "hook": true,
      "image": "images/hooks/ferrari-street.jpg",
      "culture": "Rosso on the lungomare.",
      "prompt": "A red Ferrari is parked there RIGHT NOW.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "C’è una Ferrari rossa davanti al bar a Tropea",
        "C’era sempre una Ferrari rossa davanti al bar a Tropea"
      ],
      "correct": 0,
      "why": [
        "",
        "Past scene. It’s there live now."
      ],
      "help": "Is the Ferrari there live now — or how it used to sit there?",
      "explain": "This matches what’s there right now.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "There’s a red Ferrari there now",
          "There used to be a red Ferrari there"
        ],
        "correct": 0,
        "miss": "Live park."
      }
    },
    {
      "id": "c2-04",
      "level": 2,
      "region": "Matera",
      "culture": "Sassi at dusk.",
      "prompt": "How evenings USED TO feel when you first visited.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "A Matera la sera camminiamo in silenzio tra i Sassi",
        "A Matera la sera camminavamo in silenzio tra i Sassi"
      ],
      "correct": 1,
      "why": [
        "The now one is a general now. Prompt wants how it used to feel — The past-scene one.",
        ""
      ],
      "help": "Is this painting a past scene / habit — or happening now?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We walk there now",
          "We used to walk there in the evenings"
        ],
        "correct": 1,
        "miss": "“Used to” = past-scene form."
      },
      "hook": false
    },
    {
      "id": "c2-05",
      "level": 2,
      "region": "Alberobello",
      "culture": "Trulli + gelato.",
      "prompt": "Wandering the trulli streets RIGHT NOW.",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Giri tra i trulli e mangi un gelato, classico",
        "Giravi tra i trulli e mangiavi un gelato"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one is a past wander. You’re there now — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "You’re wandering + gelato now",
          "You used to wander + gelato"
        ],
        "correct": 0,
        "miss": "Right now = present."
      },
      "hook": false
    },
    {
      "id": "c2-06",
      "level": 2,
      "region": "Polignano",
      "hook": true,
      "image": "images/hooks/teen-girl-4.jpg",
      "culture": "Cliff-light smile.",
      "prompt": "How she USED TO laugh on the cliffs.",
      "gloss": "used to",
      "person": "lei",
      "captions": [
        "Sulla scogliera lei rideva sempre con gli amici",
        "Sulla scogliera lei ride sempre con gli amici"
      ],
      "correct": 0,
      "why": [
        "",
        "Today’s laugh habit. Prompt wants how she used to laugh."
      ],
      "help": "Old cliff laughs — or how she laughs today?",
      "explain": "This paints a past habit — how she used to laugh here.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "She used to laugh on the cliffs",
          "She laughs on the cliffs today"
        ],
        "correct": 0,
        "miss": "Used-to laugh."
      }
    },
    {
      "id": "c2-07",
      "level": 2,
      "region": "Lecce",
      "culture": "Barocco stroll.",
      "prompt": "How evenings USED TO feel on the old streets.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "La sera vedevamo sempre le luci sui palazzi barocchi",
        "La sera vediamo sempre le luci sui palazzi barocchi"
      ],
      "correct": 0,
      "why": [
        "",
        "The now one is tonight. Prompt wants old evenings — The past-scene one."
      ],
      "help": "Is this painting a past scene / habit — or happening now?",
      "explain": "This one paints a past scene or “used to” habit — not a live now.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to see the lights every evening",
          "We see the lights every evening now"
        ],
        "correct": 0,
        "miss": "Used-to evenings."
      },
      "hook": false
    },
    {
      "id": "c2-08",
      "level": 2,
      "region": "Palermo",
      "culture": "Street food now.",
      "prompt": "Eating panelle RIGHT NOW.",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Mangio panelle a Ballarò, aspetta",
        "Mangiavo panelle a Ballarò, aspetta"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one = you used to eat. You’re mid-bite — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "I’m eating panelle now",
          "I used to eat panelle"
        ],
        "correct": 0,
        "miss": "Mid-bite = present."
      },
      "hook": false
    },
    {
      "id": "c2-09",
      "level": 2,
      "region": "Ortigia",
      "culture": "Gelato after cena.",
      "prompt": "Sofia asks you LIVE for gelato (lei).",
      "gloss": "right now",
      "person": "lei",
      "captions": [
        "Sofia chiede: “Ti va di prendere un gelato?”",
        "Sofia chiedeva: “Ti andava di prendere un gelato?”"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one = she used to ask. She’s asking now — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "She’s inviting you to gelato now",
          "She used to invite you to gelato"
        ],
        "correct": 0,
        "miss": "Live invite."
      },
      "hook": false
    },
    {
      "id": "c2-10",
      "level": 2,
      "region": "Palermo",
      "culture": "Ballarò noise.",
      "prompt": "Walking the market RIGHT NOW.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Giriamo a Ballarò e mangiamo panelle al volo",
        "Giravamo a Ballarò e mangiavamo panelle al volo"
      ],
      "correct": 0,
      "why": [
        "",
        "Past market loop. You’re mid-market now."
      ],
      "help": "Live market walk — or how markets used to feel?",
      "explain": "This matches walking the market in the moment.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We’re walking Ballarò now",
          "We used to walk Ballarò"
        ],
        "correct": 0,
        "miss": "Live market."
      }
    },
    {
      "id": "c2-11",
      "level": 2,
      "region": "Sperlonga",
      "culture": "Beach gelato habit.",
      "prompt": "How beach days USED TO end.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Dopo il mare prendevamo sempre un gelato sulla spiaggia",
        "Dopo il mare prendiamo sempre un gelato sulla spiaggia"
      ],
      "correct": 0,
      "why": [
        "",
        "The now one is today’s habit. Old beach ending = The past-scene one."
      ],
      "help": "Is this painting a past scene / habit — or happening now?",
      "explain": "This one paints a past scene or “used to” habit — not a live now.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to get gelato after the sea",
          "We get gelato after the sea today"
        ],
        "correct": 0,
        "miss": "Old beach ending."
      },
      "hook": false
    },
    {
      "id": "c2-12",
      "level": 2,
      "region": "Matera",
      "hook": true,
      "image": "images/hooks/teen-boy-3.jpg",
      "culture": "Sassi evening look.",
      "prompt": "He is looking at the Sassi RIGHT NOW.",
      "gloss": "right now",
      "person": "lui",
      "captions": [
        "Lui guarda i Sassi e resta in silenzio",
        "Lui guardava i Sassi e restava in silenzio"
      ],
      "correct": 0,
      "why": [
        "",
        "Past quiet look. He’s looking live now."
      ],
      "help": "Live look now — or how he used to look at the Sassi?",
      "explain": "This matches a look happening now.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "He’s looking at the Sassi now",
          "He used to look at the Sassi"
        ],
        "correct": 0,
        "miss": "Live look."
      }
    },
    {
      "id": "c2-13",
      "level": 2,
      "region": "Alberobello",
      "culture": "Trulli evening habit.",
      "prompt": "How evenings USED TO feel among the trulli.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "La sera tra i trulli camminavamo piano con un gelato",
        "La sera tra i trulli camminiamo piano con un gelato"
      ],
      "correct": 0,
      "why": [
        "",
        "Tonight’s stroll. Prompt wants old evenings."
      ],
      "help": "Old trulli evenings — or tonight’s stroll?",
      "explain": "This paints how evenings used to feel among the trulli.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to walk among the trulli",
          "We walk among the trulli tonight"
        ],
        "correct": 0,
        "miss": "Old evenings."
      }
    },
    {
      "id": "c2-14",
      "level": 2,
      "region": "Ortigia",
      "culture": "Gelato after cena — again.",
      "prompt": "You’re answering Sofia LIVE (tu).",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Rispondi: “Sì, mi va di prendere un gelato”",
        "Rispondevi: “Sì, mi andava di prendere un gelato”"
      ],
      "correct": 0,
      "why": [
        "",
        "Past reply habit. You’re answering live."
      ],
      "help": "Live reply now — or how you used to answer?",
      "explain": "This matches answering in the moment.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "You’re saying yes to gelato now",
          "You used to say yes to gelato"
        ],
        "correct": 0,
        "miss": "Live reply."
      }
    },
    {
      "id": "c2-15",
      "level": 2,
      "region": "Lecce",
      "hook": true,
      "image": "images/hooks/ferrari-3.jpg",
      "culture": "Barocco + rosso.",
      "prompt": "How spotting sports cars USED TO feel downtown.",
      "gloss": "used to",
      "person": "io",
      "captions": [
        "In centro vedevo sempre macchine rosse pazzesche",
        "In centro vedo sempre macchine rosse pazzesche"
      ],
      "correct": 0,
      "why": [
        "",
        "Today’s spotting. Prompt wants the old “used to see” flex."
      ],
      "help": "Old downtown spotting habit — or what you see today?",
      "explain": "This paints a past habit of spotting wild red cars.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "I used to see wild red cars downtown",
          "I see wild red cars downtown today"
        ],
        "correct": 0,
        "miss": "Used-to flex."
      }
    },
    {
      "id": "c3-01",
      "level": 3,
      "region": "Bologna",
      "culture": "Portici after school.",
      "prompt": "How afternoons USED TO go near Via Zamboni.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Dopo scuola andavamo sempre sotto i portici a mangiare qualcosa",
        "Dopo scuola andiamo sotto i portici a mangiare qualcosa"
      ],
      "correct": 0,
      "why": [
        "",
        "The now one is today. Old after-school loop = The past-scene one."
      ],
      "help": "Is this painting a past scene / habit — or happening now?",
      "explain": "This one paints a past scene or “used to” habit — not a live now.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to go under the arches",
          "We go under the arches today"
        ],
        "correct": 0,
        "miss": "Old loop = past-scene form."
      },
      "hook": false
    },
    {
      "id": "c3-02",
      "level": 3,
      "region": "Genova",
      "culture": "Focaccia counter.",
      "prompt": "Ordering focaccia RIGHT NOW (tu).",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Prendi una focaccia e corri al porto",
        "Prendevi una focaccia e correvi al porto"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one = old habit. You’re ordering now — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "You’re grabbing focaccia now",
          "You used to grab focaccia"
        ],
        "correct": 0,
        "miss": "Live order."
      },
      "hook": false
    },
    {
      "id": "c3-03",
      "level": 3,
      "region": "Braies",
      "culture": "Mountain lake mornings.",
      "prompt": "How mornings USED TO go at the lake.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Al lago andavamo presto e restavamo in silenzio",
        "Al lago andiamo presto e restiamo in silenzio"
      ],
      "correct": 0,
      "why": [
        "",
        "The now one is today. Old quiet mornings = The past-scene one."
      ],
      "help": "Is this painting a past scene / habit — or happening now?",
      "explain": "This one paints a past scene or “used to” habit — not a live now.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to go early and stay quiet",
          "We go early and stay quiet today"
        ],
        "correct": 0,
        "miss": "Old mornings."
      },
      "hook": false
    },
    {
      "id": "c3-04",
      "level": 3,
      "region": "Torino",
      "culture": "Gianduiotto walk.",
      "prompt": "How evenings USED TO feel downtown.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "La sera eravamo sempre in centro con un gianduiotto",
        "La sera siamo sempre in centro con un gianduiotto"
      ],
      "correct": 0,
      "why": [
        "",
        "The now one is tonight. Old downtown loop = The past-scene one."
      ],
      "help": "Is this painting a past scene / habit — or happening now?",
      "explain": "This one paints a past scene or “used to” habit — not a live now.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to hang downtown with chocolate",
          "We hang downtown with chocolate now"
        ],
        "correct": 0,
        "miss": "Used-to evenings."
      },
      "hook": false
    },
    {
      "id": "c3-05",
      "level": 3,
      "region": "Bologna",
      "hook": true,
      "image": "images/hooks/teen-girl-2.jpg",
      "culture": "Portici laugh.",
      "prompt": "She is laughing under the portici RIGHT NOW.",
      "gloss": "right now",
      "person": "lei",
      "captions": [
        "Lei ride sotto i portici dopo scuola",
        "Lei rideva sempre sotto i portici dopo scuola"
      ],
      "correct": 0,
      "why": [
        "",
        "Past after-school loop. She’s laughing live."
      ],
      "help": "Live laugh now — or how she used to laugh after school?",
      "explain": "This matches a laugh happening now.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "She’s laughing under the arches now",
          "She used to laugh under the arches"
        ],
        "correct": 0,
        "miss": "Live laugh."
      }
    },
    {
      "id": "c3-06",
      "level": 3,
      "region": "Chioggia",
      "culture": "Little Venice canals.",
      "prompt": "Luca is heading to the market NOW (lui).",
      "gloss": "right now",
      "person": "lui",
      "captions": [
        "Luca va al mercato e compra il pesce fresco",
        "Luca andava al mercato e comprava il pesce fresco"
      ],
      "correct": 0,
      "why": [
        "",
        "The past-scene one = old habit. He’s going now — The now one."
      ],
      "help": "Is this happening now (or today’s habit) — or a past scene?",
      "explain": "This one matches something happening now (or a habit that still holds).",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "Luca is going to the market now",
          "Luca used to go to the market"
        ],
        "correct": 0,
        "miss": "He’s going live."
      },
      "hook": false
    },
    {
      "id": "c3-07",
      "level": 3,
      "region": "Ravenna",
      "culture": "Mosaic + snack.",
      "prompt": "How afternoons USED TO go after the mosaics.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Dopo i mosaici mangiavamo sempre qualcosa in piazza",
        "Dopo i mosaici mangiamo sempre qualcosa in piazza"
      ],
      "correct": 0,
      "why": [
        "",
        "The now one is today. Old post-mosaic snack = The past-scene one."
      ],
      "help": "Is this painting a past scene / habit — or happening now?",
      "explain": "This one paints a past scene or “used to” habit — not a live now.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to eat in the piazza after",
          "We eat in the piazza after today"
        ],
        "correct": 0,
        "miss": "Old snack loop."
      },
      "hook": false
    },
    {
      "id": "c3-08",
      "level": 3,
      "region": "Genova",
      "culture": "Focaccia habit.",
      "prompt": "How port mornings USED TO start.",
      "gloss": "used to",
      "person": "io",
      "captions": [
        "Al porto prendevo sempre una focaccia calda",
        "Al porto prendo sempre una focaccia calda"
      ],
      "correct": 0,
      "why": [
        "",
        "Today’s order. Prompt wants old mornings."
      ],
      "help": "Old focaccia mornings — or today’s order?",
      "explain": "This paints how mornings used to start at the port.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "I used to grab warm focaccia",
          "I grab warm focaccia today"
        ],
        "correct": 0,
        "miss": "Old mornings."
      }
    },
    {
      "id": "c3-09",
      "level": 3,
      "region": "Torino",
      "hook": true,
      "image": "images/hooks/teen-boy-1.jpg",
      "culture": "Gianduiotto stare.",
      "prompt": "How he USED TO look on evening walks.",
      "gloss": "used to",
      "person": "lui",
      "captions": [
        "La sera lui era sempre serio con un gianduiotto",
        "La sera lui è sempre serio con un gianduiotto"
      ],
      "correct": 0,
      "why": [
        "",
        "Tonight’s look. Prompt wants how he used to seem."
      ],
      "help": "Old evening vibe — or how he seems tonight?",
      "explain": "This paints how he used to seem on those walks.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "He used to look serious with chocolate",
          "He looks serious with chocolate tonight"
        ],
        "correct": 0,
        "miss": "Used-to vibe."
      }
    },
    {
      "id": "c3-10",
      "level": 3,
      "region": "Braies",
      "culture": "Lake quiet now.",
      "prompt": "You’re at the lake RIGHT NOW (noi).",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Siamo al lago e restiamo in silenzio",
        "Eravamo al lago e restavamo in silenzio"
      ],
      "correct": 0,
      "why": [
        "",
        "Past quiet scene. You’re there live."
      ],
      "help": "Live at the lake now — or a past quiet scene?",
      "explain": "This matches being at the lake in the moment.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We’re at the lake staying quiet now",
          "We used to stay quiet at the lake"
        ],
        "correct": 0,
        "miss": "Live lake."
      }
    },
    {
      "id": "c3-11",
      "level": 3,
      "region": "Chioggia",
      "culture": "Canal evenings.",
      "prompt": "How canal evenings USED TO feel.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "La sera sui canali camminavamo senza fretta",
        "La sera sui canali camminiamo senza fretta"
      ],
      "correct": 0,
      "why": [
        "",
        "Tonight’s walk. Prompt wants old evenings."
      ],
      "help": "Old canal evenings — or tonight’s walk?",
      "explain": "This paints how canal evenings used to feel.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to walk the canals slowly",
          "We walk the canals slowly tonight"
        ],
        "correct": 0,
        "miss": "Old evenings."
      }
    },
    {
      "id": "c3-12",
      "level": 3,
      "region": "Ravenna",
      "hook": true,
      "image": "images/hooks/ferrari-1.jpg",
      "culture": "Mosaic town + rosso.",
      "prompt": "You see a red Ferrari RIGHT NOW (tu).",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Vedi quella Ferrari rossa? È incredibile",
        "Vedevi sempre quella Ferrari rossa"
      ],
      "correct": 0,
      "why": [
        "",
        "Past spotting. You’re pointing live."
      ],
      "help": "Live point now — or how you used to spot it?",
      "explain": "This matches spotting it in the moment.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "You see the red Ferrari now",
          "You used to see that Ferrari"
        ],
        "correct": 0,
        "miss": "Live spot."
      }
    },
    {
      "id": "c3-13",
      "level": 3,
      "region": "Bologna",
      "culture": "Tortellini to-go live.",
      "prompt": "Ordering lunch RIGHT NOW (io).",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Prendo i tortellini da asporto, vengo",
        "Prendevo sempre i tortellini da asporto"
      ],
      "correct": 0,
      "why": [
        "",
        "Past lunch habit. You’re ordering live."
      ],
      "help": "Live order now — or old lunch habit?",
      "explain": "This matches ordering in the moment.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "I’m grabbing tortellini now",
          "I used to grab tortellini"
        ],
        "correct": 0,
        "miss": "Live order."
      }
    },
    {
      "id": "c3-14",
      "level": 3,
      "region": "Torino",
      "culture": "Portici stroll now.",
      "prompt": "Wandering the portici RIGHT NOW (tu).",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Giri sotto i portici e mangi un gianduiotto",
        "Giravi sotto i portici e mangiavi un gianduiotto"
      ],
      "correct": 0,
      "why": [
        "",
        "Past stroll. You’re wandering live."
      ],
      "help": "Live stroll now — or how walks used to go?",
      "explain": "This matches wandering in the moment.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "You’re walking the arches now",
          "You used to walk the arches"
        ],
        "correct": 0,
        "miss": "Live stroll."
      }
    },
    {
      "id": "c3-15",
      "level": 3,
      "region": "Ravenna",
      "culture": "Mosaic quiet habit.",
      "prompt": "How museum mornings USED TO feel.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Al mattino guardavamo i mosaici in silenzio",
        "Al mattino guardiamo i mosaici in silenzio"
      ],
      "correct": 0,
      "why": [
        "",
        "Today’s visit. Prompt wants old quiet mornings."
      ],
      "help": "Old quiet mornings — or today’s visit?",
      "explain": "This paints how museum mornings used to feel.",
      "softExplain": "One caption is live now / today’s habit. The other paints a past scene or “used to.” Match the moment — no spoilers.",
      "prove": {
        "choices": [
          "We used to look at mosaics quietly",
          "We look at mosaics quietly today"
        ],
        "correct": 0,
        "miss": "Old mornings."
      }
    }
  ]
};
