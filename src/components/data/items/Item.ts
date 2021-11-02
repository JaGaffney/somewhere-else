import { Rarity } from "../enums/Rarity"

// the base class that all items inherit from that contains all the data that is relevant to all items
// regardless of what type they are
export abstract class Item {
  id: string
  name: string
  price: number
  rare: Rarity

  constructor(rarity: Rarity) {
    this.rare = rarity
  }
}
