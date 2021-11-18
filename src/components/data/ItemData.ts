import { Consumable } from "./items/Consumable"
import { Equipment } from "./items/Equipment"

import { itemSeed } from "./seed/itemSeed"
import { equipmentSeed } from "./seed/equipmentSeed"

// on loads creates all of the items in game data.
export class ItemData {
  consumable: Map<number, Consumable> = new Map()
  equipment: Map<number, Equipment> = new Map()

  constructor() {
    this.createUseableItems()
    this.createEquipmentItems()
  }

  createUseableItems() {
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
    if (id > 20000) {
      return this.equipment.get(id)
    } else {
      return this.consumable.get(id)
    }
  }
}
