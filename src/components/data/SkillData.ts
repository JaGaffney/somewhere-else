import { GatheringSkill } from "./skills/GatheringSkill"
import { CombatSkill } from "./skills/CombatSkill"
import { StatusSkill } from "./skills/StatusSkill"

// seed data

import { ClassesEnum } from "../data/enums/ClassesEnum"
import { SkillsEnum } from "../data/enums/SkillsEnum"
import { health, stamina, armour, divination } from "./seed/statusSeed"
import * as combatSeed from "./seed/combatSeed"
import * as skillSeed from "./seed/skillSeed"
import { skillNames } from "./seed/skillNamesSeed"

// on loads creates all of the ingame data.
// such as skills, items, exp etc
export class SkillData {
  combatSkill: Map<string, CombatSkill> = new Map()
  statusSkill: Map<string, StatusSkill> = new Map()
  gatheringSkill: Map<string, GatheringSkill> = new Map()
  productionSkill: Map<string, any> = new Map()

  constructor() {
    this.createGatheringSkills()
    this.createCombatSkills()
    this.createStatusSkills()
  }

  private createCombatSkills(): void {
    for (const [key, value] of Object.entries(ClassesEnum)) {
      this.buildCombatSkill(value, combatSeed[value])
    }
  }

  private createStatusSkills(): void {
    this.buildStatusSkill("health", health)
    this.buildStatusSkill("stamina", stamina)
    this.buildStatusSkill("armour", armour)
    this.buildStatusSkill("divination", divination)
  }
  private createProductionSkills(): void {}

  private createGatheringSkills(): void {
    for (const [key, value] of Object.entries(SkillsEnum)) {
      this.buildGatheringSkill(value, skillNames[value].icon, skillSeed[value])
    }
  }

  private buildCombatSkill(name: string, seed: any): void {
    const skillCreate = new CombatSkill(name, seed)
    this.combatSkill[name] = skillCreate
  }
  private buildStatusSkill(name: string, seed: any): void {
    const statusCreate = new StatusSkill(name, seed)
    this.statusSkill[name] = statusCreate
  }
  private buildGatheringSkill(name: string, icon: string, seed: any): void {
    const skillCreate = new GatheringSkill(name, icon, seed)
    this.gatheringSkill[name] = skillCreate
  }

  getAllSkills() {
    const skillList = [
      this.getSkillsAsArray(this.combatSkill),
      this.getSkillsAsArray(this.statusSkill),
      this.getSkillsAsArray(this.gatheringSkill),
    ]
    return skillList.flat()
  }

  private getSkillsAsArray(property: Map<any, any>) {
    const array = []
    for (const skill in property) {
      array.push(property[skill].name)
    }
    return array
  }

  getAllCombatSkills() {
    return this.getSkillsAsArray(this.combatSkill)
  }
  getAllStatusSkills() {
    return this.getSkillsAsArray(this.statusSkill)
  }
  getAllNoncombatSkills() {
    return this.getSkillsAsArray(this.gatheringSkill)
  }

  getSkillByName(type: string, name: string) {
    switch (type) {
      case "gathering":
        return this.gatheringSkill[name]
      case "production":
        return this.productionSkill[name]
      case "combat":
        return this.combatSkill[name]
      case "status":
        return this.statusSkill[name]
      default:
        return []
    }
  }
  getSkillIconByName(type: string, name: string) {
    switch (type) {
      case "gathering":
        return this.gatheringSkill[name].getIcon()
      case "production":
        return this.productionSkill[name].getIcon()
      case "combat":
        return this.combatSkill[name].getIcon()
      case "status":
        return this.statusSkill[name].getIcon()
      default:
        return ""
    }
  }

  getItemIdBySkillId(name: string, actionID: string) {
    return this.gatheringSkill[name].getItemDataBySkillId(actionID)
  }

  getActionDataBySkillID(actionID: string) {
    return Object.keys(this.gatheringSkill).map(i => {
      return this.gatheringSkill[i].actions[
        Object.keys(this.gatheringSkill[i].actions).filter(
          ii => ii === actionID
        )
      ]
    })
  }
}
