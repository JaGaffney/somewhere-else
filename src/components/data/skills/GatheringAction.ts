export class GatheringAction {
  id: string
  name: string
  exp: number
  time: number
  level: number

  constructor(
    id: string,
    name: string,
    exp: number,
    time: number,
    level: number
  ) {
    this.id = id
    this.name = name
    this.exp = exp
    this.time = time
    this.level = level
  }
}
