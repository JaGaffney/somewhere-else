import { Rarity } from "../enums/Rarity"
import { enumFromValue } from "../enums/enumFromValue"

export class Passive {
  name: string
  job: string
  icon: any
  description: string
  rarity: Rarity | any
  effect: Object

  constructor(
    name: string,
    job: string,
    icon: any,
    description: string,
    rarity: string,
    effect: string
  ) {
    this.name = name
    this.job = job
    this.icon = icon
    this.description = description
    this.rarity = enumFromValue(rarity, Rarity)
    this.effect = effect
  }
}
