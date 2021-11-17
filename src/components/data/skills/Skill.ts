// the base class that all skills will inherit from that will contain data that is relevant to all skills
// such as base total exp required, breakdowns for levels, what levels passives become avaiable etc
export abstract class Skill {
  name: string
  icon: any

  constructor(name: string, icon: any) {
    this.name = name
    this.icon = icon
  }

  getIcon() {
    return this.icon
  }
}
