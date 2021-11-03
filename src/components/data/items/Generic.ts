import { Item } from "./Item"

// on loads creates all of the items in game data.
export class Generic extends Item {
  consumeable: boolean

  constructor(
    id: number,
    name: string,
    price: number,
    rarity: string,
    consumeable: boolean
  ) {
    super(id, name, price, rarity)
    this.consumeable = consumeable
  }
}
