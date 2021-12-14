import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setCombatData } from "../../actions/api"

import Section from './generics/Section'

import { randomInteger } from "../../utils/generic"
import { Attack } from "../../data/attacks/Attack"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CatCombat = (props) => {
    const [combatInProcess, setCombatInProcess] = useState<boolean>(false)
    const [autoCombat, setAutoCombat] = useState(true)
    const [playerTurn, setPlayerTurn] = useState(false)
    const [timer, setTimer] = useState(0)
    const [attackSelectedID, setAttackSelectedID] = useState(null)
    const [attackErrors, setAttackErrors] = useState({
        stamina: false,
        cooldown: false
    }) // not in use
    const [combatData, setCombatData] = useState({
        player: {},
        enemy: {},
        turn: 0
    })
    const [damageOverlay, setDamageOverlay] = useState({
        playerHealth: null,
        playerArmour: null,
        enemyHealth: null,
        enemyArmour: null,
    })
    const [staminaOverlay, setStaminaOverlay] = useState({
        player: null,
        enemy: null
    })

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

    useEffect(() => {
        const intervalRefresh = setInterval(() => {
            updateTime()
            if (combatInProcess) {
                if (timer > 2500) {
                    console.log("Attacking")

                    if (props.combatData && props.playerData) {
                        gameEngineStart()
                    }
                    setTimer(0)
                }
            }

        }, 250);
        return () => clearInterval(intervalRefresh);
    }, [timer, playerTurn]);


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
        // remove enemy hp - DONE
        // remove stamina - DONE
        // put on cd - DONE
        // work out armour
        if (activePlayer === "player") {
            // setters
            let armourValue = props.combatData.status.armour.getCurrent() - damage
            if (armourValue < 0) {
                setDamageOverlay({
                    playerHealth: null,
                    playerArmour: null,
                    enemyHealth: - damage,
                    enemyArmour: props.combatData.status.armour.getCurrent()
                })

                props.combatData.status.health.setCurrent(props.combatData.status.health.getCurrent() + armourValue)
                props.combatData.status.armour.setCurrent(0)

            } else {
                setDamageOverlay({
                    playerHealth: null,
                    playerArmour: null,
                    enemyHealth: 0,
                    enemyArmour: - damage
                })

                props.combatData.status.armour.setCurrent(armourValue)
            }
            props.playerData.status.stamina.setCurrent(props.playerData.status.stamina.getCurrent() - attackData.stamina)

            setStaminaOverlay({ player: null, enemy: - attackData.stamina })
        } else {
            // setters
            let armourValue = props.playerData.status.armour.getCurrent() - damage
            if (armourValue < 0) {
                setDamageOverlay({
                    playerHealth: - damage,
                    playerArmour: props.playerData.status.armour.getCurrent(),
                    enemyHealth: null,
                    enemyArmour: null
                })

                props.playerData.status.health.setCurrent(props.playerData.status.health.getCurrent() + armourValue)
                props.playerData.status.armour.setCurrent(0)
            } else {
                setDamageOverlay({
                    playerHealth: "0",
                    playerArmour: - damage,
                    enemyHealth: null,
                    enemyArmour: null
                })

                props.playerData.status.armour.setCurrent(armourValue)
            }
            props.combatData.status.stamina.setCurrent(props.combatData.status.stamina.getCurrent() - attackData.stamina)

            // ui
            setStaminaOverlay({ player: -attackData.stamina, enemy: null })
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

    const onAttackHandler = (attackID: number): void => {
        setAttackSelectedID(attackID)
    }


    const handleAttackInput = (attackID: number, activePlayer: string): string => {
        const attackData: Attack = props.attackData.getAttackById(attackID)

        // work out attack damage
        const damage = Math.round(attackDamageCalculator(attackData))
        console.log(activePlayer, " dealt: ", damage)

        // do calcs on attack
        resolveDamageDealt(attackID, activePlayer, attackData, damage)

        // resolve death
        if (enemyDead()) {
            console.log("Enemy dead")
            const enemyData = props.enemyData.getEnemyById(props.combatData.enemyID)
            notifyWithImage(`You have slain a ${enemyData.name}`, enemyData.image)

            handleLoot(enemyData)

            // spawn "new" monster
            props.combatData.status.health.setCurrent(props.combatData.status.health.getBase())
            props.combatData.status.stamina.setCurrent(props.combatData.status.stamina.getBase())
            props.combatData.status.armour.setCurrent(props.combatData.status.armour.getBase())


            setDamageOverlay({ playerHealth: null, playerArmour: null, enemyHealth: null, enemyArmour: null })
            setStaminaOverlay({ player: null, enemy: null })
            return "Enemy dead"
        }
        if (playerDead()) {
            console.log("Player dead")

            setDamageOverlay({ playerHealth: null, playerArmour: null, enemyHealth: null, enemyArmour: null })
            setStaminaOverlay({ player: null, enemy: null })
            return "Player dead"
        }
        return "next turn"
    }

    const enemyDead = (): boolean => {
        return props.combatData.status.health.getCurrent() <= 0
    }
    const playerDead = (): boolean => {
        return props.playerData.status.health.getCurrent() <= 0
    }
    const handleLoot = (data) => {
        const coins = data.drops.coins
        const drops = data.drops.drops
        const randomNumber = randomInteger(1, 100)

        if (randomNumber < coins.chance) {
            const coinsReceived = randomInteger(coins.min, coins.max)
            props.playerData.playerBank.addToCoins(coinsReceived)
            notifyWithImage(`${coinsReceived} coins added to bank`, require("../../../images/items/coins.svg"))
        }
        // need to work out loot randomness
        const item = props.itemData.getItemById(drops[0].id)
        props.playerData.playerBank.addItemtoBank(drops[0].id, drops[0].qty, item)
        notifyWithImage(`${drops[0].qty} ${item.name} added to bank`, item.icon)


    }

    const currentTurn = (): string => {
        if (playerTurn) {
            return "player"
        } else {
            // add a wait here ?
            return "enemy"
        }
    }
    const gameEngineStart = (): void => {
        if (!enemyDead() && !playerDead() && combatInProcess) {
            let whoseGoIsIt = currentTurn()

            if (autoCombat || whoseGoIsIt === "enemy") {
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
            setPlayerTurn(!playerTurn) // doesnt work
        }
    }

    const updateTime = (): void => {
        setTimer(timer + 250)
    }



    const autoCombatHandler = (): void => {
        setAutoCombat(true)
        setCombatInProcess(true)
    }

    const runAwayHandler = (): void => {
        setAutoCombat(false)
        setCombatInProcess(false)
        props.setCombatData(null)
    }

    // TEMP
    const healTesting = () => {
        props.playerData.status.health.setCurrent(props.playerData.status.health.getBase())
        props.playerData.status.stamina.setCurrent(props.playerData.status.stamina.getBase())
        props.playerData.status.armour.setCurrent(props.playerData.status.armour.getBase())
    }

    const killTesting = () => {
        props.combatData.status.health.setCurrent(1)
        props.combatData.status.armour.setCurrent(0)
    }


    const notifyWithImage = (value: string, url: string): void => {
        toast(value, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            icon: () => <img style={{ margin: 0 }} src={url} />
        });
    };



    return (
        <div className="catcombat__container">
            <div>
                <button onClick={healTesting}>Heal</button>
                <button onClick={killTesting}>Kill</button>
            </div>
            <Section
                type="player"
                currentTurn={currentTurn}
                data={props.playerData}
                onAttackHandler={onAttackHandler}
                autoCombatHandler={autoCombatHandler}
                damageOverlay={damageOverlay}
                staminaOverlay={staminaOverlay}
            />
            <Section
                type="enemy"
                currentTurn={currentTurn}
                data={props.combatData}
                runAwayHandler={runAwayHandler}
                damageOverlay={damageOverlay}
                staminaOverlay={staminaOverlay}
            />
            <ToastContainer
                position="bottom-right"
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div >
    )
}


const mapStateToProps = (state) => ({
    combatData: state.engine.combatData,
    playerData: state.player.playerData,
    attackData: state.attacks.attackData,
    enemyData: state.enemies.enemyData,
    itemData: state.items.itemData,
})

const mapDispatchToProps = {
    setCombatData
}

export default connect(mapStateToProps, mapDispatchToProps)(CatCombat)
