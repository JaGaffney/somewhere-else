import { Generic } from "./items/Generic"
import { Equipment } from "./items/Equipment"

import { itemSeed } from "./seed/itemSeed"
import { equipmentSeed } from "./seed/equipmentSeed"

// on loads creates all of the items in game data.
export class ItemData {
  generic: Map<number, Generic> = new Map()
  equipment: Map<number, Equipment> = new Map()

  constructor() {
    this.createUseableItems()
    this.createEquipmentItems()
  }

  createUseableItems() {
    for (const key in itemSeed) {
      this.generic.set(
        itemSeed[key].id,
        new Generic(
          itemSeed[key].name,
          itemSeed[key].price,
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

  getItemById(id) {}
}
