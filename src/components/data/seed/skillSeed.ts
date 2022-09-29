import * as itemIcon from "./icons/itemSeedIcons"
import * as skillIcon from "./icons/skillSeedIcons"

export const forestry = [
  {
    name: "bamboo",
    level: 1,
    exp: 25,
    time: 10.0,
    manpower: 1,
    icon: skillIcon.bamboo,
    itemsRecieved: [{ id: 22, qty: 1 }],
  },
  {
    name: "beech tree",
    level: 10,
    exp: 35,
    time: 10.0,
    manpower: 1,
    icon: skillIcon.beech,
    itemsRecieved: [{ id: 2, qty: 1 }],
  },
  {
    name: "birch tree",
    level: 20,
    exp: 55,
    time: 10.0,
    manpower: 1,
    icon: skillIcon.birch,
    itemsRecieved: [{ id: 3, qty: 1 }],
  },
  {
    name: "oak tree",
    level: 30,
    exp: 68,
    time: 10.0,
    manpower: 1,
    icon: skillIcon.oak,
    itemsRecieved: [{ id: 4, qty: 1 }],
  },
  {
    name: "palm tree",
    level: 40,
    exp: 100,
    time: 10.0,
    manpower: 1,
    icon: skillIcon.palm,
    itemsRecieved: [{ id: 5, qty: 1 }],
  },
  {
    name: "willow tree",
    level: 50,
    exp: 125,
    time: 10.0,
    manpower: 1,
    icon: skillIcon.willow,
    itemsRecieved: [{ id: 6, qty: 1 }],
  },
  {
    name: "redwood tree",
    level: 60,
    exp: 175,
    time: 10.0,
    manpower: 1,
    icon: skillIcon.redwood,
    itemsRecieved: [{ id: 7, qty: 1 }],
  },
  {
    name: "undead tree",
    level: 70,
    exp: 220,
    time: 10.0,
    manpower: 1,
    icon: skillIcon.undead,
    itemsRecieved: [{ id: 8, qty: 1 }],
  },
  {
    name: "tree of life",
    level: 80,
    exp: 300,
    time: 10.0,
    manpower: 1,
    icon: skillIcon.holy,
    itemsRecieved: [{ id: 9, qty: 1 }],
  },
  {
    name: "demonic tree",
    level: 90,
    exp: 380,
    time: 10.0,
    manpower: 1,
    icon: skillIcon.demonic,
    itemsRecieved: [{ id: 10, qty: 1 }],
  },
  {
    name: "god tree",
    level: 99,
    exp: 0,
    time: 10.0,
    manpower: 99,
    icon: skillIcon.god,
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
    icon: skillIcon.stone,
    itemsRecieved: [{ id: 12, qty: 1 }],
  },
  {
    name: "copper",
    level: 10,
    exp: 100,
    time: 10.0,
    manpower: 10,
    icon: skillIcon.copper,
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
    manpower: 10,
    icon: skillIcon.tin,
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
    manpower: 20,
    icon: skillIcon.iron,
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
    manpower: 20,
    icon: skillIcon.coal,
    itemsRecieved: [
      { id: 12, qty: 3 },
      { id: 16, qty: 1 },
    ],
  },
  {
    name: "silver",
    level: 40,
    exp: 400,
    time: 10.0,
    manpower: 20,
    icon: skillIcon.silver,
    itemsRecieved: [
      { id: 12, qty: 4 },
      { id: 17, qty: 1 },
    ],
  },
  {
    name: "gold",
    level: 40,
    exp: 400,
    time: 10.0,
    manpower: 20,
    icon: skillIcon.gold,
    itemsRecieved: [
      { id: 12, qty: 4 },
      { id: 18, qty: 1 },
    ],
  },
  {
    name: "mithril",
    level: 50,
    exp: 500,
    time: 10.0,
    manpower: 20,
    icon: skillIcon.mithril,
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
    icon: itemIcon.researchRed,
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
    icon: itemIcon.researchGreen,
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
    icon: itemIcon.researchBlue,
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
    icon: itemIcon.researchYellow,
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
    icon: itemIcon.researchPurple,
    itemsRecieved: [
      {
        id: 994,
        qty: 1,
      },
    ],
  },
]
