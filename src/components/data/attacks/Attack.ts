export class Attack {
  name: string
  type: string
  minDamage: number
  maxDamage: number
  cooldown: number
  stamina: number
  effect: Object
  icon: string
  levelRequired: number
  exp: number

  constructor(
    name: string,
    type: string,
    minDamage: number,
    maxDamage: number,
    cooldown: number,
    stamina: number,
    effect: Object,
    icon: string,
    levelRequired: number,
    exp: number
  ) {
    this.name = name
    this.type = type
    this.minDamage = minDamage
    this.maxDamage = maxDamage
    this.cooldown = cooldown
    this.stamina = stamina
    this.effect = effect
    this.icon = icon
    this.levelRequired = levelRequired
    this.exp = exp
  }
}
