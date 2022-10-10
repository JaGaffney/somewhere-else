export class SkillEXP {
  skillExp: Map<string, number> = new Map()

  constructor(skillNames: Array<string>) {
    this.createBaseSkills(skillNames)
  }

  createBaseSkills(skillNames: Array<string>): void {
    for (const i in skillNames) {
      this.setCurrentExp(skillNames[i], 0)
    }
  }

  getCurrentExp(skillName: string): number {
    return this.skillExp[skillName]
  }

  setCurrentExp(skillName: string, increase: number): void {
    let currentVal = this.skillExp[skillName]
    if (currentVal === undefined) {
      currentVal = 0
    }
    this.skillExp[skillName] = currentVal + increase
  }
}
