import { Rarity } from "../enums/Rarity"
import { enumFromValue } from "../enums/enumFromValue"

// the base class that all items inherit from that contains all the data that is relevant to all items
// regardless of what type they are
export class Item {
  name: string
  price: number
  icon: any
  description: string
  rarity: Rarity
  itemType: string

  constructor(
    name: string,
    price: number,
    icon: any,
    description: string,
    rarity: string,
    itemType: string
  ) {
    this.name = name
    this.price = price
    this.icon = icon
    this.description = description
    this.rarity = enumFromValue(rarity, Rarity)
    this.itemType = itemType
  }
}
