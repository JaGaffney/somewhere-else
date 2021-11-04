// on load creates all of the ingame data for the player.
import { Bank } from "./player/bank/Bank"
import { SkillEXP } from "./player/SkillExp"
import { Passives } from "./player/Passives"

export class PlayerData {
  playerBank: Bank
  skillExp: SkillEXP
  passives: Passives

  constructor(skillNames: Array<string>) {
    this.createSkills(skillNames)
  }

  createSkills(skillNames: Array<string>): void {
    this.skillExp = new SkillEXP(skillNames)
  }

  createBank(): void {
    this.playerBank = new Bank()
  }

  createInventory(): void {}

  createPassives(): void {
    this.passives = new Passives()
  }

  // setters
  // loads from local storage
}
