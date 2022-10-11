import * as itemIcon from "./icons/itemSeedIcons"
import * as skillIcon from "./icons/skillSeedIcons"

export const forestry = [
  {
    name: "bamboo",
    level: 1,
    exp: 25,
    time: 10.0,
    manpower: 1,
    category: "default",
    icon: skillIcon.bamboo,
    itemsRequired: [],
    itemsRecieved: [{ id: 1, qty: 1 }],
  },
  {
    name: "beech tree",
    level: 10,
    exp: 35,
    time: 10.0,
    manpower: 1,
    category: "default",
    icon: skillIcon.beech,
    itemsRequired: [],
    itemsRecieved: [{ id: 2, qty: 1 }],
  },
  {
    name: "birch tree",
    level: 20,
    exp: 55,
    time: 10.0,
    manpower: 1,
    category: "default",
    icon: skillIcon.birch,
    itemsRequired: [],
    itemsRecieved: [{ id: 3, qty: 1 }],
  },
  {
    name: "oak tree",
    level: 30,
    exp: 68,
    time: 10.0,
    manpower: 1,
    category: "default",
    icon: skillIcon.oak,
    itemsRequired: [],
    itemsRecieved: [{ id: 4, qty: 1 }],
  },
  {
    name: "palm tree",
    level: 40,
    exp: 100,
    time: 10.0,
    manpower: 1,
    category: "default",
    icon: skillIcon.palm,
    itemsRequired: [],
    itemsRecieved: [{ id: 5, qty: 1 }],
  },
  {
    name: "willow tree",
    level: 50,
    exp: 125,
    time: 10.0,
    manpower: 1,
    category: "default",
    icon: skillIcon.willow,
    itemsRequired: [],
    itemsRecieved: [{ id: 6, qty: 1 }],
  },
  {
    name: "redwood tree",
    level: 60,
    exp: 175,
    time: 10.0,
    manpower: 1,
    category: "default",
    icon: skillIcon.redwood,
    itemsRequired: [],
    itemsRecieved: [{ id: 7, qty: 1 }],
  },
  {
    name: "undead tree",
    level: 70,
    exp: 220,
    time: 10.0,
    manpower: 1,
    category: "default",
    icon: skillIcon.undead,
    itemsRequired: [],
    itemsRecieved: [{ id: 8, qty: 1 }],
  },
  {
    name: "tree of life",
    level: 80,
    exp: 300,
    time: 10.0,
    manpower: 1,
    category: "default",
    icon: skillIcon.holy,
    itemsRequired: [],
    itemsRecieved: [{ id: 9, qty: 1 }],
  },
  {
    name: "demonic tree",
    level: 90,
    exp: 380,
    time: 10.0,
    manpower: 1,
    category: "default",
    icon: skillIcon.demonic,
    itemsRequired: [],
    itemsRecieved: [{ id: 10, qty: 1 }],
  },
  {
    name: "god tree",
    level: 99,
    exp: 0,
    time: 10.0,
    manpower: 99,
    category: "default",
    icon: skillIcon.god,
    itemsRequired: [],
    itemsRecieved: [{ id: 11, qty: 1 }],
  },
]

export const mining = [
  {
    name: "stone",
    level: 1,
    exp: 25,
    time: 10.0,
    manpower: 5,
    category: "default",
    icon: skillIcon.stone,
    itemsRequired: [],
    itemsRecieved: [{ id: 12, qty: 1 }],
  },
  {
    name: "copper",
    level: 10,
    exp: 100,
    time: 10.0,
    manpower: 5,
    category: "default",
    icon: skillIcon.copper,
    itemsRequired: [],
    itemsRecieved: [
      { id: 12, qty: 1 },
      { id: 13, qty: 1 },
    ],
  },
  {
    name: "tin",
    level: 10,
    exp: 100,
    time: 10.0,
    manpower: 5,
    category: "default",
    icon: skillIcon.tin,
    itemsRequired: [],
    itemsRecieved: [
      { id: 12, qty: 1 },
      { id: 14, qty: 1 },
    ],
  },
  {
    name: "iron",
    level: 20,
    exp: 200,
    time: 10.0,
    manpower: 5,
    category: "default",
    icon: skillIcon.iron,
    itemsRequired: [],
    itemsRecieved: [
      { id: 12, qty: 2 },
      { id: 15, qty: 1 },
    ],
  },
  {
    name: "coal",
    level: 30,
    exp: 300,
    time: 10.0,
    manpower: 5,
    category: "default",
    icon: skillIcon.coal,
    itemsRequired: [],
    itemsRecieved: [
      { id: 12, qty: 3 },
      { id: 16, qty: 1 },
    ],
  },
  {
    name: "silver",
    level: 30,
    exp: 400,
    time: 10.0,
    manpower: 5,
    category: "default",
    icon: skillIcon.silver,
    itemsRequired: [],
    itemsRecieved: [
      { id: 12, qty: 4 },
      { id: 17, qty: 1 },
    ],
  },
  {
    name: "gold",
    level: 50,
    exp: 400,
    time: 10.0,
    manpower: 5,
    category: "default",
    icon: skillIcon.gold,
    itemsRequired: [],
    itemsRecieved: [
      { id: 12, qty: 4 },
      { id: 18, qty: 1 },
    ],
  },
  {
    name: "mithril",
    level: 40,
    exp: 500,
    time: 10.0,
    manpower: 5,
    category: "default",
    icon: skillIcon.mithril,
    itemsRequired: [],
    itemsRecieved: [
      { id: 12, qty: 10 },
      { id: 19, qty: 1 },
    ],
  },
]

export const scholar = [
  {
    name: "experimentation I",
    level: 1,
    exp: 5,
    time: 10.0,
    manpower: 1,
    category: "default",
    icon: itemIcon.researchRed,
    itemsRequired: [],
    itemsRecieved: [
      {
        id: 998,
        qty: 1,
      },
    ],
  },
  {
    name: "experimentation II",
    level: 1,
    exp: 25,
    time: 10.0,
    manpower: 2,
    category: "default",
    icon: itemIcon.researchGreen,
    itemsRequired: [],
    itemsRecieved: [
      {
        id: 997,
        qty: 1,
      },
    ],
  },
  {
    name: "experimentation III",
    level: 1,
    exp: 25,
    time: 10.0,
    manpower: 3,
    category: "default",
    icon: itemIcon.researchBlue,
    itemsRequired: [],
    itemsRecieved: [
      {
        id: 996,
        qty: 1,
      },
    ],
  },
  {
    name: "experimentation IV",
    level: 1,
    exp: 25,
    time: 10.0,
    manpower: 4,
    category: "default",
    icon: itemIcon.researchYellow,
    itemsRequired: [],
    itemsRecieved: [
      {
        id: 995,
        qty: 1,
      },
    ],
  },
  {
    name: "experimentation V",
    level: 1,
    exp: 25,
    time: 10.0,
    manpower: 5,
    category: "default",
    icon: itemIcon.researchPurple,
    itemsRequired: [],
    itemsRecieved: [
      {
        id: 994,
        qty: 1,
      },
    ],
  },
]
export const metalwork = [
  {
    name: "stone block",
    level: 1,
    exp: 5,
    time: 10.0,
    manpower: 1,
    category: "resource",
    icon: skillIcon.stoneBrick,
    itemsRequired: [{ id: 12, qty: 5 }],
    itemsRecieved: [
      {
        id: 25,
        qty: 1,
      },
    ],
  },
  {
    name: "bronze bar",
    level: 10,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "resource",
    icon: skillIcon.barBronze,
    itemsRequired: [
      { id: 13, qty: 1 },
      { id: 14, qty: 1 },
    ],
    itemsRecieved: [
      {
        id: 26,
        qty: 1,
      },
    ],
  },
  {
    name: "iron bar",
    level: 20,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "resource",
    icon: skillIcon.barIron,
    itemsRequired: [{ id: 15, qty: 1 }],
    itemsRecieved: [
      {
        id: 27,
        qty: 1,
      },
    ],
  },
  {
    name: "steel bar",
    level: 30,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "resource",
    icon: skillIcon.barSteel,
    itemsRequired: [
      { id: 15, qty: 1 },
      { id: 16, qty: 2 },
    ],
    itemsRecieved: [
      {
        id: 28,
        qty: 1,
      },
    ],
  },
  {
    name: "silver bar",
    level: 30,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "resource",
    icon: skillIcon.barSteel,
    itemsRequired: [{ id: 17, qty: 1 }],
    itemsRecieved: [
      {
        id: 29,
        qty: 1,
      },
    ],
  },
  {
    name: "gold bar",
    level: 50,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "resource",
    icon: skillIcon.barGold,
    itemsRequired: [{ id: 18, qty: 1 }],
    itemsRecieved: [
      {
        id: 30,
        qty: 1,
      },
    ],
  },
  {
    name: "mithril bar",
    level: 40,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "resource",
    icon: skillIcon.barMithril,
    itemsRequired: [
      { id: 19, qty: 1 },
      { id: 16, qty: 2 },
    ],
    itemsRecieved: [
      {
        id: 31,
        qty: 1,
      },
    ],
  },
  {
    name: "bronze dagger",
    level: 10,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "1",
    icon: itemIcon.daggerBronze,
    itemsRequired: [{ id: 26, qty: 1 }],
    itemsRecieved: [
      {
        id: 32,
        qty: 1,
      },
    ],
  },
  {
    name: "bronze helmet",
    level: 11,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "1",
    icon: itemIcon.armourBronzeHelmet,
    itemsRequired: [{ id: 26, qty: 2 }],
    itemsRecieved: [
      {
        id: 33,
        qty: 1,
      },
    ],
  },
  {
    name: "bronze boots",
    level: 12,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "1",
    icon: itemIcon.armourBronzeBoots,
    itemsRequired: [{ id: 26, qty: 2 }],
    itemsRecieved: [
      {
        id: 34,
        qty: 1,
      },
    ],
  },
  {
    name: "bronze gloves",
    level: 14,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "1",
    icon: itemIcon.armourBronzeGloves,
    itemsRequired: [{ id: 26, qty: 3 }],
    itemsRecieved: [
      {
        id: 35,
        qty: 1,
      },
    ],
  },
  {
    name: "bronze platelegs",
    level: 16,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "1",
    icon: itemIcon.armourBronzePlatelegs,
    itemsRequired: [{ id: 26, qty: 4 }],
    itemsRecieved: [
      {
        id: 36,
        qty: 1,
      },
    ],
  },
  {
    name: "bronze platebody",
    level: 18,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "1",
    icon: itemIcon.armourBronzeChest,
    itemsRequired: [{ id: 26, qty: 5 }],
    itemsRecieved: [
      {
        id: 37,
        qty: 1,
      },
    ],
  },
  {
    name: "bronze shield",
    level: 19,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "1",
    icon: itemIcon.armourBronzeShield,
    itemsRequired: [{ id: 26, qty: 6 }],
    itemsRecieved: [
      {
        id: 38,
        qty: 1,
      },
    ],
  },
  {
    name: "bronze sword",
    level: 20,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "1",
    icon: itemIcon.swordBronze,
    itemsRequired: [{ id: 26, qty: 5 }],
    itemsRecieved: [
      {
        id: 39,
        qty: 1,
      },
    ],
  },
  {
    name: "iron dagger",
    level: 20,
    exp: 10,
    time: 10.0,
    manpower: 1,
    category: "2",
    icon: itemIcon.daggerIron,
    itemsRequired: [{ id: 27, qty: 6 }],
    itemsRecieved: [
      {
        id: 40,
        qty: 1,
      },
    ],
  },
]
