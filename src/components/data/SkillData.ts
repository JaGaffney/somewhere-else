import { NonCombatSkill } from "./skills/NonCombatSkill"
import { CombatSkill } from "./skills/CombatSkill"

// seed data
import { ClassesEnum } from "../data/enums/ClassesEnum"
import { SkillsEnum } from "../data/enums/SkillsEnum"
import * as combatSeed from "./seed/combatSeed"
import * as skillSeed from "./seed/skillSeed"
import { skillNames } from "./seed/skillNamesSeed"

// on loads creates all of the ingame data.
// such as skills, items, exp etc
export class SkillData {
  combatSkill: Map<string, CombatSkill> = new Map()
  nonCombatSkill: Map<string, NonCombatSkill> = new Map()

  constructor() {
    this.createNonCombatSkill()
    this.createCombatSkills()
  }

  private createCombatSkills(): void {
    for (const [key, value] of Object.entries(ClassesEnum)) {
      this.buildCombatSkill(value, combatSeed[value])
    }
  }

  private createNonCombatSkill(): void {
    for (const [key, value] of Object.entries(SkillsEnum)) {
      this.buildNonCombatSkill(value, skillNames[value].icon, skillSeed[value])
    }
  }

  private buildCombatSkill(name: string, seed: any): void {
    const skillCreate = new CombatSkill(name, seed)
    this.combatSkill[name] = skillCreate
  }

  private buildNonCombatSkill(name: string, icon: string, seed: any): void {
    const skillCreate = new NonCombatSkill(name, icon, seed)
    this.nonCombatSkill[name] = skillCreate
  }

  getAllSkills() {
    const skillList = [
      this.getSkillsAsArray(this.combatSkill),
      this.getSkillsAsArray(this.nonCombatSkill),
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
  getAllNoncombatSkills() {
    return this.getSkillsAsArray(this.nonCombatSkill)
  }

  getSkillByName(type: string, name: string) {
    switch (type) {
      case "nonCombat":
        return this.nonCombatSkill[name]
      // case "combat":
      //   return this.combatSkill[name]
      default:
        return []
    }
  }
  getSkillIconByName(type: string, name: string) {
    switch (type) {
      case "nonCombat":
        return this.nonCombatSkill[name].getIcon()
      case "combat":
        return this.combatSkill[name].getIcon()
      default:
        return ""
    }
  }

  getItemIdBySkillId(name: string, actionID: string) {
    return this.nonCombatSkill[name].getItemDataBySkillId(actionID)
  }

  getActionDataBySkillID(actionID: string) {
    return Object.keys(this.nonCombatSkill).map(i => {
      return this.nonCombatSkill[i].actions[
        Object.keys(this.nonCombatSkill[i].actions).filter(
          ii => ii === actionID
        )
      ]
    })
  }
}
