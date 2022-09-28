import { Rarity } from "../enums/Rarity"
import { ClassesEnum } from "../enums/ClassesEnum"

import * as icon from "./icons/classesSeedIcon"

export const passiveSeed = [
  {
    id: 1,
    name: "aspect of the warrior",
    job: ClassesEnum.WARRIOR,
    icon: icon.icon_warrior,
    description: "starting passive for warrior, regenerates armour each turn",
    rarity: Rarity.COMMON,
    effect: { armour: 1 },
    levelRequired: 1,
  },
  {
    id: 2,
    name: "inner rage",
    job: ClassesEnum.WARRIOR,
    icon: icon.icon_warrior,
    description: "deal more damage, but at what cost",
    rarity: Rarity.COMMON,
    effect: { attack: 10, defence: -10 },
    levelRequired: 20,
  },
  {
    id: 3,
    name: "shield wall",
    job: ClassesEnum.WARRIOR,
    icon: icon.icon_warrior,
    description: "take less damage",
    rarity: Rarity.COMMON,
    effect: { defence: 20 },
    levelRequired: 50,
  },
  {
    id: 4,
    name: "second wind",
    job: ClassesEnum.WARRIOR,
    icon: icon.icon_warrior,
    description: "your phiscal prowess allows you to have reduced stamina cost",
    rarity: Rarity.COMMON,
    effect: { weight: -30 },
    levelRequired: 75,
  },
  {
    id: 5,
    name: "true aspect of the warrior",
    job: ClassesEnum.WARRIOR,
    icon: icon.icon_warrior,
    description: "regenerates armour each turn",
    rarity: Rarity.COMMON,
    effect: { armour: 10 },
    levelRequired: 99,
  },
  {
    id: 6,
    name: "aspect of the archer",
    job: ClassesEnum.ARCHER,
    icon: icon.icon_archer,
    description:
      "starting passive for archer, increased chance to land a crital hit",
    rarity: Rarity.COMMON,
    effect: { crit: 15 },
    levelRequired: 1,
  },
  {
    id: 7,
    name: "grace",
    job: ClassesEnum.ARCHER,
    icon: icon.icon_archer,
    description: "",
    rarity: Rarity.COMMON,
    effect: { speed: 50, weight: -10 },
    levelRequired: 25,
  },
  {
    id: 8,
    name: "way of the leaf",
    job: ClassesEnum.ARCHER,
    icon: icon.icon_archer,
    description:
      "your skills of being outdoors allows you to heal from wounds faster",
    rarity: Rarity.COMMON,
    effect: { regen: 5 },
    levelRequired: 50,
  },
  {
    id: 9,
    name: "archer lvl 75",
    job: ClassesEnum.ARCHER,
    icon: icon.icon_archer,
    description: "",
    rarity: Rarity.COMMON,
    effect: { elemental: 10, drain: 10, bleed: 10 },
    levelRequired: 75,
  },
  {
    id: 10,
    name: "true aspect of the archer",
    job: ClassesEnum.ARCHER,
    icon: icon.icon_archer,
    description: "",
    rarity: Rarity.COMMON,
    effect: { crit: 50 },
    levelRequired: 99,
  },
  {
    id: 11,
    name: "aspect of the magician",
    job: ClassesEnum.MAGICIAN,
    icon: icon.icon_magician,
    description: "",
    rarity: Rarity.COMMON,
    effect: { elemental: 5 },
    levelRequired: 1,
  },
  {
    id: 12,
    name: "MAGICIAN 25",
    job: ClassesEnum.MAGICIAN,
    icon: icon.icon_magician,
    description: "",
    rarity: Rarity.COMMON,
    effect: { crit: 50 },
    levelRequired: 25,
  },
  {
    id: 13,
    name: "MAGICIAN 50",
    job: ClassesEnum.MAGICIAN,
    icon: icon.icon_magician,
    description: "",
    rarity: Rarity.COMMON,
    effect: { crit: 50 },
    levelRequired: 50,
  },
  {
    id: 14,
    name: "MAGICIAN 75",
    job: ClassesEnum.MAGICIAN,
    icon: icon.icon_magician,
    description: "",
    rarity: Rarity.COMMON,
    effect: { crit: 50 },
    levelRequired: 75,
  },
  {
    id: 15,
    name: "true aspect of the magician",
    job: ClassesEnum.MAGICIAN,
    icon: icon.icon_magician,
    description: "",
    rarity: Rarity.COMMON,
    effect: { elemental: 25 },
    levelRequired: 99,
  },
]
