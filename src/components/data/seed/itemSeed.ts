import { Slot } from "../enums/Slot"
import {
  placeholder,
  gp,
  researchRed,
  researchGreen,
  researchBlue,
  researchYellow,
  researchPurple,
  logBamboo,
  logBrown,
  logDarkbrown,
  logDarkgreen,
  logGray,
  logGreen,
  logOfLife,
  logRed,
  logRedbrown,
  logUndead,
  logDemon,
  daggerBone,
} from "./icons/itemSeedIcons"
import {
  stone,
  copper,
  tin,
  iron,
  coal,
  silver,
  gold,
  mithril,
} from "./icons/skillSeedIcons"

export const itemSeed = [
  {
    id: 0,
    itemType: "generic",
    name: "error",
    price: 0,
    icon: placeholder,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 999,
    itemType: "generic",
    name: "gp",
    price: 1,
    icon: gp,
    description: "",
    rarity: "BANK",
    consumeable: false,
  },
  {
    id: 998,
    itemType: "generic",
    name: "red research",
    price: 0,
    icon: researchRed,
    description: "",
    rarity: "RESEARCH",
    consumeable: false,
  },
  {
    id: 997,
    itemType: "generic",
    name: "green research",
    price: 0,
    icon: researchGreen,
    description: "",
    rarity: "RESEARCH",
    consumeable: false,
  },
  {
    id: 996,
    itemType: "generic",
    name: "blue research",
    price: 0,
    icon: researchBlue,
    description: "",
    rarity: "RESEARCH",
    consumeable: false,
  },
  {
    id: 995,
    itemType: "generic",
    name: "yellow research",
    price: 0,
    icon: researchYellow,
    description: "",
    rarity: "RESEARCH",
    consumeable: false,
  },
  {
    id: 994,
    itemType: "generic",
    name: "purple research",
    price: 0,
    icon: researchPurple,
    description: "",
    rarity: "RESEARCH",
    consumeable: false,
  },
  {
    id: 1,
    itemType: "generic",
    name: "bamboo log",
    price: 10,
    icon: logBamboo,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 2,
    itemType: "generic",
    name: "beech log",
    price: 15,
    icon: logBrown,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 3,
    itemType: "generic",
    name: "birch log",
    price: 20,
    icon: logGray,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 4,
    itemType: "generic",
    name: "oak log",
    price: 25,
    icon: logDarkbrown,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 5,
    itemType: "generic",
    name: "palm log",
    price: 30,
    icon: logGreen,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 6,
    itemType: "generic",
    name: "willow log",
    price: 35,
    icon: logDarkgreen,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 7,
    itemType: "generic",
    name: "redwood log",
    price: 40,
    icon: logRed,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 8,
    itemType: "generic",
    name: "undead log",
    price: 45,
    icon: logUndead,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 9,
    itemType: "generic",
    name: "log of life",
    price: 200,
    icon: logOfLife,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 10,
    itemType: "generic",
    name: "demonic log",
    price: 300,
    icon: logDemon,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 11,
    itemType: "generic",
    name: "god tree",
    price: 1,
    icon: placeholder,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 12,
    itemType: "generic",
    name: "stone",
    price: 10,
    icon: stone,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 13,
    itemType: "generic",
    name: "copper ore",
    price: 10,
    icon: copper,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 14,
    itemType: "generic",
    name: "tin ore",
    price: 10,
    icon: tin,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 15,
    itemType: "generic",
    name: "iron ore",
    price: 10,
    icon: iron,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 16,
    itemType: "generic",
    name: "coal",
    price: 10,
    icon: coal,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 17,
    itemType: "generic",
    name: "silver ore",
    price: 500,
    icon: silver,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 18,
    itemType: "generic",
    name: "gold ore",
    price: 500,
    icon: gold,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 19,
    itemType: "generic",
    name: "mithril ore",
    price: 10,
    icon: mithril,
    description: "",
    rarity: "COMMON",
    consumeable: false,
  },
  {
    id: 20,
    itemType: "equipment",
    name: "bronze chainbody",
    price: 10,
    icon: mithril,
    description: "A bronze chainbody",
    rarity: "COMMON",
    requirementLevel: 1,
    slot: Slot.CHEST,
    equipmentStats: { attack: 0, defence: 5, weight: 10, speed: 0 },
    effect: "",
  },
  {
    id: 21,
    itemType: "equipment",
    name: "bone knife",
    price: 10,
    icon: daggerBone,
    description: "A knife made from a bone",
    rarity: "COMMON",
    requirementLevel: 1,
    slot: Slot.MAIN_HAND,
    equipmentStats: { attack: 1, defence: 1, weight: 1, speed: 100 },
    effect: "",
  },
]
