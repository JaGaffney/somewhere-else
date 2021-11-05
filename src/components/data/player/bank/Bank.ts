import { Bankslot } from "./Bankslot"

export class Bank {
  bankItems: Map<number, Bankslot> = new Map()
  bankSpace: number = 50

  constructor() {}

  getBankSpace(): number {
    return this.bankSpace
  }
  setBankSpace(value: number): void {
    this.bankSpace = value
  }

  findItemInBank(itemId: number) {
    return this.bankItems[itemId]
  }

  addItemtoBank(itemId: number, qty: number) {
    // might need a better check
    let currentVal = this.findItemInBank(itemId)
    if (currentVal === undefined) {
      currentVal = 0
    }
    this.bankItems[itemId] = currentVal + qty
  }

  removeItemfromBank(itemId: number, qty: number) {}
}
