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
      image: "https://data.aoe4world.com/images/units/lancer-3.png",
    },
    camelrider: {
      name: "Camel Rider",
      image: "https://data.aoe4world.com/images/units/camel-rider-3.png",
    },
    horseman: {
      name: "Horse Rider",
      image: "https://data.aoe4world.com/images/units/horseman-1.png",
    },
    camellancer: {
      name: "Camel Lancer",
      image: "https://data.aoe4world.com/images/units/camel-lancer-3.png",
    },
    cataphract: {
      name: "Cataphract",
      image: "https://data.aoe4world.com/images/units/cataphract-3.png",
    },
    sipahi: {
      name: "Sipahi",
      image: "https://data.aoe4world.com/images/units/sipahi-4.png",
    },
    keshik: {
      name: "Keshik",
      image: "https://data.aoe4world.com/images/units/keshik-2.png",
    },
    royalknight: {
      name: "Royal Knight",
      image: "https://data.aoe4world.com/images/units/royal-knight-2.png",
    },
    firelancer: {
      name: "Fire Lancer",
      image: "https://data.aoe4world.com/images/units/firelancer-3.png",
    },
    ghaziraider: {
      name: "Ghaziraider",
      image: "https://data.aoe4world.com/images/units/ghazi-raider-2.png",
    },
    king: {
      name: "King",
      image: "https://data.aoe4world.com/images/units/king-2.png",
    },
    knight: {
      name: "Knight",
      image: "https://data.aoe4world.com/images/units/knight-1.png",
    },
    mountedsamurai: {
      name: "Mounted Samurai",
      image: "https://data.aoe4world.com/images/units/mounted-samurai-3.png",
    },
    umabannerman: {
      name: "Uma Bannerman",
      image: "https://data.aoe4world.com/images/units/uma-bannerman-2.png",
    },
    jeannesrider: {
      name: "Jeanne's Rider",
      image: "https://data.aoe4world.com/images/units/jeannes-rider-1.png",
    },
    sofa: {
      name: "Sofa",
      image: "https://data.aoe4world.com/images/units/sofa-2.png",
    },
    warriorscout: {
      name: "Warrior Scout",
      image: "https://data.aoe4world.com/images/units/warrior-scout-4.png",
    },
    khaganateeliteknight: {
      name: "Khaganate Elite Knight",
      image: "https://data.aoe4world.com/images/units/knight-1.png",
    },
    khaganatewarriormonk: {
      name: "Khaganate Warrior Monk",
      image: "https://data.aoe4world.com/images/units/warrior-monk-1.png",
    },
    gildedknight: {
      name: "Gilded Knight",
      image: "https://data.aoe4world.com/images/units/gilded-knight-1.png",
    },
    gildedhorseman: {
      name: "Gilded Horseman",
      image: "https://data.aoe4world.com/images/units/gilded-horseman-1.png",
    },
    warriormonk: {
      name: "Warrior Monk",
      image: "https://data.aoe4world.com/images/units/warrior-monk-1.png",
    },
    imperialguard: {
      name: "Imperial Guard",
      image: "https://data.aoe4world.com/images/units/imperial-guard-1.png",
    },
    yuanraider: {
      name: "Yuan Raider",
      image: "https://data.aoe4world.com/images/units/yuan-raider-1.png",
    },
    warelephant: {
      name: "War Elephant",
      image: "https://data.aoe4world.com/images/units/war-elephant-3.png",
    },
    towerelephant: {
      name: "Tower Elephant",
      image: "https://data.aoe4world.com/images/units/tower-elephant-3.png",
    },
    jeannedarcknight: {
      name: "Jeanne Dar'c Knight",
      image: "https://data.aoe4world.com/images/units/jeanne-darc-knight-1.png",
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
      image: "https://data.aoe4world.com/images/units/gilded-spearman-1.png",
    },
    crossbowman: {
      name: "Crossbowman",
      image: "https://data.aoe4world.com/images/units/crossbowman-2.png",
    },
    handcannoneer: {
      name: "Hand Cannoneer",
      image: "https://data.aoe4world.com/images/units/handcannoneer-1.png",
    },
    musofadigunner: {
      name: "Musofadi Gunner",
      image: "https://data.aoe4world.com/images/units/musofadi-gunner-4.png",
    },
    janissary: {
      name: "Janissary",
      image: "https://data.aoe4world.com/images/units/janissary-3.png",
    },
    musofadiwarrior: {
      name: "Musofadi Warrior",
      image: "https://data.aoe4world.com/images/units/musofadi-warrior-3.png",
    },
    javelinthrower: {
      name: "Javelin Thrower",
      image: "https://data.aoe4world.com/images/units/javelin-thrower-2.png",
    },
    streltsy: {
      name: "Streltsy",
      image: "https://data.aoe4world.com/images/units/streltsy-4.png",
    },
    palaceguard: {
      name: "Palace Guard",
      image: "https://data.aoe4world.com/images/units/palace-guard-2.png",
    },
    bedouinswordsman: {
      name: "Bedouin Swordsman",
      image: "https://data.aoe4world.com/images/units/bedouin-swordsman-1.png",
    },
    arbalétrier: {
      name: "Arbalétrier",
      image: "https://data.aoe4world.com/images/units/arbaletrier-3.png",
    },
    onnabugeisha: {
      name: "Onna Bugeisha",
      image: "https://data.aoe4world.com/images/units/onna-bugeisha-2.png",
    },
    handcannonashigaru: {
      name: "Hand Cannon Ashigaru",
      image:
        "https://data.aoe4world.com/images/units/handcannon-ashigaru-4.png",
    },
    ozutsu: {
      name: "Ozutsu",
      image: "https://data.aoe4world.com/images/units/ozutsu-4.png",
    },
    dragonhandcannoneer: {
      name: "Dragon Hand Cannoneer",
      image:
        "https://data.aoe4world.com/images/units/dragon-handcannoneer-1.png",
    },
    gildedhandcannoneer: {
      name: "Gilded Hand Cannoneer",
      image:
        "https://data.aoe4world.com/images/units/gilded-handcannoneer-4.png",
    },
    gildedcrossbowman: {
      name: "Gilded Crossbowman",
      image: "https://data.aoe4world.com/images/units/gilded-crossbowman-1.png",
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
      image: "https://data.aoe4world.com/images/units/varangian-guard-3.png",
    },
    wynguardranger: {
      name: "Wynguard Ranger",
      image: "https://data.aoe4world.com/images/units/wynguard-ranger-4.png",
    },
    wynguardfootman: {
      name: "Wynguard Footman",
      image: "https://data.aoe4world.com/images/units/wynguard-footman-4.png",
    },
    landsknecht: {
      name: "Landsknecht",
      image: "https://data.aoe4world.com/images/units/landsknecht-4.png",
    },
    yumiashigaru: {
      name: "Yumi Ashigaru",
      image: "https://data.aoe4world.com/images/units/yumi-ashigaru-3.png",
    },
    samurai: {
      name: "Samurai",
      image: "https://data.aoe4world.com/images/units/samurai-1.png",
    },
    yumibannerman: {
      name: "Yumi Bannerman",
      image: "https://data.aoe4world.com/images/units/yumi-bannerman-2.png",
    },
    katanabannerman: {
      name: "Katana Bannerman",
      image: "https://data.aoe4world.com/images/units/katana-bannerman-2.png",
    },
    jeannedarchunter: {
      name: "Jeanne dar'c Hunter",
      image: "https://data.aoe4world.com/images/units/jeanne-darc-hunter-1.png",
    },
    jeannedarcwomanatarms: {
      name: "Jeanne dar'c Woman at Arms",
      image:
        "https://data.aoe4world.com/images/units/jeanne-darc-woman-at-arms-1.png",
    },
    jeannedarcmountedarcher: {
      name: "Jeanne dar'c Mounted Archer",
      image:
        "https://data.aoe4world.com/images/units/jeanne-darc-mounted-archer-1.png",
    },
    jeanneschampion: {
      name: "Jeanne's Champion",
      image: "https://data.aoe4world.com/images/units/jeannes-champion-1.png",
    },
    mangudai: {
      name: "Mangudai",
      image: "https://data.aoe4world.com/images/units/mangudai-1.png",
    },
    khaganateelitehorsearcher: {
      name: "Khaganate Elite Horse Archer",
      image: "https://data.aoe4world.com/images/units/horse-archer-1.png",
    },
    gildedlandsknecht: {
      name: "Gilded Landsknecht",
      image: "https://data.aoe4world.com/images/units/gilded-landsknecht-1.png",
    },
    gildedarcher: {
      name: "Gilded Archer",
      image: "https://data.aoe4world.com/images/units/gilded-archer-1.png",
    },
    gildedmanatarms: {
      name: "Gilded Man at Arms",
      image: "https://data.aoe4world.com/images/units/gilded-man-at-arms-1.png",
    },
    zhugenu: {
      name: "Zhuge Nu",
      image: "https://data.aoe4world.com/images/units/zhuge-nu-1.png",
    },
    bedouinskirmisher: {
      name: "Bedouin Skirmisher",
      image: "https://data.aoe4world.com/images/units/bedouin-skirmisher-1.png",
    },
    camelarcher: {
      name: "Camel Archer",
      image: "https://data.aoe4world.com/images/units/camel-archer-2.png",
    },
    desertraider: {
      name: "Desert Raider",
      image: "https://data.aoe4world.com/images/units/desert-raider-1.png",
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
          "sipahi",
          "keshik",
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
          "gildedhorseman",
          "warriormonk",
          "imperialguard",
          "yuanraider",
          "warelephant",
          "towerelephant",
        ],
      },
      bettercounter: {
        counterlevel: "lightgreen",
        counters: [
          "royalknight",
          "khaganateeliteknight",
          "cataphract",
          "gildedknight",
          "jeannedarcknight",
        ],
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
