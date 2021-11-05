// on load creates all of the ingame data for the player.
import { Bank } from "./player/bank/Bank"
import { SkillEXP } from "./player/SkillExp"
import { Passives } from "./player/Passives"
import { Inventory } from "./player/Inventory"

export class PlayerData {
  playerBank: Bank
  skillExp: SkillEXP
  passives: Passives
  inventory: Inventory

  constructor(skillNames: Array<string>) {
    this.createBank()
    this.createSkills(skillNames)
    this.createPassives()
    this.createInventory()
  }

  createSkills(skillNames: Array<string>): void {
    this.skillExp = new SkillEXP(skillNames)
  }

  createBank(): void {
    this.playerBank = new Bank()
  }

  createInventory(): void {
    this.inventory = new Inventory()
  }

  createPassives(): void {
    this.passives = new Passives()
  }

  // setters
  loadPlayerData(data) {
    this.loadSkillEXP(data.skillExp)
    this.loadBank(data.bank)
    this.loadInventory(data.inventory)
    this.loadPassives(data.passives)
  }
  // loads from local storage
  loadSkillEXP(skillData): void {
    for (const skill in skillData) {
      this.skillExp[skill] = skillData[skill]
    }
  }
  loadBank(bankData): void {
    this.playerBank.setBankSpace(bankData.bankSpace)

    for (const item in bankData.bankItems) {
      this.playerBank.addItemtoBank(
        bankData.bankItems[item].itemId,
        bankData.bankItems[item].qty
      )
    }
  }
  loadInventory(inventoryData) {
    for (const slot in inventoryData) {
      this.inventory.setEquippedItem(slot, inventoryData[slot])
    }
  }
  loadPassives(passiveData) {
    for (const name in passiveData.unlockedPassives) {
      this.passives.addNewUnlockedPassive(name)
    }
    for (const location in passiveData.equippedPassives) {
      this.passives.changeEquippedPassives(
        parseInt(location),
        passiveData.equippedPassives[location]
      )
    }
  }
}
