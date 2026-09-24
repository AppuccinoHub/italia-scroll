/* Italia Scroll — content pack
   Pacing: ~8–10 min/level (~22 cards + prove-it). Quick Play ≈ 8 cards / 2–3 min.
   Region hop: Bacoli → Monte di Procida (Prof.ssa Scotto) → Ischia → Capri,
   then lesser-known gems. Avoid Rome/Venice leads.
   Captions = real conjugated Italian — never tense-name buttons.
   Person scope: ONLY io, tu, lui/lei, noi (no voi, no loro).
   Distractors = same person/number, different tense.
   Hyper-repetition: same high-frequency chunks recycle across a level.
   After each correct caption → prove-it (meaning match) before next card. */
window.ITALIA_SCROLL = {
  "version": 7,
  "levels": [
    {
      "id": 1,
      "title": "Ora o abitudine?",
      "blurb": "Presente · Imperfetto",
      "minutes": "≈ 8–10 min",
      "contrast": "presente-imperfetto"
    },
    {
      "id": 2,
      "title": "Ora o fatto?",
      "blurb": "Presente · Passato",
      "minutes": "≈ 8–10 min",
      "contrast": "presente-passato"
    },
    {
      "id": 3,
      "title": "Sfondo o momento?",
      "blurb": "Passato · Imperfetto",
      "minutes": "≈ 8–10 min",
      "contrast": "passato-imperfetto"
    },
    {
      "id": 4,
      "title": "Mix totale",
      "blurb": "Mix",
      "minutes": "≈ 8–10 min",
      "contrast": "mixed"
    }
  ],
  "quickPlay": {
    "title": "Quick Play",
    "blurb": "Eight cards · about two–three minutes. Mixed tenses — warm-up or exit ticket.",
    "minutes": "≈ 2–3 min",
    "cardIds": [
      "l1-2",
      "l2-1",
      "l3-1",
      "l4-2",
      "l2-5",
      "l1-16",
      "l3-4",
      "l4-5"
    ]
  },
  "placeImages": {
    "Bacoli": "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=900&h=1600&q=80&auto=format&fit=crop",
    "Monte di Procida": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&h=1600&q=80&auto=format&fit=crop",
    "Ischia": "https://images.unsplash.com/photo-1678147406500-3ade97bc4eab?w=900&h=1600&q=80&auto=format&fit=crop",
    "Capri": "https://images.unsplash.com/photo-1562450291-1000b9ca5639?w=900&h=1600&q=80&auto=format&fit=crop",
    "Tropea": "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=900&h=1600&q=80&auto=format&fit=crop",
    "Polignano": "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=900&h=1600&q=80&auto=format&fit=crop",
    "Matera": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=900&h=1600&q=80&auto=format&fit=crop",
    "Alberobello": "https://images.unsplash.com/photo-1753641390035-0a949ca6d913?w=900&h=1600&q=80&auto=format&fit=crop",
    "Bologna": "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=900&h=1600&q=80&auto=format&fit=crop",
    "Lecce": "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=900&h=1600&q=80&auto=format&fit=crop",
    "Genova": "https://images.unsplash.com/photo-1766776964239-a531dd934b01?w=900&h=1600&q=80&auto=format&fit=crop",
    "Braies": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=1600&q=80&auto=format&fit=crop",
    "Palermo": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=900&h=1600&q=80&auto=format&fit=crop",
    "Ortigia": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&h=1600&q=80&auto=format&fit=crop",
    "Torino": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900&h=1600&q=80&auto=format&fit=crop",
    "Amalfi": "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=900&h=1600&q=80&auto=format&fit=crop",
    "Procida": "https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?w=900&h=1600&q=80&auto=format&fit=crop",
    "Sperlonga": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=1600&q=80&auto=format&fit=crop",
    "Ravenna": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&h=1600&q=80&auto=format&fit=crop",
    "Chioggia": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=900&h=1600&q=80&auto=format&fit=crop"
  },
  "cards": [
    {
      "id": "l1-1",
      "level": 1,
      "region": "Bacoli",
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
        "Imperfect paints a past scene. You’re there tonight — present."
      ],
      "prove": {
        "choices": [
          "We’re there tonight",
          "We used to be there"
        ],
        "correct": 0,
        "miss": "Live now — not a memory."
      }
    },
    {
      "id": "l1-2",
      "level": 1,
      "region": "Monte di Procida",
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
        "Imperfect is a past scene. You’re standing there now — present."
      ],
      "prove": {
        "choices": [
          "We’re at her town overlook now",
          "We used to visit her town"
        ],
        "correct": 0,
        "miss": "You’re there live."
      }
    },
    {
      "id": "l1-3",
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
        "Present is today’s habit. Prompt wants how summers used to go — imperfect."
      ],
      "prove": {
        "choices": [
          "We used to go every summer",
          "We go every summer now"
        ],
        "correct": 0,
        "miss": "“Used to” = past habit."
      }
    },
    {
      "id": "l1-4",
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
        "Imperfect = past habit. You’re on the boat now — present."
      ],
      "prove": {
        "choices": [
          "We see them live from the boat",
          "We used to see them from the boat"
        ],
        "correct": 0,
        "miss": "Live view = present."
      }
    },
    {
      "id": "l1-5",
      "level": 1,
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
        "Imperfect paints a past scene. You’re there today — present."
      ],
      "prove": {
        "choices": [
          "We’re on the sand today",
          "We used to be on the sand"
        ],
        "correct": 0,
        "miss": "Today = present."
      }
    },
    {
      "id": "l1-6",
      "level": 1,
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
        "Present is tonight. Prompt wants how August used to feel — imperfect."
      ],
      "prove": {
        "choices": [
          "We used to dive then get gelato",
          "We dive then get gelato tonight"
        ],
        "correct": 0,
        "miss": "Old August loop."
      }
    },
    {
      "id": "l1-7",
      "level": 1,
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
        "Present is a general now. Prompt wants how it used to feel — imperfect.",
        ""
      ],
      "prove": {
        "choices": [
          "We walk there now",
          "We used to walk there in the evenings"
        ],
        "correct": 1,
        "miss": "“Used to” = imperfect."
      }
    },
    {
      "id": "l1-8",
      "level": 1,
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
        "Imperfect is a past wander. You’re there now — present."
      ],
      "prove": {
        "choices": [
          "You’re wandering + gelato now",
          "You used to wander + gelato"
        ],
        "correct": 0,
        "miss": "Right now = present."
      }
    },
    {
      "id": "l1-9",
      "level": 1,
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
        "Present is today. Old after-school loop = imperfect."
      ],
      "prove": {
        "choices": [
          "We used to go under the arches",
          "We go under the arches today"
        ],
        "correct": 0,
        "miss": "Old loop = imperfect."
      }
    },
    {
      "id": "l1-10",
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
        "Imperfect = past scene. You’re posting live — present."
      ],
      "prove": {
        "choices": [
          "I am in Amalfi eating gelato",
          "I used to be in Amalfi eating gelato"
        ],
        "correct": 0,
        "miss": "Live selfie = present."
      }
    },
    {
      "id": "l1-11",
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
        "Imperfect = he used to be there. He’s there now — present."
      ],
      "prove": {
        "choices": [
          "Marco is there looking at the harbor",
          "Marco used to look at the harbor"
        ],
        "correct": 0,
        "miss": "He’s there now."
      }
    },
    {
      "id": "l1-12",
      "level": 1,
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
        "Present is tonight. Prompt wants old evenings — imperfect."
      ],
      "prove": {
        "choices": [
          "We used to see the lights every evening",
          "We see the lights every evening now"
        ],
        "correct": 0,
        "miss": "Used-to evenings."
      }
    },
    {
      "id": "l1-13",
      "level": 1,
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
        "Imperfect = old habit. You’re ordering now — present."
      ],
      "prove": {
        "choices": [
          "You’re grabbing focaccia now",
          "You used to grab focaccia"
        ],
        "correct": 0,
        "miss": "Live order."
      }
    },
    {
      "id": "l1-14",
      "level": 1,
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
        "Present is today. Old quiet mornings = imperfect."
      ],
      "prove": {
        "choices": [
          "We used to go early and stay quiet",
          "We go early and stay quiet today"
        ],
        "correct": 0,
        "miss": "Old mornings."
      }
    },
    {
      "id": "l1-15",
      "level": 1,
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
        "Imperfect = you used to eat. You’re mid-bite — present."
      ],
      "prove": {
        "choices": [
          "I’m eating panelle now",
          "I used to eat panelle"
        ],
        "correct": 0,
        "miss": "Mid-bite = present."
      }
    },
    {
      "id": "l1-16",
      "level": 1,
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
        "Imperfect = she used to ask. She’s asking now — present."
      ],
      "prove": {
        "choices": [
          "She’s inviting you to gelato now",
          "She used to invite you to gelato"
        ],
        "correct": 0,
        "miss": "Live invite."
      }
    },
    {
      "id": "l1-17",
      "level": 1,
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
        "Present is tonight. Old downtown loop = imperfect."
      ],
      "prove": {
        "choices": [
          "We used to hang downtown with chocolate",
          "We hang downtown with chocolate now"
        ],
        "correct": 0,
        "miss": "Used-to evenings."
      }
    },
    {
      "id": "l1-18",
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
        "Imperfect = past look. You’re pointing live — present."
      ],
      "prove": {
        "choices": [
          "You see them right now",
          "You used to see them"
        ],
        "correct": 0,
        "miss": "Live point."
      }
    },
    {
      "id": "l1-19",
      "level": 1,
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
        "Present is today’s habit. Old beach ending = imperfect."
      ],
      "prove": {
        "choices": [
          "We used to get gelato after the sea",
          "We get gelato after the sea today"
        ],
        "correct": 0,
        "miss": "Old beach ending."
      }
    },
    {
      "id": "l1-20",
      "level": 1,
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
        "Imperfect = old habit. He’s going now — present."
      ],
      "prove": {
        "choices": [
          "Luca is going to the market now",
          "Luca used to go to the market"
        ],
        "correct": 0,
        "miss": "He’s going live."
      }
    },
    {
      "id": "l1-21",
      "level": 1,
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
        "Present is today. Old post-mosaic snack = imperfect."
      ],
      "prove": {
        "choices": [
          "We used to eat in the piazza after",
          "We eat in the piazza after today"
        ],
        "correct": 0,
        "miss": "Old snack loop."
      }
    },
    {
      "id": "l1-22",
      "level": 1,
      "region": "Bacoli",
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
        "Imperfect = you used to stay. You’re staying tonight — present."
      ],
      "prove": {
        "choices": [
          "I’m staying for sunset",
          "I used to stay for sunset"
        ],
        "correct": 0,
        "miss": "Tonight = present."
      }
    },
    {
      "id": "l2-1",
      "level": 2,
      "region": "Bacoli",
      "culture": "Stairs → sand.",
      "prompt": "You JUST reached the sand. Finished climb.",
      "gloss": "just finished",
      "person": "noi",
      "captions": [
        "Siamo scesi in spiaggia a Bacoli, finalmente!",
        "Scendiamo in spiaggia a Bacoli, finalmente!"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = still going down. You’re already on the sand — passato prossimo."
      ],
      "prove": {
        "choices": [
          "We already made it to the sand",
          "We’re still going down"
        ],
        "correct": 0,
        "miss": "Climb is done."
      }
    },
    {
      "id": "l2-2",
      "level": 2,
      "region": "Monte di Procida",
      "culture": "Gelato, gulf view.",
      "prompt": "Still choosing a flavor LIVE.",
      "gloss": "still deciding",
      "person": "io",
      "captions": [
        "Aspetta, scelgo il gusto guardando il golfo…",
        "Aspetta, ho scelto il gusto guardando il golfo…"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = already picked. You’re still deciding — present."
      ],
      "prove": {
        "choices": [
          "I’m still picking a flavor",
          "I already picked a flavor"
        ],
        "correct": 0,
        "miss": "Still deciding."
      }
    },
    {
      "id": "l2-3",
      "level": 2,
      "region": "Ischia",
      "culture": "Ferry at the porto.",
      "prompt": "Ferry just DOCKED. Mark the arrival.",
      "gloss": "just finished",
      "person": "lui",
      "captions": [
        "Il traghetto è arrivato a Ischia — ci vediamo al porto!",
        "Il traghetto arriva a Ischia — ci vediamo al porto!"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = it’s arriving. It already docked — passato prossimo."
      ],
      "prove": {
        "choices": [
          "The ferry already docked",
          "The ferry is arriving now"
        ],
        "correct": 0,
        "miss": "Already there."
      }
    },
    {
      "id": "l2-4",
      "level": 2,
      "region": "Capri",
      "culture": "Piazzetta photos.",
      "prompt": "Snapping photos NOW.",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Faccio un sacco di foto a Capri, aspetta",
        "Ho fatto un sacco di foto a Capri, aspetta"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = already done. You’re still shooting — present."
      ],
      "prove": {
        "choices": [
          "I’m still taking photos",
          "I already took the photos"
        ],
        "correct": 0,
        "miss": "Still shooting."
      }
    },
    {
      "id": "l2-5",
      "level": 2,
      "region": "Lecce",
      "culture": "Pasticciotti run.",
      "prompt": "You just GRABBED pasticciotti. Done.",
      "gloss": "just finished",
      "person": "io",
      "captions": [
        "Ok fatto, ho preso i pasticciotti per tutti",
        "Ok, prendo i pasticciotti per tutti"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = still doing it. Bag is already in hand — passato prossimo."
      ],
      "prove": {
        "choices": [
          "I already grabbed them",
          "I’m still grabbing them"
        ],
        "correct": 0,
        "miss": "Bag’s in hand."
      }
    },
    {
      "id": "l2-6",
      "level": 2,
      "region": "Genova",
      "culture": "Focaccia counter.",
      "prompt": "Ordering focaccia LIVE.",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Prendo una focaccia e corro al porto",
        "Ho preso una focaccia e sono corso al porto"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = already bought and ran. You’re ordering now — present."
      ],
      "prove": {
        "choices": [
          "I’m ordering focaccia now",
          "I already bought focaccia and ran"
        ],
        "correct": 0,
        "miss": "Still at the counter."
      }
    },
    {
      "id": "l2-7",
      "level": 2,
      "region": "Braies",
      "culture": "Rowboat on the lake.",
      "prompt": "You JUST rented the rowboat.",
      "gloss": "just finished",
      "person": "noi",
      "captions": [
        "Abbiamo noleggiato la barca — andiamo sul lago!",
        "Noleggiamo la barca — andiamo sul lago!"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = still renting. Boat’s already yours — passato prossimo."
      ],
      "prove": {
        "choices": [
          "We already rented the boat",
          "We’re still renting the boat"
        ],
        "correct": 0,
        "miss": "Boat is yours."
      }
    },
    {
      "id": "l2-8",
      "level": 2,
      "region": "Palermo",
      "culture": "Ballarò noise.",
      "prompt": "Walking through the market NOW.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Giriamo a Ballarò e mangiamo panelle al volo",
        "Abbiamo girato a Ballarò e abbiamo mangiato panelle"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo wraps a finished trip. You’re still in the market — present."
      ],
      "prove": {
        "choices": [
          "We’re still walking the market",
          "We already finished the market trip"
        ],
        "correct": 0,
        "miss": "Still inside."
      }
    },
    {
      "id": "l2-9",
      "level": 2,
      "region": "Ortigia",
      "culture": "Sofia’s text.",
      "prompt": "Sofia JUST texted the group.",
      "gloss": "just finished",
      "person": "lei",
      "captions": [
        "Sofia ha scritto: “raga Ortigia è pazzesca”",
        "Sofia scrive: “raga Ortigia è pazzesca”"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = she’s writing now. She already hit send — passato prossimo."
      ],
      "prove": {
        "choices": [
          "Sofia already sent the text",
          "Sofia is typing now"
        ],
        "correct": 0,
        "miss": "Already sent."
      }
    },
    {
      "id": "l2-10",
      "level": 2,
      "region": "Amalfi",
      "culture": "Bus to the pier.",
      "prompt": "You JUST arrived at Amalfi.",
      "gloss": "just finished",
      "person": "noi",
      "captions": [
        "Siamo arrivati ad Amalfi — che profumo di limone!",
        "Arriviamo ad Amalfi — che profumo di limone!"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = still arriving. You’re already there — passato prossimo."
      ],
      "prove": {
        "choices": [
          "We already arrived",
          "We’re still arriving"
        ],
        "correct": 0,
        "miss": "You’re there."
      }
    },
    {
      "id": "l2-11",
      "level": 2,
      "region": "Procida",
      "culture": "Harbor photos.",
      "prompt": "Still taking pictures NOW (tu).",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Fai troppe foto al porto, dai!",
        "Hai fatto troppe foto al porto, dai!"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = already done. Camera still up — present."
      ],
      "prove": {
        "choices": [
          "You’re still taking photos",
          "You already took too many photos"
        ],
        "correct": 0,
        "miss": "Camera still up."
      }
    },
    {
      "id": "l2-12",
      "level": 2,
      "region": "Tropea",
      "culture": "Cipolla rossa haul.",
      "prompt": "You JUST bought the onions.",
      "gloss": "just finished",
      "person": "noi",
      "captions": [
        "Abbiamo preso la cipolla rossa al mercato",
        "Prendiamo la cipolla rossa al mercato"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = still buying. Bag is closed — passato prossimo."
      ],
      "prove": {
        "choices": [
          "We already bought them",
          "We’re still buying them"
        ],
        "correct": 0,
        "miss": "Bag closed."
      }
    },
    {
      "id": "l2-13",
      "level": 2,
      "region": "Polignano",
      "culture": "Gelato flavors.",
      "prompt": "Giulia is STILL choosing (lei).",
      "gloss": "still deciding",
      "person": "lei",
      "captions": [
        "Giulia sceglie il gusto sulla scogliera…",
        "Giulia ha scelto il gusto sulla scogliera…"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = already picked. She’s still deciding — present."
      ],
      "prove": {
        "choices": [
          "Giulia is still choosing",
          "Giulia already chose"
        ],
        "correct": 0,
        "miss": "Still deciding."
      }
    },
    {
      "id": "l2-14",
      "level": 2,
      "region": "Matera",
      "culture": "Sassi meetup.",
      "prompt": "Marco JUST arrived at the Sassi (lui).",
      "gloss": "just finished",
      "person": "lui",
      "captions": [
        "Marco è arrivato nei Sassi — ci vediamo lì",
        "Marco arriva nei Sassi — ci vediamo lì"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = he’s arriving. He already got there — passato prossimo."
      ],
      "prove": {
        "choices": [
          "Marco already arrived",
          "Marco is arriving now"
        ],
        "correct": 0,
        "miss": "He’s there."
      }
    },
    {
      "id": "l2-15",
      "level": 2,
      "region": "Alberobello",
      "culture": "Trulli selfie.",
      "prompt": "Group selfie happening NOW.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Facciamo una foto tra i trulli — uno, due, tre!",
        "Abbiamo fatto una foto tra i trulli"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = already snapped. You’re counting down — present."
      ],
      "prove": {
        "choices": [
          "We’re taking the photo now",
          "We already took the photo"
        ],
        "correct": 0,
        "miss": "Countdown = present."
      }
    },
    {
      "id": "l2-16",
      "level": 2,
      "region": "Bologna",
      "culture": "Tortellini to-go.",
      "prompt": "You JUST grabbed lunch.",
      "gloss": "just finished",
      "person": "io",
      "captions": [
        "Ho preso i tortellini da asporto, vengo",
        "Prendo i tortellini da asporto, vengo"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = still ordering. Food’s already yours — passato prossimo."
      ],
      "prove": {
        "choices": [
          "I already got the tortellini",
          "I’m still getting tortellini"
        ],
        "correct": 0,
        "miss": "Already got them."
      }
    },
    {
      "id": "l2-17",
      "level": 2,
      "region": "Torino",
      "culture": "Portici stroll.",
      "prompt": "Wandering the portici NOW (tu).",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Giri sotto i portici e mangi un gianduiotto",
        "Hai girato sotto i portici e hai mangiato un gianduiotto"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo wraps a finished walk. You’re still strolling — present."
      ],
      "prove": {
        "choices": [
          "You’re still wandering now",
          "You already finished the walk"
        ],
        "correct": 0,
        "miss": "Still strolling."
      }
    },
    {
      "id": "l2-18",
      "level": 2,
      "region": "Ravenna",
      "culture": "Group chat.",
      "prompt": "You JUST texted the class chat.",
      "gloss": "just finished",
      "person": "noi",
      "captions": [
        "Abbiamo scritto al gruppo: “Ravenna è incredibile”",
        "Scriviamo al gruppo: “Ravenna è incredibile”"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = still typing. Message already sent — passato prossimo."
      ],
      "prove": {
        "choices": [
          "We already sent the message",
          "We’re still typing"
        ],
        "correct": 0,
        "miss": "Already sent."
      }
    },
    {
      "id": "l2-19",
      "level": 2,
      "region": "Sperlonga",
      "culture": "Beach drop.",
      "prompt": "You JUST got to the beach.",
      "gloss": "just finished",
      "person": "io",
      "captions": [
        "Sono arrivato a Sperlonga — che mare!",
        "Arrivo a Sperlonga — che mare!"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = still arriving. Feet on sand — passato prossimo."
      ],
      "prove": {
        "choices": [
          "I already arrived",
          "I’m still arriving"
        ],
        "correct": 0,
        "miss": "Feet on sand."
      }
    },
    {
      "id": "l2-20",
      "level": 2,
      "region": "Chioggia",
      "culture": "Canal photos.",
      "prompt": "Sofia is snapping NOW (lei).",
      "gloss": "right now",
      "person": "lei",
      "captions": [
        "Sofia fa foto ai canali, aspetta un secondo",
        "Sofia ha fatto foto ai canali, aspetta un secondo"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = already done. She’s still shooting — present."
      ],
      "prove": {
        "choices": [
          "Sofia is taking photos now",
          "Sofia already took the photos"
        ],
        "correct": 0,
        "miss": "Still shooting."
      }
    },
    {
      "id": "l2-21",
      "level": 2,
      "region": "Monte di Procida",
      "culture": "Gelateria again.",
      "prompt": "You JUST picked flavors for the group.",
      "gloss": "just finished",
      "person": "noi",
      "captions": [
        "Abbiamo scelto i gusti — andiamo al belvedere",
        "Scegliamo i gusti — andiamo al belvedere"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = still choosing. Cones ready — passato prossimo."
      ],
      "prove": {
        "choices": [
          "We already chose the flavors",
          "We’re still choosing flavors"
        ],
        "correct": 0,
        "miss": "Cones ready."
      }
    },
    {
      "id": "l2-22",
      "level": 2,
      "region": "Capri",
      "culture": "Limoncello stop.",
      "prompt": "Grabbing a taste RIGHT NOW (tu).",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Prendi un assaggio e poi ripartiamo",
        "Hai preso un assaggio e poi siamo ripartiti"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = already tasted and left. You’re tasting now — present."
      ],
      "prove": {
        "choices": [
          "You’re tasting now",
          "You already tasted and left"
        ],
        "correct": 0,
        "miss": "Still tasting."
      }
    },
    {
      "id": "l3-1",
      "level": 3,
      "region": "Monte di Procida",
      "culture": "Windy belvedere.",
      "prompt": "Set the SCENE of that windy evening.",
      "gloss": "the scene",
      "person": "lui",
      "captions": [
        "C’era vento sul belvedere ma il golfo era bellissimo",
        "C’è stato vento sul belvedere ma il golfo è stato bellissimo"
      ],
      "correct": 0,
      "why": [
        "",
        "Ongoing wind + vibe = imperfect. Passato prossimo punches single finished events."
      ],
      "prove": {
        "choices": [
          "It was windy — setting the scene",
          "There was a one-time wind event"
        ],
        "correct": 0,
        "miss": "Mood = imperfect."
      }
    },
    {
      "id": "l3-2",
      "level": 3,
      "region": "Ischia",
      "culture": "Bus on a tiny road.",
      "prompt": "A bus suddenly PASSED you. Mark the EVENT.",
      "gloss": "sudden moment",
      "person": "lui",
      "captions": [
        "All’improvviso un bus mi è passato a un centimetro",
        "All’improvviso un bus mi passava a un centimetro"
      ],
      "correct": 0,
      "why": [
        "",
        "“All’improvviso” + completed scare = passato prossimo."
      ],
      "prove": {
        "choices": [
          "A bus suddenly passed — finished scare",
          "A bus was passing ongoing"
        ],
        "correct": 0,
        "miss": "Sudden finished beat."
      }
    },
    {
      "id": "l3-3",
      "level": 3,
      "region": "Capri",
      "culture": "Under the Faraglioni.",
      "prompt": "How the water FELT while you floated.",
      "gloss": "the scene",
      "person": "lei",
      "captions": [
        "Sotto i Faraglioni l’acqua era trasparente",
        "Sotto i Faraglioni l’acqua è stata trasparente"
      ],
      "correct": 0,
      "why": [
        "",
        "Mood and ongoing look = imperfect."
      ],
      "prove": {
        "choices": [
          "The water felt clear — scene",
          "The water was clear as a checklist"
        ],
        "correct": 0,
        "miss": "Feeling = imperfect."
      }
    },
    {
      "id": "l3-4",
      "level": 3,
      "region": "Bologna",
      "culture": "Surprise torta.",
      "prompt": "The cake suddenly ARRIVED. Event.",
      "gloss": "sudden moment",
      "person": "lei",
      "captions": [
        "Poi è arrivata la torta e noi abbiamo cantato",
        "Poi arrivava la torta e noi cantavamo"
      ],
      "correct": 0,
      "why": [
        "",
        "Cake arrival is a finished story beat — passato prossimo."
      ],
      "prove": {
        "choices": [
          "The cake arrived — finished beat",
          "The cake was arriving ongoing"
        ],
        "correct": 0,
        "miss": "Event = passato."
      }
    },
    {
      "id": "l3-5",
      "level": 3,
      "region": "Matera",
      "culture": "Night in the Sassi.",
      "prompt": "How the stone city FELT that night.",
      "gloss": "the scene",
      "person": "lui",
      "captions": [
        "Nei Sassi faceva fresco e le luci erano d’oro",
        "Nei Sassi ha fatto fresco e le luci sono state d’oro"
      ],
      "correct": 0,
      "why": [
        "",
        "Mood and ongoing glow = imperfect."
      ],
      "prove": {
        "choices": [
          "It felt cool with golden lights",
          "It finished being cool once"
        ],
        "correct": 0,
        "miss": "Mood = imperfect."
      }
    },
    {
      "id": "l3-6",
      "level": 3,
      "region": "Palermo",
      "culture": "Street calcio.",
      "prompt": "YOU scored the GOAL. Finished moment.",
      "gloss": "sudden moment",
      "person": "noi",
      "captions": [
        "All’ultimo minuto abbiamo segnato e abbiamo urlato",
        "All’ultimo minuto segnavamo e urlavamo"
      ],
      "correct": 0,
      "why": [
        "",
        "That goal and the shout are finished beats — passato prossimo."
      ],
      "prove": {
        "choices": [
          "We scored — finished goal",
          "We were scoring ongoing"
        ],
        "correct": 0,
        "miss": "Goal = passato."
      }
    },
    {
      "id": "l3-7",
      "level": 3,
      "region": "Torino",
      "culture": "Gianduiotto walk.",
      "prompt": "How YOU felt that evening while walking.",
      "gloss": "the scene",
      "person": "io",
      "captions": [
        "Era tardi ma non volevo tornare a casa",
        "È stato tardi ma non ho voluto tornare a casa"
      ],
      "correct": 0,
      "why": [
        "",
        "“It was late / I didn’t want” = imperfect mood."
      ],
      "prove": {
        "choices": [
          "It was late and I didn’t want to go home",
          "It got late once and I refused once"
        ],
        "correct": 0,
        "miss": "Mood = imperfect."
      }
    },
    {
      "id": "l3-8",
      "level": 3,
      "region": "Tropea",
      "culture": "Late coastal bus.",
      "prompt": "The bus finally SHOWED UP. Event.",
      "gloss": "sudden moment",
      "person": "lui",
      "captions": [
        "Alla fine il bus è arrivato con quaranta minuti di ritardo",
        "Alla fine il bus arrivava con quaranta minuti di ritardo"
      ],
      "correct": 0,
      "why": [
        "",
        "“Alla fine” + arrival = passato prossimo."
      ],
      "prove": {
        "choices": [
          "The bus finally arrived",
          "The bus was arriving ongoing"
        ],
        "correct": 0,
        "miss": "Finally = passato."
      }
    },
    {
      "id": "l3-9",
      "level": 3,
      "region": "Braies",
      "culture": "Snow + headphones.",
      "prompt": "Background: snow + quiet study vibe.",
      "gloss": "the scene",
      "person": "noi",
      "captions": [
        "Fuori nevicava e noi studiavamo con la musica bassa",
        "Fuori ha nevicato e noi abbiamo studiato con la musica bassa"
      ],
      "correct": 0,
      "why": [
        "",
        "Setting the study scene = imperfect."
      ],
      "prove": {
        "choices": [
          "Snow was falling while we studied",
          "It snowed once and we studied once"
        ],
        "correct": 0,
        "miss": "Scene = imperfect."
      }
    },
    {
      "id": "l3-10",
      "level": 3,
      "region": "Bacoli",
      "culture": "Quiet golfo evening.",
      "prompt": "Paint that evening SCENE on the waterfront.",
      "gloss": "the scene",
      "person": "lui",
      "captions": [
        "C’era poca gente e il golfo era calmo",
        "C’è stata poca gente e il golfo è stato calmo"
      ],
      "correct": 0,
      "why": [
        "",
        "Ongoing quiet vibe = imperfect."
      ],
      "prove": {
        "choices": [
          "Few people — calm scene",
          "A one-time quiet event"
        ],
        "correct": 0,
        "miss": "Scene = imperfect."
      }
    },
    {
      "id": "l3-11",
      "level": 3,
      "region": "Amalfi",
      "culture": "Ferry surprise.",
      "prompt": "The ferry suddenly SHOWED UP.",
      "gloss": "sudden moment",
      "person": "lui",
      "captions": [
        "All’improvviso è arrivato il traghetto",
        "All’improvviso arrivava il traghetto"
      ],
      "correct": 0,
      "why": [
        "",
        "Sudden completed arrival = passato prossimo."
      ],
      "prove": {
        "choices": [
          "The ferry suddenly arrived",
          "The ferry was arriving ongoing"
        ],
        "correct": 0,
        "miss": "Sudden = passato."
      }
    },
    {
      "id": "l3-12",
      "level": 3,
      "region": "Procida",
      "culture": "Hot afternoon.",
      "prompt": "How the harbor FELT that afternoon.",
      "gloss": "the scene",
      "person": "lui",
      "captions": [
        "Al porto faceva caldo e i colori erano fortissimi",
        "Al porto ha fatto caldo e i colori sono stati fortissimi"
      ],
      "correct": 0,
      "why": [
        "",
        "Ongoing heat + color = imperfect."
      ],
      "prove": {
        "choices": [
          "It felt hot with strong colors",
          "It finished being hot once"
        ],
        "correct": 0,
        "miss": "Feeling = imperfect."
      }
    },
    {
      "id": "l3-13",
      "level": 3,
      "region": "Lecce",
      "culture": "Pasticciotto grab.",
      "prompt": "You suddenly GRABBED the last ones. Event.",
      "gloss": "sudden moment",
      "person": "noi",
      "captions": [
        "All’ultimo momento abbiamo preso gli ultimi pasticciotti",
        "All’ultimo momento prendevamo gli ultimi pasticciotti"
      ],
      "correct": 0,
      "why": [
        "",
        "Finished last-second grab = passato prossimo."
      ],
      "prove": {
        "choices": [
          "We grabbed the last ones",
          "We were grabbing them ongoing"
        ],
        "correct": 0,
        "miss": "Finished grab."
      }
    },
    {
      "id": "l3-14",
      "level": 3,
      "region": "Polignano",
      "culture": "Cliff hesitation.",
      "prompt": "How YOU felt before the jump (tu).",
      "gloss": "the scene",
      "person": "tu",
      "captions": [
        "Volevi tuffarti ma avevi un po’ di paura",
        "Hai voluto tuffarti ma hai avuto un po’ di paura"
      ],
      "correct": 0,
      "why": [
        "",
        "Ongoing feeling before the jump = imperfect."
      ],
      "prove": {
        "choices": [
          "You wanted to jump but felt scared",
          "You decided once and got scared once"
        ],
        "correct": 0,
        "miss": "Feeling = imperfect."
      }
    },
    {
      "id": "l3-15",
      "level": 3,
      "region": "Ortigia",
      "culture": "Zia’s door.",
      "prompt": "Zia suddenly OPENED the door. Event.",
      "gloss": "sudden moment",
      "person": "lei",
      "captions": [
        "Poi zia è arrivata e ci ha abbracciato",
        "Poi zia arrivava e ci abbracciava"
      ],
      "correct": 0,
      "why": [
        "",
        "Finished greeting beat = passato prossimo."
      ],
      "prove": {
        "choices": [
          "Zia arrived and hugged you",
          "Zia was arriving and hugging ongoing"
        ],
        "correct": 0,
        "miss": "Event = passato."
      }
    },
    {
      "id": "l3-16",
      "level": 3,
      "region": "Genova",
      "culture": "Vicoli rain.",
      "prompt": "Set the rainy SCENE in the vicoli.",
      "gloss": "the scene",
      "person": "lui",
      "captions": [
        "C’era pioggia leggera e i vicoli erano vuoti",
        "C’è stata pioggia leggera e i vicoli sono stati vuoti"
      ],
      "correct": 0,
      "why": [
        "",
        "Ongoing rain + empty streets = imperfect."
      ],
      "prove": {
        "choices": [
          "Light rain — empty streets scene",
          "A one-time rain checklist"
        ],
        "correct": 0,
        "miss": "Scene = imperfect."
      }
    },
    {
      "id": "l3-17",
      "level": 3,
      "region": "Alberobello",
      "culture": "First trullo view.",
      "prompt": "You suddenly SAW the trulli. Event.",
      "gloss": "sudden moment",
      "person": "noi",
      "captions": [
        "All’improvviso abbiamo visto i trulli e siamo rimasti zitti",
        "All’improvviso vedevamo i trulli e restavamo zitti"
      ],
      "correct": 0,
      "why": [
        "",
        "Sudden reveal = passato prossimo."
      ],
      "prove": {
        "choices": [
          "We suddenly saw them and went quiet",
          "We were seeing them ongoing"
        ],
        "correct": 0,
        "miss": "Reveal = passato."
      }
    },
    {
      "id": "l3-18",
      "level": 3,
      "region": "Sperlonga",
      "culture": "Late beach day.",
      "prompt": "How YOU felt as the beach emptied.",
      "gloss": "the scene",
      "person": "io",
      "captions": [
        "Era tardi e non volevo lasciare la spiaggia",
        "È stato tardi e non ho voluto lasciare la spiaggia"
      ],
      "correct": 0,
      "why": [
        "",
        "Late + didn’t want = imperfect mood."
      ],
      "prove": {
        "choices": [
          "It was late and I didn’t want to leave",
          "It got late once and I refused once"
        ],
        "correct": 0,
        "miss": "Mood = imperfect."
      }
    },
    {
      "id": "l3-19",
      "level": 3,
      "region": "Chioggia",
      "culture": "Lagoon bus.",
      "prompt": "The bus finally SHOWED UP.",
      "gloss": "sudden moment",
      "person": "lui",
      "captions": [
        "Alla fine il bus è arrivato e siamo saliti",
        "Alla fine il bus arrivava e noi salivamo"
      ],
      "correct": 0,
      "why": [
        "",
        "“Alla fine” + boarded = passato prossimo."
      ],
      "prove": {
        "choices": [
          "The bus finally arrived and we got on",
          "The bus was arriving ongoing"
        ],
        "correct": 0,
        "miss": "Finally = passato."
      }
    },
    {
      "id": "l3-20",
      "level": 3,
      "region": "Ravenna",
      "culture": "Study café rain.",
      "prompt": "Background: rain + quiet study vibe.",
      "gloss": "the scene",
      "person": "noi",
      "captions": [
        "Fuori pioveva e noi studiavamo al bar",
        "Fuori ha piovuto e noi abbiamo studiato al bar"
      ],
      "correct": 0,
      "why": [
        "",
        "Setting the study scene = imperfect."
      ],
      "prove": {
        "choices": [
          "It was raining while we studied",
          "It rained once and we studied once"
        ],
        "correct": 0,
        "miss": "Scene = imperfect."
      }
    },
    {
      "id": "l3-21",
      "level": 3,
      "region": "Palermo",
      "culture": "Market shout.",
      "prompt": "Someone suddenly YELLED your name. Event.",
      "gloss": "sudden moment",
      "person": "lui",
      "captions": [
        "All’improvviso qualcuno ha urlato il mio nome",
        "All’improvviso qualcuno urlava il mio nome"
      ],
      "correct": 0,
      "why": [
        "",
        "Sudden completed shout = passato prossimo."
      ],
      "prove": {
        "choices": [
          "Someone suddenly yelled your name",
          "Someone was yelling your name ongoing"
        ],
        "correct": 0,
        "miss": "Sudden = passato."
      }
    },
    {
      "id": "l3-22",
      "level": 3,
      "region": "Capri",
      "culture": "Quiet Faraglioni moment.",
      "prompt": "Paint the quiet SCENE under the rocks.",
      "gloss": "the scene",
      "person": "noi",
      "captions": [
        "Sotto i Faraglioni c’era silenzio e noi parlavamo piano",
        "Sotto i Faraglioni c’è stato silenzio e noi abbiamo parlato piano"
      ],
      "correct": 0,
      "why": [
        "",
        "Ongoing quiet + soft talk = imperfect."
      ],
      "prove": {
        "choices": [
          "It was quiet and we talked softly",
          "Silence happened once as a checklist"
        ],
        "correct": 0,
        "miss": "Scene = imperfect."
      }
    },
    {
      "id": "l4-1",
      "level": 4,
      "region": "Bacoli",
      "culture": "Last light, story.",
      "prompt": "You JUST posted the story.",
      "gloss": "just finished",
      "person": "io",
      "captions": [
        "Ho messo la storia da Bacoli, guardate",
        "Metto la storia da Bacoli, guardate",
        "Mettevo sempre la storia da Bacoli"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = doing it now. You already posted — passato prossimo.",
        "Imperfect is an old habit. This is today’s finished post."
      ],
      "prove": {
        "choices": [
          "I already posted the story",
          "I’m posting / I used to post"
        ],
        "correct": 0,
        "miss": "Already posted."
      }
    },
    {
      "id": "l4-2",
      "level": 4,
      "region": "Monte di Procida",
      "culture": "Bus into her town.",
      "prompt": "Live update FROM the bus as you arrive.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Siamo sul bus per Monte di Procida — la professoressa è di qui! 🇮🇹",
        "Siamo stati sul bus per Monte di Procida",
        "Eravamo sul bus per Monte di Procida"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo wraps a finished trip. You’re still arriving — present.",
        "Imperfect is a past scene. This is live — present."
      ],
      "prove": {
        "choices": [
          "We’re on the bus now",
          "We were / we finished being on the bus"
        ],
        "correct": 0,
        "miss": "Live on the bus."
      }
    },
    {
      "id": "l4-3",
      "level": 4,
      "region": "Ischia",
      "culture": "Thermal garden quiet.",
      "prompt": "How the garden FELT while you wandered.",
      "gloss": "the scene",
      "person": "noi",
      "captions": [
        "Nel giardino termale c’era pace e noi parlavamo piano",
        "Nel giardino termale c’è pace e noi parliamo piano",
        "Nel giardino termale c’è stata pace e noi abbiamo parlato piano"
      ],
      "correct": 0,
      "why": [
        "",
        "Present is now. Prompt wants remembered vibe — imperfect.",
        "Passato prossimo lists finished actions. Scene-setting = imperfect."
      ],
      "prove": {
        "choices": [
          "It felt peaceful — scene",
          "It’s peaceful now / peace happened once"
        ],
        "correct": 0,
        "miss": "Remembered vibe."
      }
    },
    {
      "id": "l4-4",
      "level": 4,
      "region": "Capri",
      "culture": "Clouds break.",
      "prompt": "The view suddenly OPENED. Mark the event.",
      "gloss": "sudden moment",
      "person": "noi",
      "captions": [
        "All’improvviso abbiamo visto i Faraglioni e siamo rimasti senza parole",
        "All’improvviso vediamo i Faraglioni e restiamo senza parole",
        "All’improvviso vedevamo i Faraglioni e restavamo senza parole"
      ],
      "correct": 0,
      "why": [
        "",
        "Present would be a live call; this is a finished story beat.",
        "Imperfect keeps it ongoing. The reveal already happened — passato prossimo."
      ],
      "prove": {
        "choices": [
          "We suddenly saw them — finished",
          "We see / we were seeing them"
        ],
        "correct": 0,
        "miss": "Reveal done."
      }
    },
    {
      "id": "l4-5",
      "level": 4,
      "region": "Polignano",
      "culture": "Cliff selfie.",
      "prompt": "You’re posing RIGHT NOW.",
      "gloss": "right now",
      "person": "noi",
      "captions": [
        "Facciamo una foto sulla scogliera — uno, due, tre!",
        "Abbiamo fatto una foto sulla scogliera",
        "Facevamo sempre una foto sulla scogliera"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = already snapped. You’re counting down — present.",
        "Imperfect = old habit. This is the live countdown."
      ],
      "prove": {
        "choices": [
          "We’re taking the photo now",
          "We already took it / we used to take it"
        ],
        "correct": 0,
        "miss": "Live countdown."
      }
    },
    {
      "id": "l4-6",
      "level": 4,
      "region": "Ortigia",
      "culture": "Gelato after cena.",
      "prompt": "How evenings USED TO go at zia’s.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Da zia uscivamo sempre dopo cena per un gelato",
        "Da zia usciamo sempre dopo cena per un gelato",
        "Da zia siamo usciti dopo cena per un gelato"
      ],
      "correct": 0,
      "why": [
        "",
        "Present is today’s habit. “Used to” = imperfect.",
        "Passato prossimo = one outing. Habitual past = imperfect."
      ],
      "prove": {
        "choices": [
          "We used to go out for gelato",
          "We go / we went once"
        ],
        "correct": 0,
        "miss": "Used-to habit."
      }
    },
    {
      "id": "l4-7",
      "level": 4,
      "region": "Genova",
      "culture": "Vicoli concert.",
      "prompt": "The band JUST finished. (Marco = lui)",
      "gloss": "just finished",
      "person": "lui",
      "captions": [
        "Marco ha finito di suonare e io ho applaudito",
        "Marco finisce di suonare e io applaudo",
        "Marco finiva di suonare e io applaudivo"
      ],
      "correct": 0,
      "why": [
        "",
        "Present is live encore energy. Song is over — passato prossimo.",
        "Imperfect = he was finishing. It’s done — passato prossimo."
      ],
      "prove": {
        "choices": [
          "Marco finished and I clapped",
          "He’s finishing / he was finishing"
        ],
        "correct": 0,
        "miss": "Song over."
      }
    },
    {
      "id": "l4-8",
      "level": 4,
      "region": "Lecce",
      "culture": "July heat, iced caffè.",
      "prompt": "Live complaint FROM the bar counter.",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Prendo un caffè freddo perché sto morendo di caldo",
        "Ho preso un caffè freddo perché sono morto di caldo",
        "Prendevo un caffè freddo perché morivo di caldo"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = already ordered. You’re ordering — present.",
        "Imperfect is a past heat habit. This is today’s order — present."
      ],
      "prove": {
        "choices": [
          "I’m ordering a cold coffee now",
          "I already ordered / I used to order"
        ],
        "correct": 0,
        "miss": "Ordering live."
      }
    },
    {
      "id": "l4-9",
      "level": 4,
      "region": "Matera",
      "culture": "Rainy Sassi Sunday.",
      "prompt": "Paint LAST Sunday’s cozy scene.",
      "gloss": "the scene",
      "person": "noi",
      "captions": [
        "Domenica scorsa pioveva e camminavamo tra i Sassi tutto il pomeriggio",
        "Domenica scorsa piove e camminiamo tra i Sassi tutto il pomeriggio",
        "Domenica scorsa ha piovuto e abbiamo camminato tra i Sassi"
      ],
      "correct": 0,
      "why": [
        "",
        "Present doesn’t fit “domenica scorsa.”",
        "Passato prossimo can list actions, but the cozy ongoing vibe wants imperfect."
      ],
      "prove": {
        "choices": [
          "It was raining while we walked — scene",
          "It rains now / it rained once as a list"
        ],
        "correct": 0,
        "miss": "Cozy scene."
      }
    },
    {
      "id": "l4-10",
      "level": 4,
      "region": "Amalfi",
      "culture": "Lemon stand live.",
      "prompt": "You’re THERE now buying limoncello.",
      "gloss": "right now",
      "person": "io",
      "captions": [
        "Sono ad Amalfi e prendo un limoncello",
        "Sono stato ad Amalfi e ho preso un limoncello",
        "Ero ad Amalfi e prendevo un limoncello"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = finished trip. You’re there live — present.",
        "Imperfect = old scene. This is live — present."
      ],
      "prove": {
        "choices": [
          "I’m in Amalfi buying limoncello now",
          "I was / I finished being there"
        ],
        "correct": 0,
        "miss": "Live there."
      }
    },
    {
      "id": "l4-11",
      "level": 4,
      "region": "Procida",
      "culture": "Harbor meetup.",
      "prompt": "Ferry JUST docked.",
      "gloss": "just finished",
      "person": "lui",
      "captions": [
        "Il traghetto è arrivato a Procida",
        "Il traghetto arriva a Procida",
        "Il traghetto arrivava a Procida"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = arriving now. It already docked — passato prossimo.",
        "Imperfect = was arriving. Done — passato prossimo."
      ],
      "prove": {
        "choices": [
          "The ferry already arrived",
          "It’s arriving / it was arriving"
        ],
        "correct": 0,
        "miss": "Already docked."
      }
    },
    {
      "id": "l4-12",
      "level": 4,
      "region": "Tropea",
      "culture": "Summer bus loop.",
      "prompt": "How summers USED TO start.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Ogni estate andavamo a Tropea in bus",
        "Ogni estate andiamo a Tropea in bus",
        "Ogni estate siamo andati a Tropea in bus"
      ],
      "correct": 0,
      "why": [
        "",
        "Present is today’s habit. Used-to = imperfect.",
        "Passato prossimo = one trip. Habit = imperfect."
      ],
      "prove": {
        "choices": [
          "We used to go by bus every summer",
          "We go / we went once"
        ],
        "correct": 0,
        "miss": "Used-to habit."
      }
    },
    {
      "id": "l4-13",
      "level": 4,
      "region": "Alberobello",
      "culture": "Trulli camera.",
      "prompt": "Still shooting NOW (tu).",
      "gloss": "right now",
      "person": "tu",
      "captions": [
        "Fai foto ai trulli, non smetti mai",
        "Hai fatto foto ai trulli, non hai smesso mai",
        "Facevi foto ai trulli, non smettevi mai"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = already done. Still shooting — present.",
        "Imperfect = old habit. This is live — present."
      ],
      "prove": {
        "choices": [
          "You’re still taking photos",
          "You already took / you used to take"
        ],
        "correct": 0,
        "miss": "Still shooting."
      }
    },
    {
      "id": "l4-14",
      "level": 4,
      "region": "Bologna",
      "culture": "Portici snack.",
      "prompt": "You JUST grabbed a snack.",
      "gloss": "just finished",
      "person": "noi",
      "captions": [
        "Abbiamo preso qualcosa sotto i portici",
        "Prendiamo qualcosa sotto i portici",
        "Prendevamo qualcosa sotto i portici"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = still ordering. Bag ready — passato prossimo.",
        "Imperfect = old habit. This is today’s grab."
      ],
      "prove": {
        "choices": [
          "We already grabbed a snack",
          "We’re grabbing / we used to grab"
        ],
        "correct": 0,
        "miss": "Already got it."
      }
    },
    {
      "id": "l4-15",
      "level": 4,
      "region": "Braies",
      "culture": "Dawn lake.",
      "prompt": "Paint that dawn SCENE.",
      "gloss": "the scene",
      "person": "lui",
      "captions": [
        "All’alba c’era nebbia e il lago era grigio",
        "All’alba c’è nebbia e il lago è grigio",
        "All’alba c’è stata nebbia e il lago è stato grigio"
      ],
      "correct": 0,
      "why": [
        "",
        "Present is now. Prompt wants remembered dawn — imperfect.",
        "Passato prossimo checklists. Scene = imperfect."
      ],
      "prove": {
        "choices": [
          "There was fog — dawn scene",
          "There’s fog now / fog happened once"
        ],
        "correct": 0,
        "miss": "Dawn scene."
      }
    },
    {
      "id": "l4-16",
      "level": 4,
      "region": "Palermo",
      "culture": "Ballarò surprise.",
      "prompt": "You suddenly SAW a friend. Event.",
      "gloss": "sudden moment",
      "person": "noi",
      "captions": [
        "All’improvviso abbiamo visto Marco a Ballarò",
        "All’improvviso vediamo Marco a Ballarò",
        "All’improvviso vedevamo Marco a Ballarò"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = live call. Finished surprise = passato prossimo.",
        "Imperfect = ongoing. Surprise already hit."
      ],
      "prove": {
        "choices": [
          "We suddenly saw Marco",
          "We see / we were seeing Marco"
        ],
        "correct": 0,
        "miss": "Surprise done."
      }
    },
    {
      "id": "l4-17",
      "level": 4,
      "region": "Torino",
      "culture": "Late chocolate walk.",
      "prompt": "How YOU felt that night.",
      "gloss": "the scene",
      "person": "io",
      "captions": [
        "Era tardi ma volevo ancora un gianduiotto",
        "È tardi ma voglio ancora un gianduiotto",
        "È stato tardi ma ho voluto ancora un gianduiotto"
      ],
      "correct": 0,
      "why": [
        "",
        "Present is tonight. Prompt wants that night’s feeling — imperfect.",
        "Passato prossimo punches one decision. Mood = imperfect."
      ],
      "prove": {
        "choices": [
          "It was late but I still wanted chocolate",
          "It’s late now / I wanted once"
        ],
        "correct": 0,
        "miss": "That night’s mood."
      }
    },
    {
      "id": "l4-18",
      "level": 4,
      "region": "Sperlonga",
      "culture": "Gelato flavors.",
      "prompt": "Still choosing LIVE (lei).",
      "gloss": "still deciding",
      "person": "lei",
      "captions": [
        "Sofia sceglie il gusto sulla spiaggia…",
        "Sofia ha scelto il gusto sulla spiaggia…",
        "Sofia sceglieva il gusto sulla spiaggia…"
      ],
      "correct": 0,
      "why": [
        "",
        "Passato prossimo = already picked. Still deciding — present.",
        "Imperfect = was choosing. She’s choosing now — present."
      ],
      "prove": {
        "choices": [
          "Sofia is still choosing",
          "She already chose / she was choosing"
        ],
        "correct": 0,
        "miss": "Still deciding."
      }
    },
    {
      "id": "l4-19",
      "level": 4,
      "region": "Chioggia",
      "culture": "Late lagoon bus.",
      "prompt": "The bus finally SHOWED UP.",
      "gloss": "sudden moment",
      "person": "lui",
      "captions": [
        "Alla fine il bus è arrivato in ritardo",
        "Alla fine il bus arriva in ritardo",
        "Alla fine il bus arrivava in ritardo"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = arriving. Finally showed = passato prossimo.",
        "Imperfect = was arriving. Done — passato prossimo."
      ],
      "prove": {
        "choices": [
          "The bus finally arrived late",
          "It’s arriving / it was arriving"
        ],
        "correct": 0,
        "miss": "Finally = passato."
      }
    },
    {
      "id": "l4-20",
      "level": 4,
      "region": "Ravenna",
      "culture": "Piazza snack habit.",
      "prompt": "How afternoons USED TO end.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Dopo i mosaici mangiavamo sempre in piazza",
        "Dopo i mosaici mangiamo sempre in piazza",
        "Dopo i mosaici abbiamo mangiato in piazza"
      ],
      "correct": 0,
      "why": [
        "",
        "Present is today. Used-to = imperfect.",
        "Passato prossimo = one snack. Habit = imperfect."
      ],
      "prove": {
        "choices": [
          "We used to eat in the piazza after",
          "We eat / we ate once"
        ],
        "correct": 0,
        "miss": "Used-to habit."
      }
    },
    {
      "id": "l4-21",
      "level": 4,
      "region": "Capri",
      "culture": "Last photo dump.",
      "prompt": "You JUST finished the photo dump.",
      "gloss": "just finished",
      "person": "io",
      "captions": [
        "Ho fatto tutte le foto — ora basta",
        "Faccio tutte le foto — ora basta",
        "Facevo tutte le foto — ora basta"
      ],
      "correct": 0,
      "why": [
        "",
        "Present = still shooting. You’re done — passato prossimo.",
        "Imperfect = old habit. Today’s dump is finished."
      ],
      "prove": {
        "choices": [
          "I already took all the photos",
          "I’m taking / I used to take"
        ],
        "correct": 0,
        "miss": "Dump done."
      }
    },
    {
      "id": "l4-22",
      "level": 4,
      "region": "Bacoli",
      "culture": "Golfo goodbye.",
      "prompt": "How evenings USED TO feel on this same spot.",
      "gloss": "used to",
      "person": "noi",
      "captions": [
        "Qui la sera eravamo sempre in silenzio a guardare il golfo",
        "Qui la sera siamo sempre in silenzio a guardare il golfo",
        "Qui la sera siamo stati in silenzio a guardare il golfo"
      ],
      "correct": 0,
      "why": [
        "",
        "Present is tonight. Used-to silence = imperfect.",
        "Passato prossimo = one evening. Habit = imperfect."
      ],
      "prove": {
        "choices": [
          "We used to sit quiet looking at the gulf",
          "We sit quiet now / we sat quiet once"
        ],
        "correct": 0,
        "miss": "Used-to evenings."
      }
    }
  ]
};
