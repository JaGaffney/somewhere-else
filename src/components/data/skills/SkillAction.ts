export class SkillAction {
  name: string
  exp: number
  time: number
  manpower: number
  level: number
  icon: string
  itemsRequired: Array<any>
  itemsReceived: Array<any>
  job: string

  constructor(
    name: string,
    exp: number,
    time: number,
    manpower: number,
    level: number,
    icon: string,
    itemsRequired: Array<any>,
    itemsReceived: Array<any>,
    job: string
  ) {
    this.name = name
    this.exp = exp
    this.time = time
    this.manpower = manpower
    this.level = level
    this.icon = icon
    this.itemsRequired = itemsRequired
    this.itemsReceived = itemsReceived
    this.job = job
  }
}
