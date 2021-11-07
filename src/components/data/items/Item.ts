import { Rarity } from "../enums/Rarity"
import { enumFromValue } from "../enums/enumFromValue"

// the base class that all items inherit from that contains all the data that is relevant to all items
// regardless of what type they are
export abstract class Item {
  name: string
  price: number
  rarity: Rarity

  constructor(name: string, price: number, rarity: string) {
    this.name = name
    this.price = price
    this.rarity = enumFromValue(rarity, Rarity)
  }
}
