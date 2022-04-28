import { Consumable } from "./items/Consumable"
import { Equipment } from "./items/Equipment"
import { Item } from "./items/Item"

import { Shop } from "./shop/Shop"

import { itemSeed } from "./seed/itemSeed"
import { equipmentSeed } from "./seed/equipmentSeed"
import { shopSeed } from "./seed/shopSeed"

// on loads creates all of the items in game data.
export class ItemData {
  generic: Map<number, Item> = new Map()
  consumable: Map<number, Consumable> = new Map()
  equipment: Map<number, Equipment> = new Map()
  shop: Shop

  constructor() {
    this.createItems()
    this.createConsumableItems()
    this.createEquipmentItems()
    //this.shop = new Shop(shopSeed)
  }

  createItems() {
    for (const key in itemSeed) {
      console.log(key)
      this.generic.set(
        itemSeed[key].id,
        new Item(
          itemSeed[key].name,
          itemSeed[key].price,
          itemSeed[key].icon,
          itemSeed[key].description,
          itemSeed[key].rarity
        )
      )
    }
  }
  createConsumableItems() {
    for (const key in itemSeed) {
      this.consumable.set(
        itemSeed[key].id,
        new Consumable(
          itemSeed[key].name,
          itemSeed[key].price,
          itemSeed[key].icon,
          itemSeed[key].description,
          itemSeed[key].rarity,
          itemSeed[key].consumeable
        )
      )
    }
  }

  createEquipmentItems() {
    for (const key in equipmentSeed) {
      this.equipment.set(
        equipmentSeed[key].id,
        new Equipment(
          equipmentSeed[key].name,
          equipmentSeed[key].price,
          equipmentSeed[key].icon,
          equipmentSeed[key].description,
          equipmentSeed[key].rarity,
          equipmentSeed[key].requirementLevel,
          equipmentSeed[key].requirementStyle,
          equipmentSeed[key].slot,
          equipmentSeed[key].equipmentStats,
          equipmentSeed[key].effect
        )
      )
    }
  }

  getItemById(id) {
    let value = Math.floor(id / 10000)
    switch (value) {
      case 1:
      case 4:
        return this.generic.get(id)
      case 2:
        return this.equipment.get(id)
      case 3:
        return this.consumable.get(id)
      default:
        return null
    }
  }
}
