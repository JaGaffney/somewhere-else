import {
  bamboo,
  beech,
  birch,
  oak,
  palm,
  willow,
  redwood,
  undead,
  holy,
  demonic,
  god,
  stone,
  copper,
  tin,
  iron,
  coal,
  silver,
  gold,
  mithril,
} from "./icons/skillSeedIcons"

export const forestry = [
  {
    name: "bamboo",
    level: 1,
    exp: 25,
    time: 10.0,
    manpower: 1,
    icon: bamboo,
    itemsRecieved: [{ id: 1, qty: 1 }],
  },
  {
    name: "beech tree",
    level: 10,
    exp: 35,
    time: 10.0,
    manpower: 1,
    icon: beech,
    itemsRecieved: [{ id: 2, qty: 1 }],
  },
  {
    name: "birch tree",
    level: 20,
    exp: 55,
    time: 10.0,
    manpower: 1,
    icon: birch,
    itemsRecieved: [{ id: 3, qty: 1 }],
  },
  {
    name: "oak tree",
    level: 30,
    exp: 68,
    time: 10.0,
    manpower: 1,
    icon: oak,
    itemsRecieved: [{ id: 4, qty: 1 }],
  },
  {
    name: "palm tree",
    level: 40,
    exp: 100,
    time: 10.0,
    manpower: 1,
    icon: palm,
    itemsRecieved: [{ id: 5, qty: 1 }],
  },
  {
    name: "willow tree",
    level: 50,
    exp: 125,
    time: 10.0,
    manpower: 1,
    icon: willow,
    itemsRecieved: [{ id: 6, qty: 1 }],
  },
  {
    name: "redwood tree",
    level: 60,
    exp: 175,
    time: 10.0,
    manpower: 1,
    icon: redwood,
    itemsRecieved: [{ id: 7, qty: 1 }],
  },
  {
    name: "undead tree",
    level: 70,
    exp: 220,
    time: 10.0,
    manpower: 1,
    icon: undead,
    itemsRecieved: [{ id: 8, qty: 1 }],
  },
  {
    name: "tree of life",
    level: 80,
    exp: 300,
    time: 10.0,
    manpower: 1,
    icon: holy,
    itemsRecieved: [{ id: 9, qty: 1 }],
  },
  {
    name: "demonic tree",
    level: 90,
    exp: 380,
    time: 10.0,
    manpower: 1,
    icon: demonic,
    itemsRecieved: [{ id: 10, qty: 1 }],
  },
  {
    name: "god tree",
    level: 99,
    exp: 0,
    time: 10.0,
    manpower: 99,
    icon: god,
    itemsRecieved: [{ id: 11, qty: 1 }],
  },
]

export const metalwork = [
  {
    name: "stone",
    level: 1,
    exp: 25,
    time: 10.0,
    manpower: 5,
    icon: stone,
    itemsRecieved: [{ id: 12, qty: 1 }],
  },
  {
    name: "copper",
    level: 10,
    exp: 100,
    time: 10.0,
    manpower: 10,
    icon: copper,
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
    icon: tin,
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
    icon: iron,
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
    icon: coal,
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
    icon: silver,
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
    icon: gold,
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
    icon: mithril,
    itemsRecieved: [
      { id: 12, qty: 10 },
      { id: 19, qty: 1 },
    ],
  },
]
