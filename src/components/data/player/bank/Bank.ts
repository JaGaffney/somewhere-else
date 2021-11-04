import { Bankslot } from "./Bankslot"

export class Bank {
  bankItems: Map<number, Bankslot> = new Map()
  bankSpace: number = 50

  constructor() {}

  findIteminBank(itemId) {}

  addItemtoBank(itemId) {}

  removeItemfromBank(itemId) {}
}
