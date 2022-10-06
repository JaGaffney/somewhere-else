import { Item } from "../../items/Item"
export class Bankslot {
  id: number
  qty: number

  constructor(id: number, qty: number) {
    this.id = id
    this.qty = qty
  }

  getItemTotalPrice(item): number {
    if (item) {
      return item.price * this.qty
    } else {
      return 0
    }
  }
}
