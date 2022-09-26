import { Drops } from "./Drops"

export class Enemy {
  name: string
  level: number
  stats: Object
  style: string
  drops: Drops
  attacks: Array<number>
  rotation: Array<number>
  image: string
  requirement: number

  constructor(
    name: string,
    level: number,
    stats: Object,
    style: string,
    drops: Drops,
    attacks: Array<number>,
    rotation: Array<number>,
    image: string,
    requirement: number
  ) {
    this.name = name
    this.level = level
    this.stats = stats
    this.style = style
    this.drops = drops
    this.attacks = attacks
    this.rotation = rotation
    this.image = image
    this.requirement = requirement
  }
}
