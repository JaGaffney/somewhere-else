export class Enemy {
  name: string
  level: number
  health: number
  defence: number
  attack: number
  stamina: number
  style: string
  speed: number
  drops: Array<object>
  attacks: Array<object>
  image: string
  requirement: number

  constructor(
    name: string,
    level: number,
    health: number,
    defence: number,
    attack: number,
    stamina: number,
    style: string,
    speed: number,
    drops: Array<object>,
    attacks: Array<object>,
    image: string,
    requirement: number
  ) {
    this.name = name
    this.level = level
    this.health = health
    this.defence = defence
    this.attack = attack
    this.stamina = stamina
    this.style = style
    this.speed = speed
    this.drops = drops
    this.attacks = attacks
    this.image = image
    this.requirement = requirement
  }
}
