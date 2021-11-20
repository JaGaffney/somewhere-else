import { Item } from "../items/Item"

export class ShopSpace {
  name: string
  unique: boolean
  playerPurchased: boolean = false
  item: Item

  constructor(name: string, unique: boolean, item: Item) {
    this.name = name
    this.unique = unique
    this.item = item
  }

  // checks if player has purchased unique item previously, if true returns null
  // sets unique purchase of player to true if player never owned item before
  // returns qty and price of item if it is not unique and not previously purchased
  getItemTotalPrice(qty: number): number {
    if (this.playerPurchased) {
      return null
    }
    if (this.unique) {
      this.playerPurchased = true
      return this.item.price * 1
    }
    return this.item.price & qty
  }
}
