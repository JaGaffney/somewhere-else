import { Consumable } from "./items/Consumable"
import { Equipment } from "./items/Equipment"
import { Item } from "./items/Item"

import { Shop } from "./shop/Shop"

import { itemSeed } from "./seed/itemSeed"
import { shopSeed } from "./seed/shopSeed"

// on loads creates all of the items in game data.
export class ItemData {
  shop: Shop
  items: Map<number, Item> = new Map()

  constructor() {
    this.createItemByType()
  }

  private createItemByType(): void {
    for (const key in itemSeed) {
      switch (itemSeed[key].itemType) {
        case "generic":
          this.items.set(
            itemSeed[key].id,
            this.createGenericItems(itemSeed[key])
          )
          break
        case "equipment":
          this.items.set(
            itemSeed[key].id,
            this.createEquipmentItems(itemSeed[key])
          )
          break
        case "consumeable":
          this.items.set(
            itemSeed[key].id,
            this.createConsumableItems(itemSeed[key])
          )
          break
        default:
          console.log(`ERROR Adding ${itemSeed[key].id} to itemData`)
          break
      }
    }
  }

  createGenericItems(data) {
    return new Item(
      data.name,
      data.price,
      data.icon,
      data.description,
      data.rarity,
      data.itemType
    )
  }
  createConsumableItems(data) {
    return new Consumable(
      data.name,
      data.price,
      data.icon,
      data.description,
      data.rarity,
      data.itemType,
      data.consumeable
    )
  }

  createEquipmentItems(data) {
    return new Equipment(
      data.name,
      data.price,
      data.icon,
      data.description,
      data.rarity,
      data.itemType,
      data.requirementLevel,
      data.slot,
      data.equipmentStats,
      data.effect
    )
  }

  getItemById(id: number) {
    return this.items.get(id)
  }
}
