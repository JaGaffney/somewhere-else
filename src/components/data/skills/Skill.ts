// the base class that all skills will inherit from that will contain data that is relevant to all skills
// such as base total exp required, breakdowns for levels, what levels passives become avaiable etc
export abstract class Skill {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}
