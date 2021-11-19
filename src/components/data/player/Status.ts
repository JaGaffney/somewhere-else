// on load creates all of the ingame data for the player.

export class StatusValues {
  base: number
  current: number

  constructor(base: number, current: number) {
    this.base = base
    this.current = current
  }

  getBase(): number {
    return this.base
  }
  setBase(val: number): void {
    this.base = val
  }
  getCurrent(): number {
    return this.current
  }
  setCurrent(val: number): void {
    this.current = val
  }
}

export class Status {
  health: StatusValues
  stamina: StatusValues

  constructor() {
    this.health = new StatusValues(10, 10)
    this.stamina = new StatusValues(100, 100)
  }
}
