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
  buyStatus(): void {
    this.base += 1
  }

  setData(base: number, current: number): void {
    this.base = base
    this.current = current
  }
}

export class Status {
  health: StatusValues
  stamina: StatusValues
  armour: StatusValues
  divination: StatusValues

  constructor() {
    this.health = new StatusValues(10, 10)
    this.stamina = new StatusValues(1, 1)
    this.armour = new StatusValues(1, 1)
    this.divination = new StatusValues(1, 1)
  }

  getValue(type: string) {
    switch (type) {
      case "health":
        return this.health
      case "stamina":
        return this.stamina
      case "armour":
        return this.armour
      case "divination":
        return this.divination

      default:
        return null
    }
  }

  // sets data after load
  loadStatus(values) {
    this.health.setData(values.health.base, values.health.current)
    this.stamina.setData(values.stamina.base, values.stamina.base + 100)
    this.armour.setData(values.armour.base, values.armour.current)
    this.divination.setData(values.divination.base, values.divination.current)
  }
}
