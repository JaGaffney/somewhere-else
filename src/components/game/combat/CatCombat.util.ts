import { Attack } from "../../data/attacks/Attack"
import {
  currentStatCalculator,
  getValidCombatSkills,
} from "../../utils/equipment"

interface IAttackCooldownData {
  enemy: Object
  player: Object
  turn: number
}

/**
 * Tells you if the attack your trying to make is possible based it on its
 * current cooldown.
 * @param attackCooldownData
 * @returns boolean
 */
export const attackPossibleCooldown = (attackCooldownData): boolean => {
  if (attackCooldownData.cooldown.current > 0) {
    // TODO: show errors if attack not possible
    //setAttackErrors({ ...attackErrors, cooldown: true })
    return false
  }
  return true
}

export const validRotationSetup = (rotation): boolean => {
  let count = 0
  console.log(rotation)
  for (let attack in rotation) {
    console.log(rotation[attack])
    if (rotation[attack].id === null) {
      count += 1
    }
  }

  return count === 6 ? false : true
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
  attackCooldownData: IAttackCooldownData,
  props
): number | null => {
  console.log(attackCooldownData)

  let validAttack = null
  for (const attack in attackCooldownData[activePlayer]) {
    const attackID = attackCooldownData[activePlayer][attack].id
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
        attackCooldownData[activePlayer][parseInt(attack)]
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

/**
 * Removes or adds stamina once an attack is used
 * @param stamina
 * @param value
 * @param activePlayer
 */
export const staminaHandler = (
  stamina,
  value: number,
  activePlayer: string,
  tempBaseStaminaRegen: number
): void => {
  console.log("got here")
  // stamina cost of attack
  if (value === 0) {
    stamina.setCurrent(stamina.getCurrent() - value)
  } else {
    if (activePlayer === "player") {
      stamina.setCurrent(stamina.getCurrent() - value)
    } else {
      stamina.setCurrent(stamina.getCurrent() - value)
    }
  }

  // stamina regen
  if (stamina.getCurrent() + tempBaseStaminaRegen >= stamina.getBase() + 100) {
    stamina.setCurrent(stamina.getBase() + 100)
  } else {
    stamina.setCurrent(stamina.getCurrent() + tempBaseStaminaRegen)
  }
}
