import { SkillAction } from "./SkillAction"

export class ProductionAction extends SkillAction {
  itemsRequired: Array<Array<number>>

  constructor(
    name: string,
    exp: number,
    time: number,
    level: number,
    icon: string,
    itemsReceived: Array<any>,
    itemsRequired: Array<any>
  ) {
    super(name, exp, time, level, icon, itemsReceived)
    this.itemsRequired = itemsRequired
  }
}
