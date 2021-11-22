import { GatheringSkill } from "./skills/GatheringSkill"
import { CombatSkill } from "./skills/CombatSkill"

// seed data
import { warrior, archer, magician } from "./seed/combatSeed"
import { bushcraft, metalwork } from "./seed/skillSeed"

// ICONS
// non-combat
// @ts-expect-error
import BUSHCRAFT from "../../images/sidepanel/bushcraft.svg"
// @ts-expect-error
import METALWORK from "../../images/sidepanel/metalwork.svg"

// on loads creates all of the ingame data.
// such as skills, items, exp etc
export class SkillData {
  combatSkill: Map<string, CombatSkill> = new Map()
  statusSkill: Map<string, any> = new Map()
  gatheringSkill: Map<string, GatheringSkill> = new Map()
  productionSkill: Map<string, any> = new Map()

  constructor() {
    this.createGatheringSkills()
    this.createCombatSkills()
  }

  private createCombatSkills(): void {
    this.buildCombatSkill("warrior", warrior)
    this.buildCombatSkill("archer", archer)
    this.buildCombatSkill("magician", magician)
  }

  private createStatusSkills(): void {}
  private createProductionSkills(): void {}

  private createGatheringSkills(): void {
    this.buildGatheringSkill("bushcraft", BUSHCRAFT, bushcraft) // woodcutting, bushcraft
    this.buildGatheringSkill("metalwork", METALWORK, metalwork)
  }

  private buildCombatSkill(name: string, seed: any): void {
    const skillCreate = new CombatSkill(name, seed)
    this.combatSkill[name] = skillCreate
  }
  private buildGatheringSkill(name: string, icon: string, seed: any): void {
    const skillCreate = new GatheringSkill(name, icon, seed)
    this.gatheringSkill[name] = skillCreate
  }

  getAllSkills() {
    const skillList = [this.getAllCombatSkills(), this.getAllNoncombatSkills()]
    return skillList.flat()
  }

  getAllCombatSkills() {
    const combatSkillList = []
    for (const skill in this.combatSkill) {
      combatSkillList.push(this.combatSkill[skill].name)
    }
    return combatSkillList
  }

  getAllNoncombatSkills() {
    const noncombatSkillList = []
    for (const skill in this.gatheringSkill) {
      noncombatSkillList.push(this.gatheringSkill[skill].name)
    }
    return noncombatSkillList
  }

  getSkillByName(type: string, name: string) {
    switch (type) {
      case "g":
        return this.gatheringSkill[name]
      case "p":
        return this.productionSkill[name]
      case "c":
        return this.combatSkill[name]
      case "s":
        return this.statusSkill[name]
      default:
        return []
    }
  }
  getSkillIconByName(type: string, name: string) {
    switch (type) {
      case "g":
        return this.gatheringSkill[name].getIcon()
      case "p":
        return this.productionSkill[name].getIcon()
      case "c":
        return this.combatSkill[name].getIcon()
      case "s":
        return this.statusSkill[name].getIcon()
      default:
        return ""
    }
  }

  getItemIdBySkillId(name: string, actionID: string) {
    return this.gatheringSkill[name].getItemDataBySkillId(actionID)
  }
}
