// on load creates all of the ingame data for the player.
import { Bank } from "./player/bank/Bank"
import { Settlement } from "./player/Settlement"
import { SkillEXP } from "./player/SkillExp"
import { Inventory } from "./player/Inventory"
import { Loadout } from "./player/Loadout"
import { Status } from "./player/Status"
import { EXP } from "./player/Exp"
import { Research } from "./player/Research"
import { Offline } from "./player/Offline"

export class PlayerData {
  playerBank: Bank
  settlement: Settlement
  skillExp: SkillEXP
  inventory: Inventory
  status: Status
  loadout: Loadout
  levelChecker: EXP = new EXP()
  research: Research
  settings: Object
  offline: Offline

  // creates the player with no data inside
  constructor(skillNames: Array<string>) {
    this.settlement = new Settlement()
    this.playerBank = new Bank()
    this.skillExp = new SkillEXP(skillNames)
    this.status = new Status()
    this.inventory = new Inventory()
    this.loadout = new Loadout()
    this.research = new Research()
    this.settings = {}
    this.offline = new Offline()
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
    this.skillExp.skillExp[skillName] = Math.round(
      this.skillExp.skillExp[skillName] + amount
    )
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
  public updateResearch(researchType: boolean, key: string, value): void {
    this.updateResearch(researchType, key, value)
  }

  // loads data once player is created
  loadPlayerData(data): void {
    this.loadSkillEXP(data.skillExp)
    this.loadBank(data.playerBank)
    this.loadSettlment(data.settlement)
    this.loadInventory(data.inventory)
    this.loadStatus(data.status)
    this.loadLoadout(data.loadout)
    this.loadSettings(data.settings)
    this.loadResearch(data?.research)
  }

  // loads from local storage
  private loadSkillEXP(skillData): void {
    for (const skill in skillData) {
      this.skillExp.skillExp[skill] = skillData[skill]
    }
  }

  private loadBank(bankData): void {
    this.playerBank.setCoins(bankData.coins)
    this.playerBank.setResearch(bankData.research)
    this.playerBank.setTribute(bankData.tribute)
    bankData.bankItems.forEach(({ id, qty }) => {
      this.playerBank.addItemtoBank(id, qty)
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

  private loadStatus(data): void {
    this.status.loadStatus(data)
  }

  private loadLoadout(data): void {
    this.loadout.loadLoadout(data)
  }

  private loadResearch(data): void {
    this.research.setRepeat(data?.repeat)
    this.research.setSingular(data?.singular)
  }

  private loadSettings(data): void {
    this.settings = data
  }

  public getTotalBankSpaceWithStorage = () => {
    const storageResearch = this.research.getRepeatValue("storage")
    return this.playerBank.bankSpace + storageResearch
  }
}
