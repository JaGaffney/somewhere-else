import { Rarity } from "../enums/Rarity"
import { ClassesEnum } from "../enums/ClassesEnum"

// @ts-nocheck
import placeholder from "../../../images/placeholder.svg"

export const passiveSeed = [
  {
    id: 1,
    name: "aspect of the warrior",
    job: ClassesEnum.WARRIOR,
    icon: placeholder,
    description: "starting passive for warrior, regenerates armour each turn",
    rarity: Rarity.COMMON,
    effect: { armour: 3 },
    levelRequired: 1,
  },
  {
    id: 2,
    name: "inner rage",
    job: ClassesEnum.WARRIOR,
    icon: placeholder,
    description: "deal more damage, but at what cost",
    rarity: Rarity.COMMON,
    effect: { attack: 10, defence: -10 },
    levelRequired: 25,
  },
  {
    id: 3,
    name: "shield wall",
    job: ClassesEnum.WARRIOR,
    icon: placeholder,
    description: "take less damage",
    rarity: Rarity.COMMON,
    effect: { defence: 20 },
    levelRequired: 50,
  },
  {
    id: 4,
    name: "mortal strike",
    job: ClassesEnum.WARRIOR,
    icon: placeholder,
    description: "increase bleed damage",
    rarity: Rarity.COMMON,
    effect: { bleed: 30 },
    levelRequired: 75,
  },
  {
    id: 5,
    name: "true aspect of the warrior",
    job: ClassesEnum.WARRIOR,
    icon: placeholder,
    description: "regenerates armour each turn",
    rarity: Rarity.COMMON,
    effect: { armour: 15 },
    levelRequired: 99,
  },
  {
    id: 6,
    name: "aspect of the archer",
    job: ClassesEnum.ARCHER,
    icon: placeholder,
    description:
      "starting passive for archer, increased chance to land a crital hit",
    rarity: Rarity.COMMON,
    effect: { crit: 15 },
    levelRequired: 1,
  },
]
