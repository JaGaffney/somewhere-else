// @ts-nocheck
import icon_basic from "../../../images/combat/attacks/basic.svg"
import icon_shieldBash from "../../../images/combat/attacks/shieldbash.svg"
import icon_rend from "../../../images/combat/attacks/rend.svg"

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
  },
]
