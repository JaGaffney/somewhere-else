// @ts-nocheck
import { ClassesEnum } from "../enums/ClassesEnum"

import placeholder from "../../../images/placeholder.svg"

import icon_basic from "../../../images/combat/attacks/basic.svg"
import icon_shieldBash from "../../../images/combat/attacks/shieldBash.svg"
import icon_rend from "../../../images/combat/attacks/rend.svg"
import icon_shieldBlock from "../../../images/combat/attacks/shieldBlock.svg"
import icon_arrowLightning from "../../../images/combat/attacks/arrowLightning.svg"
import icon_arrowLeech from "../../../images/combat/attacks/arrowLeech.svg"

export const attackSeed = [
  {
    id: 1,
    name: "basic attack",
    type: "general",
    minDamage: 1,
    maxDamage: 5,
    cooldown: 0,
    stamina: 0,
    effect: { crit: 10 },
    icon: icon_basic,
    levelRequired: 1,
  },
  {
    id: 2,
    name: "shield bash",
    type: ClassesEnum.WARRIOR,
    minDamage: 1,
    maxDamage: 10,
    cooldown: 2,
    stamina: 50,
    effect: {
      drain: 25,
    },
    icon: icon_shieldBash,
    levelRequired: 1,
  },
  {
    id: 3,
    name: "rend",
    type: ClassesEnum.WARRIOR,
    minDamage: 1,
    maxDamage: 10,
    cooldown: 2,
    stamina: 50,
    effect: {
      bleed: 10,
    },
    icon: icon_rend,
    levelRequired: 5,
  },
  {
    id: 4,
    name: "shield block",
    type: ClassesEnum.WARRIOR,
    minDamage: 1,
    maxDamage: 1,
    cooldown: 0,
    stamina: 50,
    effect: {
      armour: 10,
    },
    icon: icon_shieldBlock,
    levelRequired: 10,
  },
  {
    id: 5,
    name: "Lightning Arrow",
    type: ClassesEnum.ARCHER,
    minDamage: 1,
    maxDamage: 5,
    cooldown: 2,
    stamina: 50,
    effect: {
      elemental: 10,
    },
    icon: icon_arrowLightning,
    levelRequired: 1,
  },
  {
    id: 6,
    name: "Leeching Arrow",
    type: ClassesEnum.ARCHER,
    minDamage: 1,
    maxDamage: 10,
    cooldown: 2,
    stamina: 50,
    effect: {
      regeneration: 3,
    },
    icon: icon_arrowLeech,
    levelRequired: 5,
  },
  {
    id: 7,
    name: "Tincture",
    type: ClassesEnum.ARCHER,
    minDamage: 0,
    maxDamage: 0,
    cooldown: 2,
    stamina: 50,
    effect: {
      regeneration: 50,
    },
    icon: icon_arrowLeech,
    levelRequired: 10,
  },
  {
    id: 8,
    name: "Arcane blast",
    type: ClassesEnum.MAGICIAN,
    minDamage: 10,
    maxDamage: 10,
    cooldown: 2,
    stamina: 50,
    effect: { elemental: 2 },
    icon: placeholder,
    levelRequired: 1,
  },
  {
    id: 9,
    name: "Arcane Missle",
    type: ClassesEnum.MAGICIAN,
    minDamage: 10,
    maxDamage: 10,
    cooldown: 2,
    stamina: 50,
    effect: { elemental: 7 },
    icon: placeholder,
    levelRequired: 5,
  },
]
