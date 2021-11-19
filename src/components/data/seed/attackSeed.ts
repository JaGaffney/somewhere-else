import { EffectEnum } from "../enums/EffectEnum"

export const attackSeed = [
  {
    id: 1,
    name: "basic attack",
    type: "warrior",
    minDamage: 1,
    maxDamage: 5,
    cooldown: 1,
    stamina: 0,
    effect: {
      type: null,
      value: null,
    },
    icon: "",
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
      type: EffectEnum.Drain,
      value: 25,
    },
    icon: "",
  },
]
