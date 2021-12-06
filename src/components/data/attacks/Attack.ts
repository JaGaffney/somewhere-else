import { Effect } from "./Effect"
import { ClassesEnum } from "../enums/ClassesEnum"

export class Attack {
  name: string
  type: string
  minDamage: number
  maxDamage: number
  cooldown: number
  stamina: number
  effect: Effect
  icon: string

  constructor(
    name: string,
    type: string,
    minDamage: number,
    maxDamage: number,
    cooldown: number,
    stamina: number,
    effect: Effect,
    icon: string
  ) {
    this.name = name
    this.type = type
    this.minDamage = minDamage
    this.maxDamage = maxDamage
    this.cooldown = cooldown
    this.stamina = stamina
    this.effect = effect
    this.icon = icon
  }
}
