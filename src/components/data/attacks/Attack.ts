export class Attack {
  name: string
  type: string
  power: number
  accuracy: number
  cooldown: number
  stamina: number
  effect: Object
  icon: string
  levelRequired: number
  exp: number

  constructor(
    name: string,
    type: string,
    power: number,
    accuracy: number,
    cooldown: number,
    stamina: number,
    effect: Object,
    icon: string,
    levelRequired: number,
    exp: number
  ) {
    this.name = name
    this.type = type
    this.power = power
    this.accuracy = accuracy
    this.cooldown = cooldown
    this.stamina = stamina
    this.effect = effect
    this.icon = icon
    this.levelRequired = levelRequired
    this.exp = exp
  }
}
