import { Attack } from "../../data/attacks/Attack"
import { currentStatCalculator } from "../../utils/equipment"
interface ICombatData {
  enemy: Object
  player: Object
}

/**
 * Tells you if the attack your trying to make is possible based it on its
 * current cooldown.
 * @param combatData
 * @returns boolean
 */
export const attackPossibleCooldown = (combatData): boolean => {
  if (combatData.cooldown.current > 0) {
    // TODO: show errors if attack not possible
    //setAttackErrors({ ...attackErrors, cooldown: true })
    return false
  }
  return true
}

/**
 * Checks for all valid combat skills in order to give you data on skills
 * that have been unlocked by the player.
 * @param skills
 * @param playerData
 * @returns String[]
 */
export const getValidCombatSkills = (skills, playerData): String[] => {
  const tempCombatSkills = skills.getAllCombatSkills()
  const tempResearchSkills = Object.keys(playerData.research.singular)
  let unlockedSkills: string[] = []

  if (tempResearchSkills.length <= 0) {
    return unlockedSkills
  }

  for (let skill in tempCombatSkills) {
    if (tempResearchSkills.includes(tempCombatSkills[skill])) {
      unlockedSkills.push(tempCombatSkills[skill])
    }
  }
  return unlockedSkills
}

/**
 * Gives the player exp based on different parameters, will need tweeking for balance
 * @param damage
 * @param attackData
 * @param playerDead
 * @param playerTurn
 * @param skills
 * @param playerData
 */
export const handleExpGained = (
  damage: number,
  attackData,
  playerDead: boolean,
  playerTurn: boolean,
  skills,
  playerData
) => {
  const expGained = Math.floor(damage) * 3 + attackData.exp
  // when player dies it resets exp unless this is checked?
  if (!playerDead && playerTurn) {
    if (attackData.type.toLocaleLowerCase() === "general") {
      const unlockedCombatSkills = getValidCombatSkills(skills, playerData)
      for (let skill in unlockedCombatSkills) {
        playerData.setSkillExp(
          unlockedCombatSkills[skill],
          Math.floor(expGained / 3)
        )
      }
    } else {
      playerData.setSkillExp(attackData.type.toLowerCase(), expGained)
    }
  }
}

/**
 * Determines if there is enough stamina to perform the attack
 * @param activePlayer
 * @param attackData
 * @param itemData
 * @param playerData
 * @param combatData
 * @returns
 */
const attackPossibleStamina = (
  activePlayer: string,
  attackData: Attack,
  itemData,
  playerData,
  combatData
): boolean => {
  let currentStamina: number = 0
  if (activePlayer === "player") {
    let staminaFromStats = 0
    if (currentStatCalculator(itemData, playerData.inventory)["encumbrance"]) {
      staminaFromStats = currentStatCalculator(itemData, playerData.inventory)[
        "encumbrance"
      ]
    }
    currentStamina = playerData.status.stamina.getCurrent() - staminaFromStats
  } else {
    currentStamina = combatData.status.stamina.getCurrent()
  }

  if (currentStamina < attackData.stamina) {
    //setAttackErrors({ ...attackErrors, stamina: true })
    return false
  }
  return true
}

/**
 * Determines what attack should happen next when in auto combat mode or its the enemys turn
 * @param activePlayer
 * @param combatData
 * @param props
 * @returns
 */
export const rotationHandler = (
  activePlayer: string,
  combatData: ICombatData,
  props
): number | null => {
  let validAttack = null
  for (const attack in combatData[activePlayer]) {
    const attackID = combatData[activePlayer][attack].id
    const attackData: Attack = props.attackData.getAttackById(attackID)
    // handle empty roation spots
    if (attackID !== null) {
      const stamina = attackPossibleStamina(
        activePlayer,
        attackData,
        props.itemData,
        props.playerData,
        props.combatData
      )
      const cooldown = attackPossibleCooldown(
        combatData[activePlayer][parseInt(attack)]
      )
      // find first viable attack
      if (stamina && cooldown) {
        validAttack = attackID
        break
      }
    }
  }
  return validAttack
}
