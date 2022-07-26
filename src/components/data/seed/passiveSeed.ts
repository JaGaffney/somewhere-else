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
    description: "starting passive for warrior, regenrates armour each turn",
    rarity: Rarity.COMMON,
    effect: { armour: 3 },
  },
  {
    id: 2,
    name: "baspect of the archer",
    job: ClassesEnum.ARCHER,
    icon: placeholder,
    description:
      "starting passive for archer, increased chance to land a crital hit",
    rarity: Rarity.COMMON,
    effect: { crit: 15 },
  },
]
