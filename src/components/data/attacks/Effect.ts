import { EffectEnum } from "../enums/EffectEnum"

export class Effect {
  type: EffectEnum
  value: number

  constructor(type: EffectEnum, value: number) {
    this.type = type
    this.value = value
  }
}
