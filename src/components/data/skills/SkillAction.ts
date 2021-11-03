export class SkillAction {
  name: string
  exp: number
  time: number
  level: number
  icon: string
  itemsReceived: Array<any>

  constructor(
    name: string,
    exp: number,
    time: number,
    level: number,
    icon: string,
    itemsReceived: Array<any>
  ) {
    this.name = name
    this.exp = exp
    this.time = time
    this.level = level
    this.icon = icon
    this.itemsReceived = itemsReceived
  }
}
