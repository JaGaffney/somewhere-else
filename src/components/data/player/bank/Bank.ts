import { Bankslot } from "./Bankslot"

export class Bank {
  bankItems: Map<number, Bankslot> = new Map()
  bankSpace: number = 50
  coins: number = 0

  constructor() {}

  getBankSpace(): number {
    return this.bankSpace
  }
  setBankSpace(value: number): void {
    this.bankSpace = value
  }
  getCoins(): number {
    return this.coins
  }
  setCoins(value: number): void {
    this.coins = value
  }

  totalItemsInBank(): number {
    return this.bankItems.size
  }
  findItemInBank(itemId: number) {
    return this.bankItems.get(itemId)
  }

  addItemtoBank(itemId: number, qty: number) {
    console.log(itemId, qty)
    // might need a better check

    let currentVal = this.findItemInBank(itemId)
    if (currentVal === undefined) {
      let newItem = new Bankslot(qty, 0)
      this.bankItems.set(itemId, newItem)
    } else {
      this.bankItems.set(itemId, new Bankslot(currentVal.qty + qty, 0))
    }
  }

  removeItemfromBank(itemId: number, qty: number) {}
}
