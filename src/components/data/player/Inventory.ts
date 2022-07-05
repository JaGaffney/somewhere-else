// on load creates the default inventory for the player.
export class Inventory {
  Head: number = 0
  Chest: number = 0
  Legs: number = 0
  Feet: number = 0
  Hands: number = 0
  Neck: number = 0
  Back: number = 0
  Trinket: number = 0
  MainHand: number = 0
  OffHand: number = 0

  constructor() {}

  getEquippedItem(type: string): number {
    return this[type]
  }
  setEquippedItem(type: string, itemId: number): void {
    this[type] = itemId
  }
}
