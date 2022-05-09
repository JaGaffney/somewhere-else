import { Item } from "../../items/Item"
export class Bankslot {
  qty: number
  bankLocation: number
  item: Item

  constructor(qty: number, bankLocation: number, item: Item) {
    this.qty = qty
    this.bankLocation = bankLocation
    this.item = item
  }

  getItemTotalPrice(): number {
    if (this.item) {
      return this.item.price * this.qty
    } else {
      0
    }
  }
}
