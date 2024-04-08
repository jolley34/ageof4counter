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

export interface CounterTypes {
  name: string;
  image: string;
}

export interface CounterUnit {
  spearman: CounterTypes;
  manatarms: CounterTypes;
  lancer: CounterTypes;
  camelrider: CounterTypes;
  horseman: CounterTypes;
  camellancer: CounterTypes;
  cataphract: CounterTypes;
  sipahi: CounterTypes;
  keshik: CounterTypes;
  royalknight: CounterTypes;
  firelancer: CounterTypes;
  ghaziraider: CounterTypes;
  king: CounterTypes;
  knight: CounterTypes;
  mountedsamurai: CounterTypes;
  umabannerman: CounterTypes;
  jeannesrider: CounterTypes;
  sofa: CounterTypes;
  warriorscout: CounterTypes;
  khaganateeliteknight: CounterTypes;
  khaganatewarriormonk: CounterTypes;
  gildedknight: CounterTypes;
  gildedhorseman: CounterTypes;
  warriormonk: CounterTypes;
  imperialguard: CounterTypes;
  yuanraider: CounterTypes;
  warelephant: CounterTypes;
  towerelephant: CounterTypes;
  jeannedarcknight: CounterTypes;
  limitanei: CounterTypes;
  donso: CounterTypes;
  gildedspearman: CounterTypes;
  crossbowman: CounterTypes;
  handcannoneer: CounterTypes;
  musofadigunner: CounterTypes;
  janissary: CounterTypes;
  musofadiwarrior: CounterTypes;
  javelinthrower: CounterTypes;
  streltsy: CounterTypes;
  palaceguard: CounterTypes;
  bedouinswordsman: CounterTypes;
  arbalétrier: CounterTypes;
  onnabugeisha: CounterTypes;
  handcannonashigaru: CounterTypes;
  ozutsu: CounterTypes;
  dragonhandcannoneer: CounterTypes;
  gildedhandcannoneer: CounterTypes;
  gildedcrossbowman: CounterTypes;
  militia: CounterTypes;
  grenadier: CounterTypes;
  archer: CounterTypes;
  ghulam: CounterTypes;
  varangianguard: CounterTypes;
  wynguardranger: CounterTypes;
  wynguardfootman: CounterTypes;
  landsknecht: CounterTypes;
  yumiashigaru: CounterTypes;
  samurai: CounterTypes;
  yumibannerman: CounterTypes;
  katanabannerman: CounterTypes;
  jeannedarchunter: CounterTypes;
  jeannedarcwomanatarms: CounterTypes;
  jeannedarcmountedarcher: CounterTypes;
  jeanneschampion: CounterTypes;
  mangudai: CounterTypes;
  khaganateelitehorsearcher: CounterTypes;
  gildedlandsknecht: CounterTypes;
  gildedarcher: CounterTypes;
  gildedmanatarms: CounterTypes;
  zhugenu: CounterTypes;
  bedouinskirmisher: CounterTypes;
  camelarcher: CounterTypes;
  desertraider: CounterTypes;
  [key: string]: any;
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

export const CounterUnits: CounterUnit[] = [
  {
    spearman: {
      name: "Spearman",
      image: "https://data.aoe4world.com/images/units/spearman-1.png",
    },
    manatarms: {
      name: "Man at Arms",
      image: "https://data.aoe4world.com/images/units/man-at-arms-1.png",
    },
    lancer: {
      name: "Lancer",
      image: "https://data.aoe4world.com/images/units/lancer-1.png",
    },
    camelrider: {
      name: "Camel Rider",
      image: "https://data.aoe4world.com/images/units/camelrider-1.png",
    },
    horseman: {
      name: "Horse Rider",
      image: "https://data.aoe4world.com/images/units/horserider-1.png",
    },
    camellancer: {
      name: "Camel Lancer",
      image: "https://data.aoe4world.com/images/units/camellancer-1.png",
    },
    cataphract: {
      name: "Camel Lancer",
      image: "https://data.aoe4world.com/images/units/cataphract-1.png",
    },
    sipahi: {
      name: "Sipahi",
      image: "https://data.aoe4world.com/images/units/sipahi-1.png",
    },
    keshik: {
      name: "Keshik",
      image: "https://data.aoe4world.com/images/units/keshik-1.png",
    },
    royalknight: {
      name: "Royal Knight",
      image: "https://data.aoe4world.com/images/units/royalknight-1.png",
    },
    firelancer: {
      name: "Fire Lancer",
      image: "https://data.aoe4world.com/images/units/firelancer-1.png",
    },
    ghaziraider: {
      name: "Ghaziraider",
      image: "https://data.aoe4world.com/images/units/ghaziraider-1.png",
    },
    king: {
      name: "King",
      image: "https://data.aoe4world.com/images/units/king-1.png",
    },
    knight: {
      name: "Knight",
      image: "https://data.aoe4world.com/images/units/knight-1.png",
    },
    mountedsamurai: {
      name: "Mounted Samurai",
      image: "https://data.aoe4world.com/images/units/mountedsamurai-1.png",
    },
    umabannerman: {
      name: "Uma Bannerman",
      image: "https://data.aoe4world.com/images/units/umabannerman-1.png",
    },
    jeannesrider: {
      name: "Jeanne's Rider",
      image: "https://data.aoe4world.com/images/units/jeannesrider-1.png",
    },
    sofa: {
      name: "Sofa",
      image: "https://data.aoe4world.com/images/units/sofa-1.png",
    },
    warriorscout: {
      name: "Warrior Scout",
      image: "https://data.aoe4world.com/images/units/warriorscout-1.png",
    },
    khaganateeliteknight: {
      name: "Khaganate Elite Knight",
      image:
        "https://data.aoe4world.com/images/units/khaganateeliteknight-1.png",
    },
    khaganatewarriormonk: {
      name: "Khaganate Warrior Monk",
      image:
        "https://data.aoe4world.com/images/units/khaganatewarriormonk-1.png",
    },
    gildedknight: {
      name: "Gilded Knight",
      image: "https://data.aoe4world.com/images/units/gildedknight-1.png",
    },
    gildedhorseman: {
      name: "Gilded Horseman",
      image: "https://data.aoe4world.com/images/units/gildedhorseman-1.png",
    },
    warriormonk: {
      name: "Warrior Monk",
      image: "https://data.aoe4world.com/images/units/warriormonk-1.png",
    },
    imperialguard: {
      name: "Imperial Guard",
      image: "https://data.aoe4world.com/images/units/imperialguard-1.png",
    },
    yuanraider: {
      name: "Yuan Raider",
      image: "https://data.aoe4world.com/images/units/yuanraider-1.png",
    },
    warelephant: {
      name: "War Elephant",
      image: "https://data.aoe4world.com/images/units/warelephant-1.png",
    },
    towerelephant: {
      name: "Tower Elephant",
      image: "https://data.aoe4world.com/images/units/towerelephant-1.png",
    },
    jeannedarcknight: {
      name: "Jeanne Dar'c Knight",
      image: "https://data.aoe4world.com/images/units/jeannedarcknight-1.png",
    },
    limitanei: {
      name: "Limitanei",
      image: "https://data.aoe4world.com/images/units/limitanei-1.png",
    },
    donso: {
      name: "Donso",
      image: "https://data.aoe4world.com/images/units/donso-1.png",
    },
    gildedspearman: {
      name: "Glided Spearman",
      image: "https://data.aoe4world.com/images/units/gildedspearman-1.png",
    },
    crossbowman: {
      name: "Crossbowman",
      image: "https://data.aoe4world.com/images/units/crossbowman-1.png",
    },
    handcannoneer: {
      name: "Hand Cannoneer",
      image: "https://data.aoe4world.com/images/units/handcannoneer-1.png",
    },
    musofadigunner: {
      name: "Musofadi Gunner",
      image: "https://data.aoe4world.com/images/units/musofadigunner-1.png",
    },
    janissary: {
      name: "Janissary",
      image: "https://data.aoe4world.com/images/units/janissary-1.png",
    },
    musofadiwarrior: {
      name: "Musofadi Warrior",
      image: "https://data.aoe4world.com/images/units/musofadiwarrior-1.png",
    },
    javelinthrower: {
      name: "Javelin Thrower",
      image: "https://data.aoe4world.com/images/units/javelinthrower-1.png",
    },
    streltsy: {
      name: "Streltsy",
      image: "https://data.aoe4world.com/images/units/streltsy-1.png",
    },
    palaceguard: {
      name: "Palace Guard",
      image: "https://data.aoe4world.com/images/units/palaceguard-1.png",
    },
    bedouinswordsman: {
      name: "Bedouin Swordsman",
      image: "https://data.aoe4world.com/images/units/bedouinswordsman-1.png",
    },
    arbalétrier: {
      name: "Arbalétrier",
      image: "https://data.aoe4world.com/images/units/arbalétrier-1.png",
    },
    onnabugeisha: {
      name: "Onna Bugeisha",
      image: "https://data.aoe4world.com/images/units/onnabugeisha-1.png",
    },
    handcannonashigaru: {
      name: "Hand Cannon Ashigaru",
      image: "https://data.aoe4world.com/images/units/handcannonashigaru-1.png",
    },
    ozutsu: {
      name: "Ozutsu",
      image: "https://data.aoe4world.com/images/units/ozutsu-1.png",
    },
    dragonhandcannoneer: {
      name: "Dragon Hand Cannoneer",
      image:
        "https://data.aoe4world.com/images/units/dragonhandcannoneer-1.png",
    },
    gildedhandcannoneer: {
      name: "Gilded Hand Cannoneer",
      image:
        "https://data.aoe4world.com/images/units/gildedhandcannoneer-1.png",
    },
    gildedcrossbowman: {
      name: "Gilded Crossbowman",
      image: "https://data.aoe4world.com/images/units/gildedcrossbowman-1.png",
    },
    militia: {
      name: "Militia",
      image: "https://data.aoe4world.com/images/units/militia-1.png",
    },
    grenadier: {
      name: "Grenadier",
      image: "https://data.aoe4world.com/images/units/grenadier-1.png",
    },
    archer: {
      name: "Archer",
      image: "https://data.aoe4world.com/images/units/archer-1.png",
    },
    ghulam: {
      name: "Ghulam",
      image: "https://data.aoe4world.com/images/units/ghulam-1.png",
    },
    varangianguard: {
      name: "Varangian Guard",
      image: "https://data.aoe4world.com/images/units/varangianguard-1.png",
    },
    wynguardranger: {
      name: "Wynguard Ranger",
      image: "https://data.aoe4world.com/images/units/wynguardranger-1.png",
    },
    wynguardfootman: {
      name: "Wynguard Footman",
      image: "https://data.aoe4world.com/images/units/wynguardfootman-1.png",
    },
    landsknecht: {
      name: "Landsknecht",
      image: "https://data.aoe4world.com/images/units/landsknecht-1.png",
    },
    yumiashigaru: {
      name: "Yumiashigaru",
      image: "https://data.aoe4world.com/images/units/yumiashigaru-1.png",
    },
    samurai: {
      name: "Samurai",
      image: "https://data.aoe4world.com/images/units/samurai-1.png",
    },
    yumibannerman: {
      name: "Yumi Bannerman",
      image: "https://data.aoe4world.com/images/units/yumibannerman-1.png",
    },
    katanabannerman: {
      name: "Katana Bannerman",
      image: "https://data.aoe4world.com/images/units/katanabannerman-1.png",
    },
    jeannedarchunter: {
      name: "Jeanne dar'c Hunter",
      image: "https://data.aoe4world.com/images/units/jeannedarchunter-1.png",
    },
    jeannedarcwomanatarms: {
      name: "Jeanne dar'c Woman at Arms",
      image:
        "https://data.aoe4world.com/images/units/jeannedarcwomanatarms-1.png",
    },
    jeannedarcmountedarcher: {
      name: "Jeanne dar'c Mounted Archer",
      image:
        "https://data.aoe4world.com/images/units/jeannedarcmountedarcher-1.png",
    },
    jeanneschampion: {
      name: "Jeanne's Champion",
      image: "https://data.aoe4world.com/images/units/jeanneschampion-1.png",
    },
    mangudai: {
      name: "Mangudai",
      image: "https://data.aoe4world.com/images/units/mangudai-1.png",
    },
    khaganateelitehorsearcher: {
      name: "Khaganate Elite Horse Archer",
      image:
        "https://data.aoe4world.com/images/units/khaganateelitehorsearcher-1.png",
    },
    gildedlandsknecht: {
      name: "Gilded Landsknecht",
      image: "https://data.aoe4world.com/images/units/gildedlandsknecht-1.png",
    },
    gildedarcher: {
      name: "Gilded Archer",
      image: "https://data.aoe4world.com/images/units/gildedarcher-1.png",
    },
    gildedmanatarms: {
      name: "Gilded Man at Arms",
      image: "https://data.aoe4world.com/images/units/gildedmanatarms-1.png",
    },
    zhugenu: {
      name: "Zhuge Nu",
      image: "https://data.aoe4world.com/images/units/zhugenu-1.png",
    },
    bedouinskirmisher: {
      name: "Bedouin Skirmisher",
      image: "https://data.aoe4world.com/images/units/bedouinskirmisher-1.png",
    },
    camelarcher: {
      name: "Camel Archer",
      image: "https://data.aoe4world.com/images/units/camelarcher-1.png",
    },
    desertraider: {
      name: "Desert Raider",
      image: "https://data.aoe4world.com/images/units/desertraider-1.png",
    },
  },
];

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
