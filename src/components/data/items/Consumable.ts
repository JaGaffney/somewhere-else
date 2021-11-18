import { Item } from "./Item"

// on loads creates all of the items in game data.
export class Consumable extends Item {
  consumable: boolean

  constructor(
    name: string,
    price: number,
    icon: any,
    description: string,
    rarity: string,
    consumable: boolean
  ) {
    super(name, price, icon, description, rarity)
    this.consumable = consumable
  }
}
