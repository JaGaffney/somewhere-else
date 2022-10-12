export class SkillAction {
  name: string
  exp: number
  manpower: number
  category: string
  level: number
  icon: string
  itemsRequired: Array<any>
  itemsReceived: Array<any>
  job: string

  constructor(
    name: string,
    exp: number,
    manpower: number,
    category: string,
    level: number,
    icon: string,
    itemsRequired: Array<any>,
    itemsReceived: Array<any>,
    job: string
  ) {
    this.name = name
    this.exp = exp
    this.manpower = manpower
    this.category = category
    this.level = level
    this.icon = icon
    this.itemsRequired = itemsRequired
    this.itemsReceived = itemsReceived
    this.job = job
  }
}
