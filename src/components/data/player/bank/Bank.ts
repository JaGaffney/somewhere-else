import { Bankslot } from "./Bankslot"

export class Bank {
  bankSpace: number = 10
  bankItems: Array<Bankslot> = []
  coins: number = 0
  tribute: number = 0
  research = {
    red: 0,
    green: 0,
    blue: 0,
    yellow: 0,
    purple: 0,
  }

  constructor() {}

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
  getTribute(): number {
    return this.tribute
  }
  setTribute(value: number): void {
    this.tribute = value
  }
  addToTribute(value: number): void {
    this.tribute += value
  }
  removeFromTribute(value: number): void {
    if (value <= this.tribute) {
      this.tribute -= value
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
      if (currentVal.qty <= 0) {
        this.bankItems = this.bankItems.filter(
          i => i.id !== itemID && i.id !== 0
        )
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
