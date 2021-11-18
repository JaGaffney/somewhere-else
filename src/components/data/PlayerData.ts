// on load creates all of the ingame data for the player.
import { Bank } from "./player/bank/Bank"
import { SkillEXP } from "./player/SkillExp"
import { Passives } from "./player/Passives"
import { Inventory } from "./player/Inventory"
import { EXP } from "./player/Exp"

export class PlayerData {
  playerBank: Bank
  skillExp: SkillEXP
  passives: Passives
  inventory: Inventory
  levelChecker: EXP = new EXP()

  constructor(skillNames: Array<string>) {
    this.createBank()
    this.createSkills(skillNames)
    this.createPassives()
    this.createInventory()
  }

  private createSkills(skillNames: Array<string>): void {
    this.skillExp = new SkillEXP(skillNames)
  }

  private createBank(): void {
    this.playerBank = new Bank()
  }

  private createInventory(): void {
    this.inventory = new Inventory()
  }

  private createPassives(): void {
    this.passives = new Passives()
  }

  // getters
  public getSkillExp(skillName: string): number {
    return this.skillExp.skillExp[skillName]
  }

  // setters
  public setSkillExp(skillName: string, amount: number): void {
    this.skillExp.skillExp[skillName] =
      this.skillExp.skillExp[skillName] + amount
  }

  loadPlayerData(data) {
    this.loadSkillEXP(data.skillExp)
    this.loadBank(data.playerBank)
    this.loadInventory(data.inventory)
    this.loadPassives(data.passives)
  }

  // loads from local storage
  private loadSkillEXP(skillData): void {
    for (const skill in skillData) {
      this.skillExp.skillExp[skill] = skillData[skill]
    }
  }

  private loadBank(bankData): void {
    this.playerBank.setBankSpace(bankData.bankSpace)
    this.playerBank.setCoins(bankData.coins)

    let deserialized = new Map(JSON.parse(bankData.bankItems))
    deserialized.forEach((k: any, v: any) => {
      this.playerBank.addItemtoBank(v, k.qty, k.item)
    })
  }

  private loadInventory(inventoryData) {
    for (const slot in inventoryData) {
      this.inventory.setEquippedItem(slot, inventoryData[slot])
    }
  }
  private loadPassives(passiveData) {
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
