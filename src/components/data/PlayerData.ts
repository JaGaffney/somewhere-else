// on load creates all of the ingame data for the player.
import { Bank } from "./player/bank/Bank"
import { Settlement } from "./player/Settlement"
import { SkillEXP } from "./player/SkillExp"
import { Passives } from "./player/Passives"
import { Inventory } from "./player/Inventory"
import { Classes } from "./player/Classes"
import { Status } from "./player/Status"
import { EXP } from "./player/Exp"

export class PlayerData {
  playerBank: Bank
  settlement: Settlement
  skillExp: SkillEXP
  passives: Passives
  inventory: Inventory
  status: Status
  classes: Classes
  levelChecker: EXP = new EXP()
  settings: Object

  // creates the player with no data inside
  constructor(skillNames: Array<string>, jobClassID: Array<number>) {
    this.settlement = new Settlement()
    this.playerBank = new Bank()
    this.skillExp = new SkillEXP(skillNames)
    this.passives = new Passives()
    this.status = new Status()
    this.inventory = new Inventory()
    this.classes = new Classes(jobClassID)
    this.settings = {}
  }

  // getters
  public getSkillExp(skillName: string): number {
    return this.skillExp.skillExp[skillName]
  }

  public getManpower(): number {
    return this.settlement.getManpower()
  }
  public getActiveManpower(): number {
    return this.settlement.getActiveManpower()
  }

  public getSettingValue(key: string): any {
    return this.settings[key]
  }

  // setters
  public setSkillExp(skillName: string, amount: number): void {
    this.skillExp.skillExp[skillName] =
      this.skillExp.skillExp[skillName] + amount
  }

  public setManpower(amount: number): void {
    this.settlement.addManpower(amount)
  }

  public updateSettings(key: string, value): void {
    if (this.settings === undefined) {
      this.settings = {}
    }
    this.settings[key] = value
  }

  // loads data once player is created
  loadPlayerData(data, itemData): void {
    this.loadSkillEXP(data.skillExp)
    this.loadBank(data.playerBank, itemData)
    this.loadSettlment(data.settlement)
    this.loadInventory(data.inventory)
    this.loadPassives(data.passives)
    this.loadStatus(data.status)
    this.loadClasses(data.classes)
    this.loadSettings(data.settings)
  }

  // loads from local storage
  private loadSkillEXP(skillData): void {
    for (const skill in skillData) {
      this.skillExp.skillExp[skill] = skillData[skill]
    }
  }

  private loadBank(bankData, itemData): void {
    this.playerBank.setBankSpace(bankData.bankSpace)
    this.playerBank.setCoins(bankData.coins)

    let deserialized = new Map(JSON.parse(bankData.bankItems))
    deserialized.forEach((k: any, v: any) => {
      let item = itemData.getItemById(v)
      this.playerBank.addItemtoBank(v, k.qty, item)
    })
  }

  private loadSettlment(settlementData): void {
    this.settlement.setManpower(settlementData.manpower)
    this.settlement.setTasks(settlementData.tasks)
  }

  private loadInventory(inventoryData): void {
    for (const slot in inventoryData) {
      this.inventory.setEquippedItem(slot, inventoryData[slot])
    }
  }

  private loadPassives(passiveData): void {
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

  private loadStatus(data): void {
    this.status.loadStatus(data)
  }

  private loadClasses(data): void {
    let deserialized = new Map(JSON.parse(data.jobClass))
    deserialized.forEach((k: any, v: any) => {
      this.classes.findJobClass(v).setRotation(k.rotation)
      this.classes.findJobClass(v).setEquippedAttacks(k.equippedAttacks)
    })
  }

  private loadSettings(data): void {
    console.log("got here", data)
    this.settings = data
  }
}
