import { ShopSpace } from "./ShopSpace"
import { Bank } from "../player/bank/Bank"

export class Shop {
  shopItems: Map<number, ShopSpace> = new Map()

  constructor(shopSeed: Object) {
    for (const key in shopSeed) {
      this.shopItems.set(
        shopSeed[key].id,
        new ShopSpace(
          shopSeed[key].name,
          shopSeed[key].unique,
          shopSeed[key].item
        )
      )
    }
  }

  buyShopItem(itemId: number, qty: number, bank: Bank) {
    let item = this.shopItems.get(itemId)
    let itemPrice = item.getItemTotalPrice(qty)
    if (itemPrice != null) {
      let transaction = bank.getCoins() - itemPrice
      if (transaction >= 0) {
        bank.removeFromCoins(itemPrice)
        bank.addItemtoBank(itemId, qty, item.item)
        console.log("player purchased item: ", item.item.name, qty)
      }
      console.log("player bank has insufficient funds for purchase")
    }
    console.log("player has already got this item")
  }
}
