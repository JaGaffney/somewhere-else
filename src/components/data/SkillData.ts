import { NonCombatSkill } from "./skills/NonCombatSkill"

// seed data
import { bushcraft } from "./seed/skillSeed"

// on loads creates all of the ingame data.
// such as skills, items, exp etc
export class SkillData {
  classSkill: Map<string, NonCombatSkill> = new Map()
  combatSkill: Map<string, NonCombatSkill> = new Map()
  noncombatSkill: Map<string, NonCombatSkill> = new Map()

  constructor() {
    this.createNoncombatSkills()
  }

  createClassSkills() {}
  createCombatSkills() {}
  createNoncombatSkills() {
    const skillBushcraft = new NonCombatSkill(
      "bushcraft",
      "woodcutting",
      "fletching",
      "",
      bushcraft
    )
    this.noncombatSkill["bushcraft"] = skillBushcraft
  }

  getAllNoncombatSkills() {
    const noncombatSkillList = []
    for (const skill in this.noncombatSkill) {
      noncombatSkillList.push(this.noncombatSkill[skill].name)
    }
    return noncombatSkillList
  }

  getNoncombatSkillByName(name: string) {
    return this.noncombatSkill[name]
  }
}
