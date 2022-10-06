import { Bankslot } from "./Bankslot"
import { Item } from "../../items/Item"

export class Bank {
  bankSpace: number = 10
  bankItems: Array<Bankslot> = []
  coins: number = 0
  essence: number = 0
  research = {
    red: 0,
    green: 0,
    blue: 0,
    yellow: 0,
    purple: 0,
  }

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

  getResearch(): Object {
    return this.research
  }
  getResearchByColor(color: string): number {
    return this.research[color]
  }
  setResearch(value: any): void {
    if (value) {
      this.research = value
    } else {
      this.research = {
        red: 0,
        green: 0,
        blue: 0,
        yellow: 0,
        purple: 0,
      }
    }
  }
  addToResearch(color: string, value: number): void {
    this.research[color] += value
  }
  removeFromResearch(color: string, value: number): void {
    if (value <= this.research[color]) {
      this.research[color] -= value
    }
  }

  totalItemsInBank(): number {
    return this.bankItems.length
  }

  findItemInBank(itemID: number) {
    for (let item in this.bankItems) {
      if (this.bankItems[item].id === itemID) {
        return this.bankItems[item]
      }
    }
    return null
  }

  addItemtoBank(itemID: number, qty: number) {
    let currentVal = this.findItemInBank(itemID)
    if (currentVal === null) {
      let newItem = new Bankslot(itemID, qty)
      // space in bank?
      this.bankItems.push(newItem)
    } else {
      currentVal.qty += qty
    }
  }

  removeItemfromBank(itemID: number, qty: number) {
    let currentVal = this.findItemInBank(itemID)
    if (currentVal !== null) {
      currentVal.qty -= qty
      if (currentVal.qty === 0) {
        this.bankItems.filter(i => i.id !== itemID)
      }
    }
  }

  sellItemFromBank(itemID: number, amount: number, basePrice: number): void {
    this.removeItemfromBank(itemID, amount)
    this.addToCoins(amount * basePrice)
  }

  getBankValue(itemData): number {
    let total = 0
    for (const slot of this.bankItems) {
      const item = itemData.getItemById(slot.id)
      total += slot.getItemTotalPrice(item)
    }

    return total
  }
}
