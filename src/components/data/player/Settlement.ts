// on load creates all of the ingame data for the player.
export class Settlement {
  manpower: number = 0
  tasks: Array<Object> = []

  constructor() {}

  getManpower(): number {
    return this.manpower
  }

  addManpower(amount: number): void {
    this.manpower += amount
  }
}
