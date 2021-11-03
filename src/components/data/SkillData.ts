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
    this.noncombatSkill["SKILL_BUSHCRAFT"] = skillBushcraft
  }

  getNoncombatSkillById(id: string) {
    return this.noncombatSkill[id]
  }
}
