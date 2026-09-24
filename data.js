/* Italia Scroll — content pack
   Phase 1: English statement → pick matching Italian caption.
   Sneak: now vs past-scene feel + high-frequency chunks. No tense labels.
   Person scope: io, tu, lui/lei, noi. Silent unlock every 15 clears.
   Mix stills + short muted video loops. Action teen hooks.
*/
window.ITALIA_SCROLL = {
  "version": 12,
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
      "culture": "Bacoli waterfront · tonight",
      "prompt": "We’re in Bacoli right now and the gulf looks incredible tonight.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Siamo a Bacoli e il golfo è incredibile stasera",
        "Eravamo a Bacoli e il golfo era sempre incredibile"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how it used to feel. Your English says tonight."
      ],
      "help": "Match the English: you’re there tonight. New chunk: il golfo = the gulf.",
      "explain": "Siamo… è… matches “we’re there / it is” tonight — live, not a memory.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We’re there tonight",
          "We used to be there"
        ],
        "correct": 0,
        "miss": "Live now — not a memory."
      },
      "hook": false,
      "lockIn": {
        "it": "il golfo",
        "en": "the gulf"
      }
    },
    {
      "id": "c1-02",
      "level": 1,
      "region": "Monte di Procida",
      "image": "images/hometown/capo-miseno.jpg",
      "culture": "Monte · her hometown overlook",
      "prompt": "We’re at the belvedere in Monte di Procida right now — our teacher is from here!",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Siamo al belvedere di Monte di Procida — la professoressa è di qui!",
        "Eravamo al belvedere di Monte di Procida — la professoressa era di qui!"
      ],
      "correct": 0,
      "why": [
        "",
        "That one paints a past visit. English is right now."
      ],
      "help": "Match “we’re at the belvedere now.” belvedere = scenic overlook.",
      "explain": "Siamo al belvedere… è di qui matches standing there now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We’re at her town overlook now",
          "We used to visit her town"
        ],
        "correct": 0,
        "miss": "You’re there live."
      },
      "hook": false,
      "lockIn": {
        "it": "il belvedere",
        "en": "scenic overlook / viewpoint"
      }
    },
    {
      "id": "c1-03",
      "level": 1,
      "region": "Ischia",
      "culture": "Ischia summers · looking back",
      "prompt": "Every summer we used to go to Ischia and stay on the beach for hours.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Ogni estate andavamo a Ischia e restavamo ore in spiaggia",
        "Ogni estate andiamo a Ischia e restiamo ore in spiaggia"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is today’s habit. English looks back."
      ],
      "help": "Match the old summer habit. spiaggia = beach.",
      "explain": "andavamo / restavamo = how summers used to go — not today’s plan.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to go every summer",
          "We go every summer now"
        ],
        "correct": 0,
        "miss": "“Used to” = past habit."
      },
      "hook": false,
      "lockIn": {
        "it": "la spiaggia",
        "en": "the beach"
      },
      "image": "images/places/ischia-1.jpg",
      "video": "videos/beach-run.mp4"
    },
    {
      "id": "c1-04",
      "level": 1,
      "region": "Capri",
      "culture": "Capri · boat view",
      "prompt": "We’re seeing the Faraglioni from the boat right now, guys 🔥",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Vediamo i Faraglioni dalla barca, raga 🔥",
        "Vedevamo i Faraglioni dalla barca, raga"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is a memory. English is live on the boat."
      ],
      "help": "Match live from the boat. i Faraglioni = Capri’s famous rocks.",
      "explain": "Vediamo… dalla barca = seeing them now from the boat.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We see them live from the boat",
          "We used to see them from the boat"
        ],
        "correct": 0,
        "miss": "Live view = present."
      },
      "hook": false,
      "lockIn": {
        "it": "i Faraglioni",
        "en": "Capri’s famous sea rocks"
      },
      "image": "images/places/capri-fara-alt.jpg",
      "video": "videos/venice-boats.mp4"
    },
    {
      "id": "c1-05",
      "level": 1,
      "region": "Capri",
      "hook": true,
      "image": "images/hooks/ferrari-1.jpg",
      "culture": "Capri coast · rosso corsa",
      "prompt": "I’m looking at that red Ferrari right now — wild!",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Guardo quella Ferrari rossa — pazzesca!",
        "Guardavo sempre quella Ferrari rossa"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how you used to watch it. English is this second."
      ],
      "help": "Match “I’m looking at it now.” Guardo = I’m looking at.",
      "explain": "Guardo… matches spotting it live this second.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "I’m looking at the red Ferrari now",
          "I used to look at that Ferrari"
        ],
        "correct": 0,
        "miss": "Live look = now."
      },
      "lockIn": {
        "it": "Guardo…",
        "en": "I’m looking at…"
      }
    },
    {
      "id": "c1-06",
      "level": 1,
      "region": "Procida",
      "culture": "Procida · colorful harbor",
      "prompt": "Marco is in Procida right now looking at the harbor colors.",
      "gloss": "right now",
      "person": "lui",
      "captions": [
        "Marco è a Procida e guarda i colori del porto",
        "Marco era a Procida e guardava i colori del porto"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is a past scene. English is live."
      ],
      "help": "Match Marco live there. il porto = the harbor.",
      "explain": "Marco è… guarda… = he is there looking now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "Marco is there looking at the harbor",
          "Marco used to look at the harbor"
        ],
        "correct": 0,
        "miss": "He’s there now."
      },
      "hook": false,
      "lockIn": {
        "it": "il porto",
        "en": "the harbor"
      },
      "image": "images/places/procida-1.jpg"
    },
    {
      "id": "c1-07",
      "level": 1,
      "region": "Amalfi",
      "culture": "Amalfi · lemon gelato",
      "prompt": "I’m in Amalfi right now eating a lemon gelato.",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Sono ad Amalfi e mangio un gelato al limone",
        "Ero ad Amalfi e mangiavo un gelato al limone"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is a past gelato stop. English is now."
      ],
      "help": "Match “I’m eating gelato now.” gelato al limone = lemon gelato.",
      "explain": "Sono… mangio… = there now, eating now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "I am in Amalfi eating gelato",
          "I used to be in Amalfi eating gelato"
        ],
        "correct": 0,
        "miss": "Live selfie = present."
      },
      "hook": true,
      "lockIn": {
        "it": "gelato al limone",
        "en": "lemon gelato"
      },
      "image": "images/hooks/teen-gelato.jpg",
      "video": "videos/gelato-girl.mp4"
    },
    {
      "id": "c1-08",
      "level": 1,
      "region": "Capri",
      "culture": "Capri · pointing them out",
      "prompt": "Do you see the Faraglioni? Look over there!",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Vedi i Faraglioni? Guarda lì!",
        "Vedevi i Faraglioni? Guardavi lì!"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how you used to point. English is live."
      ],
      "help": "Match you talking to a friend live. Guarda lì! = Look there!",
      "explain": "Vedi…? Guarda lì! = you’re pointing it out right now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "You see them right now",
          "You used to see them"
        ],
        "correct": 0,
        "miss": "Live point."
      },
      "hook": false,
      "lockIn": {
        "it": "Guarda lì!",
        "en": "Look over there!"
      },
      "image": "images/places/capri-1.jpg"
    },
    {
      "id": "c1-09",
      "level": 1,
      "region": "Capri",
      "hook": true,
      "image": "images/hooks/teen-photo.jpg",
      "culture": "Belvedere · story time",
      "prompt": "She’s filming a story at the belvedere right now — wait.",
      "gloss": "right now",
      "person": "lei",
      "captions": [
        "Lei fa una storia al belvedere, aspetta",
        "Lei faceva sempre una storia al belvedere"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how she used to post. English is live."
      ],
      "help": "Match her live story. fa una storia = she’s posting/filming a story.",
      "explain": "Lei fa una storia… aspetta = happening this second.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "She’s posting a story now",
          "She used to post stories here"
        ],
        "correct": 0,
        "miss": "Live story."
      },
      "lockIn": {
        "it": "fa una storia",
        "en": "is filming / posting a story"
      },
      "video": "videos/rome-photos.mp4"
    },
    {
      "id": "c1-10",
      "level": 1,
      "region": "Bacoli",
      "image": "images/hometown/molo-tramonto.jpg",
      "culture": "Bacoli · waiting on sunset",
      "prompt": "I’m staying in Bacoli until sunset — I’m not leaving.",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Resto a Bacoli fino al tramonto, non parto",
        "Restavo a Bacoli fino al tramonto, non partivo"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is an old habit. English is tonight."
      ],
      "help": "Match staying for sunset now. il tramonto = sunset.",
      "explain": "Resto… non parto = staying now, not leaving.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "I’m staying for sunset",
          "I used to stay for sunset"
        ],
        "correct": 0,
        "miss": "Tonight = present."
      },
      "hook": false,
      "lockIn": {
        "it": "il tramonto",
        "en": "sunset"
      }
    },
    {
      "id": "c1-11",
      "level": 1,
      "region": "Monte di Procida",
      "image": "images/hometown/lago-collina.jpg",
      "culture": "Monte · gelato memory",
      "prompt": "At the belvedere we always used to get a gelato while watching the gulf.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Al belvedere prendevamo sempre un gelato guardando il golfo",
        "Al belvedere prendiamo sempre un gelato guardando il golfo"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is today’s habit. English looks back."
      ],
      "help": "Match the old gelato habit. prendevamo = we used to get.",
      "explain": "prendevamo sempre… = how gelato stops used to go.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to get gelato at the overlook",
          "We get gelato at the overlook today"
        ],
        "correct": 0,
        "miss": "Old gelato loop."
      },
      "lockIn": {
        "it": "prendevamo un gelato",
        "en": "we used to get a gelato"
      }
    },
    {
      "id": "c1-12",
      "level": 1,
      "region": "Ischia",
      "image": "images/places/ischia-2.jpg",
      "culture": "Ischia · ferry wait",
      "prompt": "We’re waiting for the ferry in Ischia — see you at the harbor!",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Aspettiamo il traghetto a Ischia — ci vediamo al porto!",
        "Aspettavamo sempre il traghetto a Ischia"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how waiting used to feel. English is live."
      ],
      "help": "Match waiting live. il traghetto = the ferry.",
      "explain": "Aspettiamo il traghetto… = waiting now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We’re waiting for the ferry now",
          "We used to wait for the ferry"
        ],
        "correct": 0,
        "miss": "Live wait."
      },
      "lockIn": {
        "it": "il traghetto",
        "en": "the ferry"
      }
    },
    {
      "id": "c1-13",
      "level": 1,
      "region": "Amalfi",
      "hook": true,
      "image": "images/hooks/teen-streets.jpg",
      "culture": "Amalfi · group pic",
      "prompt": "He’s smiling for the photo in Amalfi right now.",
      "gloss": "right now",
      "person": "lui",
      "captions": [
        "Lui sorride per la foto ad Amalfi",
        "Lui sorrideva sempre per le foto ad Amalfi"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how he used to smile for pics. English is now."
      ],
      "help": "Match his live smile. sorride = he’s smiling.",
      "explain": "Lui sorride… = smile happening now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "He’s smiling for the photo now",
          "He used to smile for photos"
        ],
        "correct": 0,
        "miss": "Live smile."
      },
      "lockIn": {
        "it": "sorride",
        "en": "he/she is smiling"
      },
      "video": "videos/rome-streets.mp4"
    },
    {
      "id": "c1-14",
      "level": 1,
      "region": "Procida",
      "culture": "Procida · harbor evenings",
      "prompt": "In the evening at the harbor we used to watch the colors and talk quietly.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "La sera al porto guardavamo i colori e parlavamo piano",
        "La sera al porto guardiamo i colori e parliamo piano"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is tonight’s plan. English looks back."
      ],
      "help": "Match the old evening vibe. la sera = in the evening.",
      "explain": "guardavamo… parlavamo = how evenings used to feel.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to watch the harbor colors",
          "We watch the harbor colors tonight"
        ],
        "correct": 0,
        "miss": "Old evenings."
      },
      "lockIn": {
        "it": "la sera",
        "en": "in the evening"
      },
      "image": "images/places/procida-2.jpg"
    },
    {
      "id": "c1-15",
      "level": 1,
      "region": "Capri",
      "hook": true,
      "image": "images/hooks/ferrari-2.jpg",
      "culture": "Capri · rosso memory",
      "prompt": "On Capri we always used to see a red Ferrari in front of the bar.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "A Capri vedevamo sempre una Ferrari rossa davanti al bar",
        "A Capri vediamo sempre una Ferrari rossa davanti al bar"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is today’s habit. English looks back."
      ],
      "help": "Match the old Capri habit of spotting Ferraris.",
      "explain": "vedevamo sempre… = how spotting used to go.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to see a red Ferrari by the bar",
          "We see a red Ferrari by the bar today"
        ],
        "correct": 0,
        "miss": "Used-to Capri flex."
      },
      "lockIn": {
        "it": "davanti al bar",
        "en": "in front of the bar"
      }
    },
    {
      "id": "c2-01",
      "level": 2,
      "region": "Tropea",
      "culture": "Tropea · turquoise now",
      "prompt": "We’re in Tropea right now and the sea looks insane today 💙",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Siamo a Tropea e il mare è pazzesco oggi 💙",
        "Eravamo a Tropea e il mare era pazzesco"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is a past beach day. English is today."
      ],
      "help": "Match live from the sand. il mare = the sea.",
      "explain": "Siamo… il mare è… oggi = there now, sea today.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We’re on the sand today",
          "We used to be on the sand"
        ],
        "correct": 0,
        "miss": "Today = present."
      },
      "hook": false,
      "lockIn": {
        "it": "il mare",
        "en": "the sea"
      },
      "image": "images/places/tropea-1.jpg",
      "video": "videos/seaside-run.mp4"
    },
    {
      "id": "c2-02",
      "level": 2,
      "region": "Polignano",
      "culture": "Polignano · August memory",
      "prompt": "Every August evening we used to jump in and then get a gelato.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Ogni sera ad agosto ci tuffavamo e poi prendevamo un gelato",
        "Ogni sera ad agosto ci tuffiamo e poi prendiamo un gelato"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is this August. English looks back."
      ],
      "help": "Match the old August habit. ci tuffavamo = we used to dive/jump in.",
      "explain": "ci tuffavamo… prendevamo = how August nights used to go.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to dive then get gelato",
          "We dive then get gelato tonight"
        ],
        "correct": 0,
        "miss": "Old August loop."
      },
      "hook": false,
      "lockIn": {
        "it": "ci tuffavamo",
        "en": "we used to dive / jump in"
      },
      "image": "images/places/polignano-1.jpg",
      "video": "videos/beach-run.mp4"
    },
    {
      "id": "c2-03",
      "level": 2,
      "region": "Tropea",
      "hook": true,
      "image": "images/hooks/ferrari-street.jpg",
      "culture": "Tropea · lungomare rosso",
      "prompt": "There’s a red Ferrari in front of the bar in Tropea right now.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "C’è una Ferrari rossa davanti al bar a Tropea",
        "C’era sempre una Ferrari rossa davanti al bar a Tropea"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how it used to sit there. English is now."
      ],
      "help": "Match what’s parked there live. C’è = there is.",
      "explain": "C’è una Ferrari… = it’s there now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "There’s a red Ferrari there now",
          "There used to be a red Ferrari there"
        ],
        "correct": 0,
        "miss": "Live park."
      },
      "lockIn": {
        "it": "C’è…",
        "en": "There is…"
      }
    },
    {
      "id": "c2-04",
      "level": 2,
      "region": "Matera",
      "culture": "Matera · dusk memory",
      "prompt": "In Matera in the evening we used to walk quietly among the Sassi.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "A Matera la sera camminiamo in silenzio tra i Sassi",
        "A Matera la sera camminavamo in silenzio tra i Sassi"
      ],
      "correct": 1,
      "why": [
        "",
        "That one is tonight’s walk. English looks back."
      ],
      "help": "Match the old evening walks. i Sassi = Matera’s stone neighborhoods.",
      "explain": "camminavamo… = how evenings used to feel on first visits.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We walk there now",
          "We used to walk there in the evenings"
        ],
        "correct": 1,
        "miss": "“Used to” = past-scene form."
      },
      "hook": false,
      "lockIn": {
        "it": "i Sassi",
        "en": "Matera’s stone neighborhoods"
      },
      "image": "images/places/matera-1.jpg"
    },
    {
      "id": "c2-05",
      "level": 2,
      "region": "Alberobello",
      "culture": "Alberobello · trulli stroll",
      "prompt": "You’re walking among the trulli and eating a gelato — classic.",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Giri tra i trulli e mangi un gelato, classico",
        "Giravi tra i trulli e mangiavi un gelato"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is a past stroll. English is now."
      ],
      "help": "Match you doing it live. i trulli = cone-shaped houses.",
      "explain": "Giri… mangi… = you’re doing it now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "You’re wandering + gelato now",
          "You used to wander + gelato"
        ],
        "correct": 0,
        "miss": "Right now = present."
      },
      "hook": false,
      "lockIn": {
        "it": "i trulli",
        "en": "Alberobello’s cone houses"
      },
      "image": "images/places/alberobello-1.jpg"
    },
    {
      "id": "c2-06",
      "level": 2,
      "region": "Polignano",
      "hook": true,
      "image": "images/hooks/teen-beach.jpg",
      "culture": "Polignano · cliff laughs",
      "prompt": "On the cliffs she always used to laugh with her friends.",
      "gloss": "used to",
      "person": "lei",
      "captions": [
        "Sulla scogliera lei rideva sempre con gli amici",
        "Sulla scogliera lei ride sempre con gli amici"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how she laughs today. English looks back."
      ],
      "help": "Match how she used to laugh. la scogliera = the cliff.",
      "explain": "rideva sempre… = old cliff laughs.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "She used to laugh on the cliffs",
          "She laughs on the cliffs today"
        ],
        "correct": 0,
        "miss": "Used-to laugh."
      },
      "lockIn": {
        "it": "la scogliera",
        "en": "the cliff / rocky shore"
      },
      "video": "videos/beach-run.mp4"
    },
    {
      "id": "c2-07",
      "level": 2,
      "region": "Lecce",
      "culture": "Lecce · evening lights",
      "prompt": "In the evening we always used to see the lights on the baroque buildings.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "La sera vedevamo sempre le luci sui palazzi barocchi",
        "La sera vediamo sempre le luci sui palazzi barocchi"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is tonight. English looks back."
      ],
      "help": "Match the old evening lights. i palazzi barocchi = baroque buildings.",
      "explain": "vedevamo sempre… = how evenings used to look.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to see the lights every evening",
          "We see the lights every evening now"
        ],
        "correct": 0,
        "miss": "Used-to evenings."
      },
      "hook": false,
      "lockIn": {
        "it": "i palazzi barocchi",
        "en": "the baroque buildings"
      },
      "image": "images/places/lecce-1.jpg"
    },
    {
      "id": "c2-08",
      "level": 2,
      "region": "Palermo",
      "culture": "Palermo · Ballarò bite",
      "prompt": "I’m eating panelle in Ballarò right now — wait.",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Mangio panelle a Ballarò, aspetta",
        "Mangiavo panelle a Ballarò, aspetta"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is a past snack. English is now."
      ],
      "help": "Match eating now. panelle = chickpea fritters (Palermo street food).",
      "explain": "Mangio panelle… = eating them now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "I’m eating panelle now",
          "I used to eat panelle"
        ],
        "correct": 0,
        "miss": "Mid-bite = present."
      },
      "hook": false,
      "lockIn": {
        "it": "panelle",
        "en": "chickpea fritters (Palermo)"
      },
      "image": "images/places/palermo-1.jpg"
    },
    {
      "id": "c2-09",
      "level": 2,
      "region": "Ortigia",
      "culture": "Ortigia · gelato invite",
      "prompt": "Sofia asks: “Want to get a gelato?”",
      "gloss": "right now",
      "person": "lei",
      "captions": [
        "Sofia chiede: “Ti va di prendere un gelato?”",
        "Sofia chiedeva: “Ti andava di prendere un gelato?”"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how she used to ask. English is live."
      ],
      "help": "Match Sofia asking live. Ti va di…? = Do you feel like… / Want to…?",
      "explain": "Sofia chiede… Ti va di… = invitation happening now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "She’s inviting you to gelato now",
          "She used to invite you to gelato"
        ],
        "correct": 0,
        "miss": "Live invite."
      },
      "hook": false,
      "lockIn": {
        "it": "Ti va di…?",
        "en": "Want to…? / Feel like…?"
      },
      "image": "images/hooks/teen-gelato.jpg",
      "video": "videos/gelato-girl.mp4"
    },
    {
      "id": "c2-10",
      "level": 2,
      "region": "Palermo",
      "culture": "Palermo · market dash",
      "prompt": "We’re walking around Ballarò and grabbing panelle on the go.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Giriamo a Ballarò e mangiamo panelle al volo",
        "Giravamo a Ballarò e mangiavamo panelle al volo"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is a past market day. English is now."
      ],
      "help": "Match the live market walk. al volo = on the go / quickly.",
      "explain": "Giriamo… mangiamo… = doing it now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We’re walking Ballarò now",
          "We used to walk Ballarò"
        ],
        "correct": 0,
        "miss": "Live market."
      },
      "lockIn": {
        "it": "al volo",
        "en": "on the go / quickly"
      },
      "image": "images/places/palermo-2.jpg"
    },
    {
      "id": "c2-11",
      "level": 2,
      "region": "Sperlonga",
      "culture": "Sperlonga · beach habit",
      "prompt": "After the beach we always used to get a gelato on the sand.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Dopo il mare prendevamo sempre un gelato sulla spiaggia",
        "Dopo il mare prendiamo sempre un gelato sulla spiaggia"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is today’s ending. English looks back."
      ],
      "help": "Match the old beach-day ending. dopo il mare = after the sea/beach.",
      "explain": "prendevamo sempre… = how beach days used to end.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to get gelato after the sea",
          "We get gelato after the sea today"
        ],
        "correct": 0,
        "miss": "Old beach ending."
      },
      "hook": false,
      "lockIn": {
        "it": "dopo il mare",
        "en": "after the beach"
      },
      "image": "images/places/sperlonga-1.jpg"
    },
    {
      "id": "c2-12",
      "level": 2,
      "region": "Matera",
      "hook": true,
      "image": "images/hooks/teen-photo.jpg",
      "culture": "Matera · quiet look",
      "prompt": "He’s looking at the Sassi and staying quiet right now.",
      "gloss": "right now",
      "person": "lui",
      "captions": [
        "Lui guarda i Sassi e resta in silenzio",
        "Lui guardava i Sassi e restava in silenzio"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how he used to look. English is now."
      ],
      "help": "Match his live look. resta in silenzio = stays quiet.",
      "explain": "Lui guarda… resta… = happening now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "He’s looking at the Sassi now",
          "He used to look at the Sassi"
        ],
        "correct": 0,
        "miss": "Live look."
      },
      "lockIn": {
        "it": "resta in silenzio",
        "en": "stays quiet / silent"
      },
      "video": "videos/rome-view.mp4"
    },
    {
      "id": "c2-13",
      "level": 2,
      "region": "Alberobello",
      "culture": "Alberobello · evening memory",
      "prompt": "In the evening among the trulli we used to walk slowly with a gelato.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "La sera tra i trulli camminavamo piano con un gelato",
        "La sera tra i trulli camminiamo piano con un gelato"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is tonight. English looks back."
      ],
      "help": "Match the old trulli evenings. camminavamo piano = we used to walk slowly.",
      "explain": "camminavamo piano… = how evenings used to feel.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to walk among the trulli",
          "We walk among the trulli tonight"
        ],
        "correct": 0,
        "miss": "Old evenings."
      },
      "lockIn": {
        "it": "camminavamo piano",
        "en": "we used to walk slowly"
      },
      "image": "images/places/alberobello-2.jpg"
    },
    {
      "id": "c2-14",
      "level": 2,
      "region": "Ortigia",
      "culture": "Ortigia · yes to gelato",
      "prompt": "You answer: “Yes, I feel like getting a gelato.”",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Rispondi: “Sì, mi va di prendere un gelato”",
        "Rispondevi: “Sì, mi andava di prendere un gelato”"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how you used to answer. English is live."
      ],
      "help": "Match your live reply. mi va di… = I feel like…",
      "explain": "Rispondi… mi va di… = answering now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "You’re saying yes to gelato now",
          "You used to say yes to gelato"
        ],
        "correct": 0,
        "miss": "Live reply."
      },
      "lockIn": {
        "it": "mi va di…",
        "en": "I feel like… / I want to…"
      },
      "image": "images/places/ortigia-1.jpg"
    },
    {
      "id": "c2-15",
      "level": 2,
      "region": "Lecce",
      "hook": true,
      "image": "images/hooks/ferrari-3.jpg",
      "culture": "Lecce · rosso memory",
      "prompt": "Downtown I always used to see wild red cars.",
      "gloss": "used to",
      "person": "io",
      "captions": [
        "In centro vedevo sempre macchine rosse pazzesche",
        "In centro vedo sempre macchine rosse pazzesche"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is what you see today. English looks back."
      ],
      "help": "Match the old spotting habit. in centro = downtown.",
      "explain": "vedevo sempre… = how spotting used to go.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "I used to see wild red cars downtown",
          "I see wild red cars downtown today"
        ],
        "correct": 0,
        "miss": "Used-to flex."
      },
      "lockIn": {
        "it": "in centro",
        "en": "downtown"
      }
    },
    {
      "id": "c3-01",
      "level": 3,
      "region": "Bologna",
      "culture": "Bologna · after school",
      "prompt": "After school we always used to go under the portici to grab something to eat.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Dopo scuola andavamo sempre sotto i portici a mangiare qualcosa",
        "Dopo scuola andiamo sotto i portici a mangiare qualcosa"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is today’s plan. English looks back."
      ],
      "help": "Match the old after-school habit. i portici = covered walkways/arcades.",
      "explain": "andavamo sempre… = how afternoons used to go.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to go under the arches",
          "We go under the arches today"
        ],
        "correct": 0,
        "miss": "Old loop = past-scene form."
      },
      "hook": false,
      "lockIn": {
        "it": "i portici",
        "en": "covered walkways / arcades"
      },
      "image": "images/places/bologna-1.jpg"
    },
    {
      "id": "c3-02",
      "level": 3,
      "region": "Genova",
      "culture": "Genova · focaccia dash",
      "prompt": "Grab a focaccia and run to the harbor.",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Prendi una focaccia e corri al porto",
        "Prendevi una focaccia e correvi al porto"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how you used to. English is now."
      ],
      "help": "Match telling a friend live. la focaccia = focaccia bread.",
      "explain": "Prendi… corri… = you’re doing it now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "You’re grabbing focaccia now",
          "You used to grab focaccia"
        ],
        "correct": 0,
        "miss": "Live order."
      },
      "hook": false,
      "lockIn": {
        "it": "la focaccia",
        "en": "focaccia (Liguria flatbread)"
      },
      "image": "images/places/genova-1.jpg"
    },
    {
      "id": "c3-03",
      "level": 3,
      "region": "Braies",
      "culture": "Braies · quiet mornings",
      "prompt": "We used to go to the lake early and stay quiet.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Al lago andavamo presto e restavamo in silenzio",
        "Al lago andiamo presto e restiamo in silenzio"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is today’s plan. English looks back."
      ],
      "help": "Match the old lake mornings. il lago = the lake.",
      "explain": "andavamo… restavamo… = how mornings used to go.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to go early and stay quiet",
          "We go early and stay quiet today"
        ],
        "correct": 0,
        "miss": "Old mornings."
      },
      "hook": false,
      "lockIn": {
        "it": "il lago",
        "en": "the lake"
      },
      "image": "images/places/braies-1.jpg"
    },
    {
      "id": "c3-04",
      "level": 3,
      "region": "Torino",
      "culture": "Torino · evening sweet",
      "prompt": "In the evening we were always downtown with a gianduiotto.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "La sera eravamo sempre in centro con un gianduiotto",
        "La sera siamo sempre in centro con un gianduiotto"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is tonight’s habit. English looks back."
      ],
      "help": "Match the old evening vibe. un gianduiotto = a gianduja chocolate.",
      "explain": "eravamo sempre… = how evenings used to feel.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to hang downtown with chocolate",
          "We hang downtown with chocolate now"
        ],
        "correct": 0,
        "miss": "Used-to evenings."
      },
      "hook": false,
      "lockIn": {
        "it": "un gianduiotto",
        "en": "a gianduja chocolate (Torino)"
      },
      "image": "images/places/torino-1.jpg"
    },
    {
      "id": "c3-05",
      "level": 3,
      "region": "Bologna",
      "hook": true,
      "image": "images/hooks/teen-dance.jpg",
      "culture": "Bologna · portici laugh",
      "prompt": "She’s laughing under the portici after school right now.",
      "gloss": "right now",
      "person": "lei",
      "captions": [
        "Lei ride sotto i portici dopo scuola",
        "Lei rideva sempre sotto i portici dopo scuola"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how she used to laugh. English is now."
      ],
      "help": "Match her live laugh. ride = she’s laughing.",
      "explain": "Lei ride… = laugh happening now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "She’s laughing under the arches now",
          "She used to laugh under the arches"
        ],
        "correct": 0,
        "miss": "Live laugh."
      },
      "lockIn": {
        "it": "ride",
        "en": "he/she laughs / is laughing"
      },
      "video": "videos/street-dance.mp4"
    },
    {
      "id": "c3-06",
      "level": 3,
      "region": "Chioggia",
      "culture": "Chioggia · market run",
      "prompt": "Luca is going to the market and buying fresh fish right now.",
      "gloss": "right now",
      "person": "lui",
      "captions": [
        "Luca va al mercato e compra il pesce fresco",
        "Luca andava al mercato e comprava il pesce fresco"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how Luca used to. English is now."
      ],
      "help": "Match Luca live. il mercato = the market; il pesce fresco = fresh fish.",
      "explain": "Luca va… compra… = happening now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "Luca is going to the market now",
          "Luca used to go to the market"
        ],
        "correct": 0,
        "miss": "He’s going live."
      },
      "hook": false,
      "lockIn": {
        "it": "il pesce fresco",
        "en": "fresh fish"
      },
      "image": "images/places/chioggia-1.jpg"
    },
    {
      "id": "c3-07",
      "level": 3,
      "region": "Ravenna",
      "culture": "Ravenna · after mosaics",
      "prompt": "After the mosaics we always used to eat something in the piazza.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Dopo i mosaici mangiavamo sempre qualcosa in piazza",
        "Dopo i mosaici mangiamo sempre qualcosa in piazza"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is today’s snack. English looks back."
      ],
      "help": "Match the old afternoon habit. in piazza = in the square.",
      "explain": "mangiavamo sempre… = how afternoons used to go.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to eat in the piazza after",
          "We eat in the piazza after today"
        ],
        "correct": 0,
        "miss": "Old snack loop."
      },
      "hook": false,
      "lockIn": {
        "it": "in piazza",
        "en": "in the square"
      },
      "image": "images/places/ravenna-1.jpg"
    },
    {
      "id": "c3-08",
      "level": 3,
      "region": "Genova",
      "culture": "Genova · port mornings",
      "prompt": "At the harbor I always used to get a warm focaccia.",
      "gloss": "used to",
      "person": "io",
      "captions": [
        "Al porto prendevo sempre una focaccia calda",
        "Al porto prendo sempre una focaccia calda"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is today’s order. English looks back."
      ],
      "help": "Match the old morning habit. focaccia calda = warm focaccia.",
      "explain": "prendevo sempre… = how mornings used to start.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "I used to grab warm focaccia",
          "I grab warm focaccia today"
        ],
        "correct": 0,
        "miss": "Old mornings."
      },
      "lockIn": {
        "it": "focaccia calda",
        "en": "warm focaccia"
      },
      "image": "images/places/genova-2.jpg"
    },
    {
      "id": "c3-09",
      "level": 3,
      "region": "Torino",
      "hook": true,
      "image": "images/hooks/teen-scooter.jpg",
      "culture": "Torino · evening look",
      "prompt": "In the evening he was always serious with a gianduiotto.",
      "gloss": "used to",
      "person": "lui",
      "captions": [
        "La sera lui era sempre serio con un gianduiotto",
        "La sera lui è sempre serio con un gianduiotto"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how he seems tonight. English looks back."
      ],
      "help": "Match how he used to seem. serio = serious.",
      "explain": "era sempre serio… = how he used to look on walks.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "He used to look serious with chocolate",
          "He looks serious with chocolate tonight"
        ],
        "correct": 0,
        "miss": "Used-to vibe."
      },
      "lockIn": {
        "it": "serio",
        "en": "serious"
      },
      "video": "videos/scooter-ride.mp4"
    },
    {
      "id": "c3-10",
      "level": 3,
      "region": "Braies",
      "culture": "Braies · lake quiet now",
      "prompt": "We’re at the lake right now and staying quiet.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Siamo al lago e restiamo in silenzio",
        "Eravamo al lago e restavamo in silenzio"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is a past quiet scene. English is now."
      ],
      "help": "Match being there live. restiamo in silenzio = we’re staying quiet.",
      "explain": "Siamo… restiamo… = there now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We’re at the lake staying quiet now",
          "We used to stay quiet at the lake"
        ],
        "correct": 0,
        "miss": "Live lake."
      },
      "lockIn": {
        "it": "restiamo in silenzio",
        "en": "we’re staying quiet"
      },
      "image": "images/places/braies-2.jpg"
    },
    {
      "id": "c3-11",
      "level": 3,
      "region": "Chioggia",
      "culture": "Chioggia · canal evenings",
      "prompt": "In the evening on the canals we used to walk without rushing.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "La sera sui canali camminavamo senza fretta",
        "La sera sui canali camminiamo senza fretta"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is tonight’s walk. English looks back."
      ],
      "help": "Match the old canal evenings. senza fretta = without rushing.",
      "explain": "camminavamo senza fretta = how evenings used to feel.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to walk the canals slowly",
          "We walk the canals slowly tonight"
        ],
        "correct": 0,
        "miss": "Old evenings."
      },
      "lockIn": {
        "it": "senza fretta",
        "en": "without rushing / in no hurry"
      },
      "image": "images/places/chioggia-2.jpg",
      "video": "videos/venice-walk.mp4"
    },
    {
      "id": "c3-12",
      "level": 3,
      "region": "Ravenna",
      "hook": true,
      "image": "images/hooks/ferrari-1.jpg",
      "culture": "Ravenna · rosso spot",
      "prompt": "Do you see that red Ferrari? It’s incredible.",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Vedi quella Ferrari rossa? È incredibile",
        "Vedevi sempre quella Ferrari rossa"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how you used to spot it. English is now."
      ],
      "help": "Match pointing it out live. Vedi…? = Do you see…?",
      "explain": "Vedi…? È incredibile = spotting it now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "You see the red Ferrari now",
          "You used to see that Ferrari"
        ],
        "correct": 0,
        "miss": "Live spot."
      },
      "lockIn": {
        "it": "È incredibile",
        "en": "It’s incredible"
      }
    },
    {
      "id": "c3-13",
      "level": 3,
      "region": "Bologna",
      "culture": "Bologna · tortellini to-go",
      "prompt": "I’m getting tortellini to go — coming!",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Prendo i tortellini da asporto, vengo",
        "Prendevo sempre i tortellini da asporto"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is an old lunch habit. English is now."
      ],
      "help": "Match ordering live. da asporto = to go / takeaway.",
      "explain": "Prendo… da asporto = ordering now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "I’m grabbing tortellini now",
          "I used to grab tortellini"
        ],
        "correct": 0,
        "miss": "Live order."
      },
      "lockIn": {
        "it": "da asporto",
        "en": "to go / takeaway"
      },
      "image": "images/places/bologna-2.jpg"
    },
    {
      "id": "c3-14",
      "level": 3,
      "region": "Torino",
      "culture": "Torino · portici stroll",
      "prompt": "You’re walking under the portici and eating a gianduiotto.",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Giri sotto i portici e mangi un gianduiotto",
        "Giravi sotto i portici e mangiavi un gianduiotto"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is how walks used to go. English is now."
      ],
      "help": "Match you doing it live. sotto i portici = under the arcades.",
      "explain": "Giri… mangi… = you’re doing it now.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "You’re walking the arches now",
          "You used to walk the arches"
        ],
        "correct": 0,
        "miss": "Live stroll."
      },
      "lockIn": {
        "it": "sotto i portici",
        "en": "under the arcades"
      },
      "image": "images/places/torino-2.jpg"
    },
    {
      "id": "c3-15",
      "level": 3,
      "region": "Ravenna",
      "culture": "Ravenna · museum mornings",
      "prompt": "In the morning we used to look at the mosaics in silence.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Al mattino guardavamo i mosaici in silenzio",
        "Al mattino guardiamo i mosaici in silenzio"
      ],
      "correct": 0,
      "why": [
        "",
        "That one is today’s visit. English looks back."
      ],
      "help": "Match the old quiet mornings. i mosaici = the mosaics.",
      "explain": "guardavamo… in silenzio = how mornings used to feel.",
      "softExplain": "Read the English line. Pick the Italian that says the same thing.",
      "prove": {
        "choices": [
          "We used to look at mosaics quietly",
          "We look at mosaics quietly today"
        ],
        "correct": 0,
        "miss": "Old mornings."
      },
      "lockIn": {
        "it": "i mosaici",
        "en": "the mosaics"
      },
      "image": "images/places/ravenna-2.jpg"
    }
  ]
};
