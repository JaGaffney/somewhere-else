export class SkillEXP {
  skillExp: Map<string, number> = new Map()

  constructor(skillNames: Array<string>) {
    this.createBaseSkills(skillNames)
  }

  createBaseSkills(skillNames: Array<string>): void {
    for (const i in skillNames) {
      this.skillExp[skillNames[i]] = 0
    }
  }

  getCurrentExp(skillName: string): Map<string, number> {
    return this.skillExp[skillName]
  }

  setCurrentExp(skillName: string, increase: number): void {
    this.skillExp[skillName] += increase
  }
}
