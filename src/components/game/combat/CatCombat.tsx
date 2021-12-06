import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Section from './generics/Section'

import { randomInteger } from "../../utils/generic"

import { Attack } from "../../data/attacks/Attack"

export const CatCombat = (props) => {
    const [combatInProcess, setCombatInProcess] = useState<boolean>(false)
    const [autoCombat, setAutoCombat] = useState(true)
    const [attackSelectedID, setAttackSelectedID] = useState(null)
    const [playerTurn, setPlayerTurn] = useState(true)
    const [attackErrors, setAttackErrors] = useState({
        stamina: false,
        cooldown: false
    })

    const [combatData, setCombatData] = useState({
        player: {},
        enemy: {},
        turn: 0
    })
    const toggleChecked = () =>

        useEffect(() => {
            console.log("start up")
            // build combat engine
            const enemyAttacks = {}
            const attacks = {}

            if (props.combatData) {
                const rotation = props.enemyData.getEnemyById(props.combatData.enemyID).rotation
                for (const attack in rotation) {
                    const attackInfo = props.attackData.getAttackById(parseInt(rotation[parseInt(attack)]))
                    enemyAttacks[parseInt(attack) + 1] = {
                        id: parseInt(rotation[attack]),
                        cooldown: {
                            base: attackInfo.cooldown,
                            current: attackInfo.cooldown
                        }
                    }
                }
            }

            if (props.playerData) {
                const rotation = props.playerData.classes.findJobClass(props.playerData.classes.equippedJobClass).rotation
                for (const attack in rotation) {
                    const attackAsNumber: number = parseInt(attack)
                    const attackInfo = props.attackData.getAttackById(parseInt(rotation[attackAsNumber]))
                    if (attackInfo !== undefined) {
                        attacks[attackAsNumber + 1] = {
                            id: parseInt(rotation[attackAsNumber]),
                            cooldown: {
                                base: attackInfo.cooldown,
                                current: attackInfo.cooldown
                            }
                        }
                    } else {
                        attacks[attackAsNumber + 1] = {
                            id: null,
                            cooldown: {
                                base: null,
                                current: null
                            }
                        }
                    }
                }
            }

            if (props.combatData && props.playerData) {
                setCombatData({ ...combatData, player: attacks, enemy: enemyAttacks })
                setCombatInProcess(true)
            }
        }, [])


    // work out if attack is possible
    const attackPossibleStamina = (activePlayer: string, attackData: Attack): boolean => {
        let currentStamina: number = 0
        if (activePlayer === "player") {
            currentStamina = props.playerData.status.stamina.getCurrent()
        } else {
            currentStamina = props.combatData.status.stamina.getCurrent()
        }
        if (currentStamina < attackData.stamina) {
            console.log("Attack failed due to lack of stamina")
            setAttackErrors({ ...attackErrors, stamina: true })
            return false
        }
        return true
    }
    const attackPossibleCooldown = (attackID: number, activePlayer: string): boolean => {
        if (combatData[activePlayer][attackID].cooldown.current >= 2) {
            console.log("Attack failed due to still being on cooldown")
            setAttackErrors({ ...attackErrors, cooldown: true })
            return false
        }
        return true
    }

    // can also be used to estimate how much damage an attack would do to the enemy before hand
    // could grey out the enemy hp in the avg dmg would do
    const attackDamageCalculator = (attackData: Attack): number => {
        const multiplier = 1 // work out later
        const critChance = 20
        let critDamage = 1.2
        let crit = false

        if (randomInteger(1, 100) < critChance) {
            crit = true
        }
        let damage = randomInteger(attackData.minDamage, attackData.maxDamage) * multiplier

        if (crit) {
            damage = damage * critDamage
        }
        return damage
    }
    const resolveDamageDealt = (attackID: number, activePlayer: string, attackData: Attack, damage: number): void => {
        // remove enemy hp
        // remove stamina
        // put on cd
        if (activePlayer === "player") {
            props.combatData.status.health.setCurrent(props.combatData.status.health.getCurrent() - damage)
            props.playerData.status.stamina.setCurrent(props.playerData.status.stamina.getCurrent() - attackData.stamina)
        } else {
            props.playerData.status.health.setCurrent(props.playerData.status.health.getCurrent() - damage)
            props.combatData.status.stamina.setCurrent(props.combatData.status.stamina.getCurrent() - attackData.stamina)
        }
        combatData[activePlayer][attackID].cooldown.current = combatData[activePlayer][attackID].cooldown.base
    }

    const rotationHandler = (activePlayer: string): number | null => {
        let validAttack = null
        for (const attack in combatData[activePlayer]) {
            const attackID = combatData[activePlayer][attack].id
            const attackData: Attack = props.attackData.getAttackById(attackID)
            // handle empty roation spots
            if (attackID !== null) {
                const stamina = attackPossibleStamina(activePlayer, attackData)
                const cooldown = attackPossibleCooldown(parseInt(attack), activePlayer)
                // find first viable attack
                if (stamina && cooldown) {
                    validAttack = attackID
                    break
                }
            }
        }
        return validAttack
    }
    const onAttackHandler = (attackID: number) => {
        console.log(attackID)
        setAttackSelectedID(attackID)
    }


    const handleAttackInput = (attackID: number, activePlayer: string) => {
        const attackData: Attack = props.attackData.getAttackById(attackID)

        // work out attack damage
        const damage = Math.round(attackDamageCalculator(attackData))
        console.log(damage)

        // do calcs on attack
        resolveDamageDealt(attackID, activePlayer, attackData, damage)

        // resolve death
        if (enemyDead()) {
            console.log("enemy dead")
            return "Enemy dead"
        }
        if (playerDead()) {
            return "Player dead"
        }
    }

    const enemyDead = () => {
        return props.combatData.status.health.getCurrent() < 0
    }
    const playerDead = () => {
        return props.playerData.status.health.getCurrent() < 0
    }
    const gameEngineStart = async () => {
        while (!enemyDead() && !playerDead()) {
            let whoseGoIsIt = "player"
            if (playerTurn) {
                whoseGoIsIt = "player"
            } else {
                // add a wait here ?
                whoseGoIsIt = "enemy"
            }

            console.log(whoseGoIsIt, playerTurn)
            if (autoCombat) {
                // find first viable attack?
                const attackID = rotationHandler(whoseGoIsIt)

                // calculate damage + resolve damage
                handleAttackInput(attackID, whoseGoIsIt)

                // handle death + loot


            } else {
                // if (attackSelectedID) {
                //     const attackID = combatData[whoseGoIsIt][attack].id
                //     const attackData: Attack = props.attackData.getAttackById(attackID)
                //     // handle empty roation spots
                //     if (attackID !== null) {
                //         const stamina = attackPossibleStamina(whoseGoIsIt, attackData)
                //         const cooldown = attackPossibleCooldown(parseInt(attack), whoseGoIsIt)

                // }
            }
            // next turn
            setPlayerTurn(value => !value) // doesnt work

            await timer(3000)
        }
    }



    const timer = ms => new Promise(res => setTimeout(res, ms))

    // TEMP
    const handleTesting = () => {
    }
    const healTesting = () => {
        props.playerData.status.health.setCurrent(props.playerData.status.health.getBase())
        props.playerData.status.stamina.setCurrent(props.playerData.status.stamina.getBase())
    }

    return (
        <div className="catcombat__container">
            <button onClick={healTesting}>Heal</button>
            <button onClick={gameEngineStart}>Tester</button>
            <Section type="player" data={props.playerData} onAttackHandler={onAttackHandler} />
            <Section type="enemy" data={props.combatData} />
        </div>
    )
}


const mapStateToProps = (state) => ({
    combatData: state.engine.combatData,
    playerData: state.player.playerData,
    attackData: state.attacks.attackData,
    enemyData: state.enemies.enemyData
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CatCombat)
