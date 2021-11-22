// @ts-nocheck
import { ClassesEnum } from "../enums/ClassesEnum"

import WARRIOR from "../../../images/classes/warrior.svg"
import ARCHER from "../../../images/classes/archer.svg"
import MAGICIAN from "../../../images/classes/magician.svg"

export const warrior = [
  {
    name: ClassesEnum.Warrior,
    attacks: [1, 2, 3],
    icon: WARRIOR,
  },
]
export const archer = [
  {
    name: ClassesEnum.Archer,
    attacks: [1],
    icon: ARCHER,
  },
]
export const magician = [
  {
    name: ClassesEnum.Magician,
    attacks: [1],
    icon: MAGICIAN,
  },
]
