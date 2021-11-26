import { Bankslot } from "./Bankslot"
import { Item } from "../../items/Item"

export class Bank {
  bankItems: Map<number, Bankslot> = new Map()
  bankSpace: number = 50
  coins: number = 0
  essence: number = 0

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
  addToCoins(value: number): void {
    this.coins += value
  }
  removeFromCoins(value: number): void {
    if (value <= this.coins) {
      this.coins -= value
    }
  }
  getEssence(): number {
    return this.essence
  }
  setEssence(value: number): void {
    this.essence = value
  }
  addToEssence(value: number): void {
    this.essence += value
  }
  removeFromEssence(value: number): void {
    if (value <= this.essence) {
      this.essence -= value
    }
  }

  totalItemsInBank(): number {
    return this.bankItems.size
  }

  findItemInBank(itemId: number) {
    return this.bankItems.get(itemId)
  }

  addItemtoBank(itemId: number, qty: number, item: Item) {
    let currentVal = this.findItemInBank(itemId)
    if (currentVal === undefined) {
      let newItem = new Bankslot(qty, 0, item)
      this.bankItems.set(itemId, newItem)
    } else {
      currentVal.qty += qty
    }
  }

  removeItemfromBank(itemId: number, qty: number) {
    let currentVal = this.findItemInBank(itemId)
    if (currentVal !== undefined) {
      currentVal.qty -= qty
    }
    if (currentVal.qty === 0) {
      this.bankItems.delete(itemId)
    }
  }

  sellItemFromBank(itemID: number, amount: number, basePrice: number): void {
    this.removeItemfromBank(itemID, amount)
    this.addToCoins(amount * basePrice)
  }

  getBankValue(): number {
    let total = 0
    for (const item of this.bankItems) {
      total += item[1].getItemTotalPrice()
    }

    return total
  }
}
