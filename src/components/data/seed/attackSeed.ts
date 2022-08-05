// @ts-nocheck
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
    type: "warrior",
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
    type: "warrior",
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
    type: "warrior",
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
    type: "archer",
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
    type: "archer",
    minDamage: 1,
    maxDamage: 10,
    cooldown: 2,
    stamina: 50,
    effect: {
      lifesteal: 3,
    },
    icon: icon_arrowLeech,
    levelRequired: 5,
  },
]
