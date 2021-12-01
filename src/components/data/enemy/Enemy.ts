import { Drops } from "./Drops"

export class Enemy {
  name: string
  level: number
  health: number
  defence: number
  attack: number
  stamina: number
  style: string
  speed: number
  drops: Drops
  attacks: Array<number>
  rotation: Array<number>
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
    drops: Drops,
    attacks: Array<number>,
    rotation: Array<number>,
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
    this.rotation = rotation
    this.image = image
    this.requirement = requirement
  }
}
