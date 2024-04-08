export interface Civ {
  title: string;
  thumbnail: string;
  slug: string;
  military: {
    barracks: {
      name: string;
      unit: string[];
    };
    archery: {
      name: string;
      unit: string[];
    };
  };
}

export interface Counter {
  counterlevel: string;
  counters: string[];
}

export interface UnitDetails {
  name: string;
  image: string;
  level: string;
  civflags: string[];
  description: string;
  counterDescription: string;
  positive: string[];
  negative: string[];
  hardcounter: Counter;
  bettercounter: Counter;
  evencounter: Counter;
  weakcounter: Counter;
  nocounter: Counter;
}

export interface Unit {
  spearman: UnitDetails;
  manatarms: UnitDetails;
}

export const units: Unit[] = [
  {
    spearman: {
      name: "Spearman",
      image: "https://data.aoe4world.com/images/units/spearman-1.png",
      level: "Level 1",
      civflags: ["./civ-english.jpg"],
      description: "Light Melee Infantry",
      counterDescription: "Infantry best used against mounted units.",
      positive: ["+ Anti-cavalry specialist"],
      negative: ["- Weak against armored infantry", "- Countered by Archers"],
      hardcounter: {
        counterlevel: "green",
        counters: [
          "horseman",
          "lancer",
          "camelrider",
          "camellancer",
          "cataphract",
          "sipahi",
          "keshik",
          "royalknight",
          "firelancer",
          "ghaziraider",
          "king",
          "knight",
          "mountedsamurai",
          "umabannerman",
          "jeannesrider",
          "sofa",
          "warriorscout",
          "khaganatewarriormonk",
          "khaganateeliteknight",
          "gildedknight",
          "gildedhorseman",
          "warriormonk",
          "imperialguard",
          "yuanraider",
          "warelephant",
          "towerelephant",
          "jeannedarcknight",
          "imperialguard",
        ],
      },
      bettercounter: {
        counterlevel: "lightgreen",
        counters: [],
      },
      evencounter: {
        counterlevel: "yellow",
        counters: ["spearman", "limitanei", "donso", "gildedspearman"],
      },
      weakcounter: {
        counterlevel: "orange",
        counters: [
          "crossbowman",
          "handcannoneer",
          "musofadigunner",
          "janissary",
          "musofadiwarrior",
          "javelinthrower",
          "streltsy",
          "palaceguard",
          "bedouinswordsman",
          "arbalétrier",
          "onnabugeisha",
          "handcannonashigaru",
          "ozutsu",
          "dragonhandcannoneer",
          "gildedhandcannoneer",
          "gildedcrossbowman",
          "militia",
          "grenadier",
        ],
      },
      nocounter: {
        counterlevel: "red",
        counters: [
          "archer",
          "ghulam",
          "varangianguard",
          "manatarms",
          "wynguardranger",
          "wynguardfootman",
          "landsknecht",
          "yumiashigaru",
          "samurai",
          "yumibannerman",
          "katanabannerman",
          "jeannedarchunter",
          "jeannedarcwomanatarms",
          "jeannedarcmountedarcher",
          "jeanneschampion",
          "mangudai",
          "khaganateelitehorsearcher",
          "gildedlandsknecht",
          "gildedarcher",
          "gildedmanatarms",
          "zhugenu",
          "bedouinskirmisher",
          "camelarcher",
          "desertraider",
        ],
      },
    },
    manatarms: {
      name: "Man-At-Arms",
      image: "https://data.aoe4world.com/images/units/man-at-arms-1.png",
      level: "Level 1",
      civflags: ["./civ-english.jpg"],
      description: "Heavy Melee Infantry",
      counterDescription: "Tough infantry with good damage.",
      positive: ["+ High armor"],
      negative: [
        "- Slow movement",
        "- Countered by Knights, Lancers, and Crossbowmen",
      ],
      hardcounter: {
        counterlevel: "green",
        counters: [
          "spearman",
          "archer",
          "zhugenu",
          "camelrider",
          "warelephant",
          "javelinthrower",
          "jeannedarchunter",
        ],
      },
      bettercounter: {
        counterlevel: "lightgreen",
        counters: ["horseman"],
      },
      evencounter: {
        counterlevel: "yellow",
        counters: [
          "manatarms",
          "varangianguard",
          "jeannedarcwomanatarms",
          "gildedmanatarms",
          "wynguardfootman",
        ],
      },
      weakcounter: {
        counterlevel: "orange",
        counters: ["towerelephant"],
      },
      nocounter: {
        counterlevel: "red",
        counters: [
          "camellancer",
          "lancer",
          "handcannoneer",
          "streltsy",
          "musofadigunner",
          "gildedhandcannoneer",
          "crossbowman",
          "gildedcrossbowman",
          "landsknecht",
          "gildedlandsknecht",
          "bedouinswordsman",
          "khaganateelitehorsearcher",
          "mangudai",
          "jeannedarcmountedarcher",
          "camelarcher",
          "desertraider",
        ],
      },
    },
  },
];

export const civs: Civ[] = [
  {
    title: "English",
    thumbnail: "/civ-english.jpg",
    slug: "english",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "French",
    thumbnail: "/civ-french.jpg",
    slug: "french",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Abbasid Dynasty",
    thumbnail: "/civ-abbasid-dynasty.jpg",
    slug: "abbasid-dynasty",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Byzantines",
    thumbnail: "/civ-byzantines.jpg",
    slug: "byzantines",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Chinese",
    thumbnail: "/civ-chinese.jpg",
    slug: "chinese",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Delhi Sultanate",
    thumbnail: "/civ-delhi-sultanate.jpg",
    slug: "delhi-sultanate",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Holy Roman Empire",
    thumbnail: "/civ-holy-roman-empire.jpg",
    slug: "holy-roman-empire",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Japanese",
    thumbnail: "/civ-japanese.jpg",
    slug: "japanese",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Malians",
    thumbnail: "/civ-malians.jpg",
    slug: "malians",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Mongols",
    thumbnail: "/civ-mongols.jpg",
    slug: "mongols",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Ottomans",
    thumbnail: "/civ-ottomans.jpg",
    slug: "ottomans",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Rus",
    thumbnail: "/civ-rus.jpg",
    slug: "rus",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Ayyubids",
    thumbnail: "/civ-ayyubids.jpg",
    slug: "ayyubids",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Jeanne d'Arc",
    thumbnail: "/civ-jeanne-darc.jpg",
    slug: "jeanne-darc",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Order of the Dragon",
    thumbnail: "/civ-order-of-the-dragon.jpg",
    slug: "order-of-the-dragon",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
  {
    title: "Zhu Xi's Legacy",
    thumbnail: "/civ-zhu-xis-legacy.jpg",
    slug: "zhu-xis-legacy",
    military: {
      barracks: {
        name: "Barracks",
        unit: [units[0].spearman.image, units[0].manatarms.image],
      },
      archery: {
        name: "Archery Range",
        unit: ["archer"],
      },
    },
  },
];
