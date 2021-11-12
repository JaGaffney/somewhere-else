import { Item } from "./Item"

// on loads creates all of the items in game data.
export class Generic extends Item {
  consumeable: boolean

  constructor(
    name: string,
    price: number,
    icon: any,
    description: string,
    rarity: string,
    consumeable: boolean
  ) {
    super(name, price, icon, description, rarity)
    this.consumeable = consumeable
  }
}
