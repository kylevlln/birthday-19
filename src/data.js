export const config = {
  name: "Spencer",
  nickname: "Spence",
  age: 19,
  birthdayDate: "1999-09-25",
  currency: "₱",
  payVia: "GCash",
  // TODO: replace with Spencer's real GCash number when ready
  accountNumber: "09000000000",
  payNote: "Send me a heads-up so I can say thank you!",
}

export const top = {
  title: "The Big One",
  kicker: "MY GRIND SETUP · 2ND-HAND FRIENDLY",
  items: [
    {
      title: "Corsair CX650 PSU",
      price: 3300,
      img: "products/corsair-cx650.jpg",
      note: "Brand-new usually runs higher — 2nd hand is totally fine, I just need it loud and reliable.",
    },
    {
      title: "RX 6600 (or RTX 3060)",
      price: 9800,
      img: "products/rx6600.jpg",
      note: "Listed at 2nd-hand price. An RTX 3060 works too and costs a little more (~₱11,500).",
    },
  ],
  blurb:
    "The main build for the sem. GPU can be 2nd hand to keep it kind to the budget — anything helps me finish this PC.",
}

export const categories = [
  {
    id: "pants",
    title: "Pants",
    blurb:
      "I'm down to the last two pairs that pass the school uniform policy — these help me show up comfy and presentable.",
    items: [
      {
        title: "Denim Shorts",
        price: 300,
        img: "products/denim-shorts.jpg",
        note: "Straight-leg knee-length — the everyday summer pair.",
      },
      {
        title: "Quick-Dry Sports Pants",
        price: 430,
        img: "products/quickdry-pants.jpg",
        note: "3D-printed quick-dry, breathable — good for commute and gym.",
      },
    ],
  },
  {
    id: "shoes",
    title: "Shoes",
    blurb:
      "Badly need. My pair's on its last legs and I live on my feet between home, commute, and school.",
    items: [
      {
        title: "New Balance 530",
        price: 500,
        img: "products/nb530.jpg",
        note: "The classic white/silver — goes with everything.",
      },
      {
        title: "Nike P6000",
        price: 900,
        img: "products/p6000.jpg",
        note: "Lightweight runner that looks tougher than its price.",
      },
    ],
  },
  {
    id: "shirts",
    title: "Shirt",
    blurb:
      "Street Kiddos boxy cropped tees — just want both colors to rotate through the week.",
    items: [
      {
        title: "Boxy Cropped Tee · Black",
        price: 200,
        img: "products/tee-black.jpg",
        note: "One black, one white — two fits, zero thinking.",
      },
      {
        title: "Boxy Cropped Tee · White",
        price: 200,
        img: "products/tee-white.jpg",
        note: "One black, one white — two fits, zero thinking.",
      },
    ],
  },
]

export const grades = [
  {
    sem: "1st Year · Sem 1",
    gwa: "1.55",
    rows: [
      ["Purposive Communication", "1.00"],
      ["Understanding the Self", "1.00"],
      ["Computer Programming 1", "1.75"],
      ["Intro to Computing (IT Fundamentals)", "1.50"],
      ["Mathematics in the Modern World", "2.00"],
      ["NSTP 1 (CWTS)", "1.00"],
      ["PATHFit 1: Movement Competency", "1.75"],
    ],
  },
  {
    sem: "1st Year · Sem 2",
    gwa: "1.61",
    rows: [
      ["Art Appreciation", "2.00"],
      ["The Contemporary World", "1.50"],
      ["Living in the IT Era", "1.50"],
      ["Discrete Structures", "2.75"],
      ["Computer Programming 2", "1.50"],
      ["Human Computer Interaction 1", "1.25"],
      ["NSTP 2 (CWTS)", "1.00"],
      ["PATHFit 2: Exercise-Based Fitness", "1.25"],
    ],
  },
  {
    sem: "2nd Year · Sem 1",
    gwa: "prelims",
    rows: [
      ["Science, Technology & Society", "95.4"],
      ["Life and Works of Rizal", "93.2"],
      ["Data Structures & Algorithms", "93.8"],
      ["IT Project Management", "95.2"],
      ["Networking 1", "92.0"],
      ["PATHFit 3: Individual & Dual Sports", "95.4"],
    ],
  },
]