import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setCombatData } from "../../actions/api"

import Section from './generics/Section'
import { handleExpGained, rotationHandler, validRotationSetup, staminaHandler, getPlayerBaseHealth } from './CatCombat.util'

import { randomInteger } from "../../utils/generic"
import { calculateDamage, currentStatCalculator, calculateEnemyDamage, currentPassiveStatCalculator, statMerge } from "../../utils/equipment"
import { Attack } from "../../data/attacks/Attack"

// @ts-ignore
import TOMBESTONE from "../../../images/combat/grave.svg"
// @ts-ignore
import CAT from "../../../images/cat.svg"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IEquipmentStats } from '../../data/items/EquipmentStats'

interface IAttackErrors {
    stamina: boolean
    cooldown: boolean
}
interface IDamageOverlay {
    playerHealth: null | number
    playerArmour: null | number
    enemyHealth: null | number
    enemyArmour: null | number
}
interface IStaminaOverlay {
    player: null | number
    enemy: null | number
}
interface IAttackCooldownData {
    enemy: Object
    player: Object
    turn: number
}

export const CatCombat = (props) => {
    const tempBaseStaminaRegen = 25
    // engine
    const [timer, setTimer] = useState<number>(0)
    const [combatInProcess, setCombatInProcess] = useState<boolean>(false)
    const [autoCombat, setAutoCombat] = useState<boolean>(true)
    const [playerTurn, setPlayerTurn] = useState<boolean>(true)

    // combat data
    const [attackSelectedID, setAttackSelectedID] = useState<null | number>(null)
    const [enemyAttackSelectedID, setEnemyAttackSelectedID] = useState<null | number>(null)
    const [attackCooldownData, setAttackCooldownData] = useState<IAttackCooldownData>({
        enemy: {},
        player: {},
        turn: 0
    })
    const [playerDeadPopup, setPlayerDeadPopup] = useState<boolean>(false)
    const [playerStats, setPlayerStats] = useState<IEquipmentStats>({}) // changed from null to {} - did it break anything?

    // ui data
    const [damageOverlay, setDamageOverlay] = useState<IDamageOverlay>({
        playerHealth: null,
        playerArmour: null,
        enemyHealth: null,
        enemyArmour: null,
    })
    const [staminaOverlay, setStaminaOverlay] = useState<IStaminaOverlay>({
        player: null,
        enemy: null
    })
    const [attackErrors, setAttackErrors] = useState<IAttackErrors>({
        stamina: false,
        cooldown: false
    }) // not in use


    /**
     * Loads the players data everyturn, can handle for new gear/passives
     */
    useEffect(() => {
        const currentStats = currentStatCalculator(props.itemData, props.playerData.inventory)
        const passiveStats = currentPassiveStatCalculator(props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout), props.passiveData)
        const totalPlayerStats = statMerge(currentStats, passiveStats)
        setPlayerStats(totalPlayerStats)
    }, [playerTurn])

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
                        current: 0
                    }
                }
            }
        }

        if (props.playerData) {
            if (props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout)) {
                const rotation = props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout).rotation
                for (const attack in rotation) {
                    const attackAsNumber: number = parseInt(attack)
                    const attackInfo = props.attackData.getAttackById(parseInt(rotation[attackAsNumber]))
                    if (attackInfo !== undefined) {
                        attacks[attackAsNumber + 1] = {
                            id: parseInt(rotation[attackAsNumber]),
                            cooldown: {
                                base: attackInfo.cooldown,
                                current: 0
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

        }

        if (props.combatData && props.playerData) {
            setAttackCooldownData({ ...attackCooldownData, player: attacks, enemy: enemyAttacks })
            setCombatInProcess(true)
        }
    }, [])

    // engine
    useEffect(() => {
        const intervalRefresh = setInterval(() => {
            updateTime()
            let speed = 2000
            if (playerStats.speed) {
                speed = playerStats.speed
            }
            if (combatInProcess) {
                if (timer > speed) { // * 10
                    console.log("Attacking")

                    if (props.combatData && props.playerData) {
                        console.log("timer")
                        gameEngineStart()
                    }
                    setTimer(0)
                }
            }

        }, 250);
        return () => clearInterval(intervalRefresh);
    }, [timer, playerTurn]);


    const playerDeadModal = () => setPlayerDeadPopup(false)


    // reduces cooldowns by 1 round
    const handleCooldowns = (attackID: number, activePlayer: string): void => {
        let attackLocation = 1
        if (activePlayer === "player") {
            for (const attack in attackCooldownData[activePlayer]) {

                if (attackCooldownData[activePlayer][attack]) {
                    if (attackCooldownData[activePlayer][attack].id === attackID) {
                        attackLocation = parseInt(attack)
                    }

                    if (attackCooldownData[activePlayer][attack].cooldown.base !== 0) {

                        // removes the cd of each none used attack by 1
                        if (attackCooldownData[activePlayer][attack].cooldown.current > 0) {
                            attackCooldownData[activePlayer][attack].cooldown.current = attackCooldownData[activePlayer][attack].cooldown.current - 1

                        }
                    }


                }
            }
        } else {
            for (const attack in attackCooldownData[activePlayer]) {

                if (attackCooldownData[activePlayer][attack]) {
                    if (attackCooldownData[activePlayer][attack].id === attackID) {
                        attackLocation = parseInt(attack)
                    }

                    if (attackCooldownData[activePlayer][attack].cooldown.base !== 0) {

                        // removes the cd of each none used attack by 1
                        if (attackCooldownData[activePlayer][attack].cooldown.current > 0) {
                            attackCooldownData[activePlayer][attack].cooldown.current = attackCooldownData[activePlayer][attack].cooldown.current - 1
                        }
                    }


                }
            }
        }
        // starts the cooldown of the attack after being used
        attackCooldownData[activePlayer][attackLocation].cooldown.current = attackCooldownData[activePlayer][attackLocation].cooldown.base
    }




    // can also be used to estimate how much damage an attack would do to the enemy before hand
    // could grey out the enemy hp in the avg dmg would do
    const attackDamageCalculator = (attackData: Attack): Object => {
        // TODO: damage here is not correct
        // TODO: all effects are happening at once

        const enemeyStats = props.enemyData.enemies.get(props.combatData ? props.combatData.enemyID : 1)

        let damageData;
        if (playerTurn) {
            const jobLevel = props.playerData.levelChecker.getLevelFromExp(props.playerData.skillExp.getCurrentExp(attackData.type))
            let jobLevelMultiplyer = 1
            if (jobLevel) {
                jobLevelMultiplyer = jobLevel
            }
            console.log(playerStats)
            damageData = calculateDamage(playerStats, enemeyStats, attackData, jobLevelMultiplyer, false)
            handleExpGained(damageData.attack, attackData, playerDead(), playerTurn, props.skills, props.playerData)

        } else {
            damageData = calculateEnemyDamage(enemeyStats, playerStats, attackData)
        }

        return damageData
    }



    const statusEffectResovlePlayer = (data: any, status: string): Object => {
        switch (status) {
            case ("regen"):
                const healthGain = props.playerData.status.health.getCurrent() + data
                props.playerData.status.health.setCurrent(healthGain)
                if (props.playerData.status.health.getCurrent() > getPlayerBaseHealth(props.playerData)) {
                    props.playerData.status.health.setCurrent(getPlayerBaseHealth(props.playerData))
                }
                return { playerHealth: data }
            case ("bleed"):
                props.combatData.status.health.setCurrent(props.combatData.status.health.getCurrent() - data)
                return { enemyHealth: - data }
            case ("elemental"):
                props.combatData.status.armour.setCurrent(props.combatData.status.armour.getCurrent() - data)
                if (props.combatData.status.armour.getCurrent() < 0) {
                    props.combatData.status.armour.setCurrent(0)
                }
                return { enemyArmour: - data }
            case ("attack"):
                let damage = Math.floor(data)
                let armourValue = props.combatData.status.armour.getCurrent() - damage

                if (armourValue < 0) {
                    props.combatData.status.health.setCurrent(props.combatData.status.health.getCurrent() + armourValue)
                    props.combatData.status.armour.setCurrent(0)
                    return {
                        enemyHealth: - damage,
                        enemyArmour: props.combatData.status.armour.getCurrent()
                    }
                } else {
                    props.combatData.status.armour.setCurrent(armourValue)
                    return {
                        playerHealth: null,
                        playerArmour: null,
                        enemyHealth: 0,
                        enemyArmour: - damage

                    }
                }

            case ("enfeeable"):
                console.log(`enemy ${status}: ${data}`)
                return { enemyStatus: data }
            case ("armour"):
                const currentStamina = props.playerData.status.armour.getCurrent()
                props.playerData.status.armour.setCurrent(null)
                props.playerData.status.armour.setCurrent(currentStamina + data)
                return { playerArmour: data }
            case ("stun"):
                console.log(`enemy ${status}: ${data}`)
                return { enemyStatus: data }
            case ("drain"):
                props.combatData.status.stamina.setCurrent(props.combatData.status.stamina.getCurrent() - data)
                if (props.combatData.status.stamina.getCurrent() < 0) {
                    props.combatData.status.stamina.setCurrent(0)
                }
                console.log(`enemy ${status}: -${data}`)
                // TEMP
                setStaminaOverlay({ ...staminaOverlay, enemy: - data, })
            default:
                return {}
        }

    }

    const resolveDamageDealt = (activePlayer: string, attackData: Attack, attackID: number): void => {
        // TODO: damage is happening irregarldess of stamina
        // work out attack damage


        const damageData = attackDamageCalculator(attackData)
        const damageOrder = ["regen", "bleed", "elemental", "enfeeable", "armour", "stun", "drain", "attack"]

        const tempOverlay = {
            playerHealth: null,
            playerArmour: null,
            enemyHealth: null,
            enemyArmour: null,
            enemyStatus: null
        }
        // TODO: not applying status effects into the damage calcs
        if (activePlayer === "player") {
            setAttackSelectedID(attackID)
            setEnemyAttackSelectedID(null)
            for (let damage of damageOrder) {
                if (damageData[damage]) {
                    const overlayValues = statusEffectResovlePlayer(damageData[damage], damage)
                    for (let value in overlayValues) {
                        tempOverlay[value] = parseInt(tempOverlay[value] + overlayValues[value])
                    }
                }
            }

            setDamageOverlay(tempOverlay)

            const attackStaminaCost = attackData.stamina + playerStats.weight
            staminaHandler(props.playerData.status.stamina, attackStaminaCost, activePlayer, tempBaseStaminaRegen)
            setStaminaOverlay({ player: - attackStaminaCost, enemy: null })

        } else {
            // for ui purposes only
            setAttackSelectedID(null)
            setEnemyAttackSelectedID(attackID)
            // setters
            let damage = Math.floor(damageData["attack"])
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
                    playerHealth: 0,
                    playerArmour: -damage,
                    enemyHealth: null,
                    enemyArmour: null
                })

                props.playerData.status.armour.setCurrent(armourValue)
            }

            staminaHandler(props.combatData.status.stamina, attackData.stamina, activePlayer, tempBaseStaminaRegen)
            setStaminaOverlay({ player: tempBaseStaminaRegen - attackData.stamina, enemy: null })
        }
    }



    const onAttackHandler = (attackID: number): void => {
        setAttackSelectedID(attackID)
    }


    const handleAttackInput = (attackID: number, activePlayer: string): string => {
        const attackData: Attack = props.attackData.getAttackById(attackID)

        // do calcs on attack
        resolveDamageDealt(activePlayer, attackData, attackID)

        // handle cooldowns resetting per turn 
        handleCooldowns(attackID, activePlayer)

        // resolve death
        if (enemyDead()) {
            console.log("Enemy dead")
            const enemyData = props.enemyData.getEnemyById(props.combatData.enemyID)
            // notifyWithImage(`You have slain a ${enemyData.name}`, enemyData.image)  too much stuff on the screen?

            handleLoot(enemyData)

            // spawn "new" monster
            props.combatData.status.health.setCurrent(props.combatData.status.health.getBase())
            props.combatData.status.stamina.setCurrent(props.combatData.status.stamina.getBase() + 100)
            props.combatData.status.armour.setCurrent(props.combatData.status.armour.getBase())


            setDamageOverlay({ playerHealth: null, playerArmour: null, enemyHealth: null, enemyArmour: null })
            setStaminaOverlay({ player: null, enemy: null })
            return "Enemy dead"
        }

        if (playerDead()) {
            console.log("Player dead")
            runAwayHandler()
            setPlayerDeadPopup(true)
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
        const essence = data.drops.essence
        const randomNumber = randomInteger(1, 100)

        // coins
        if (randomNumber < coins.chance) {
            const coinsReceived = randomInteger(coins.min, coins.max)
            props.playerData.playerBank.addToCoins(coinsReceived)
            notifyWithImage(`+ ${coinsReceived} coins`, require("../../../images/items/coins.svg"))
        }

        // loot
        // need to work out loot randomness
        const item = props.itemData.getItemById(drops[0].id)
        props.playerData.playerBank.addItemtoBank(drops[0].id, drops[0].qty, item)
        notifyWithImage(`+ ${drops[0].qty} ${item.name}`, item.icon)

        // essence
        props.playerData.playerBank.addToEssence(essence)

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
            //setAttackSelectedID(null)

            if (autoCombat || whoseGoIsIt === "enemy") {
                // find first viable attack?
                const attackID = rotationHandler(whoseGoIsIt, attackCooldownData, props)
                if (attackID !== null) {
                    // calculate damage + resolve damage
                    handleAttackInput(attackID, whoseGoIsIt)
                } else {
                    if (whoseGoIsIt === "player") {
                        if (!validRotationSetup(attackCooldownData["player"])) {
                            staminaHandler(props.playerData.status.stamina, 0, whoseGoIsIt, tempBaseStaminaRegen)
                            setStaminaOverlay({ player: tempBaseStaminaRegen, enemy: null })
                        }

                    } else {
                        staminaHandler(props.combatData.status.stamina, 0, whoseGoIsIt, tempBaseStaminaRegen)
                        setStaminaOverlay({ enemy: tempBaseStaminaRegen, player: null })
                    }
                }


                // handle death + loot


            } else {
                // if (attackSelectedID) {
                //     const attackID = combatData[whoseGoIsIt][attack].id
                //     const attackData: Attack = props.attackData.getAttackById(attackID)
                //     // handle empty roation spots
                //     if (attackID !== null) {
                //         const stamina = attackPossibleStamina(whoseGoIsIt, attackData)
                //         const cooldown = attackPossibleCooldown(combatData[whoseGoIsIt][parseInt(attack)])

                // }
            }
            // next turn
            if (validRotationSetup(attackCooldownData["player"])) {
                setPlayerTurn(!playerTurn)
            }

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
        setEnemyAttackSelectedID(null)
        setDamageOverlay({ playerHealth: null, playerArmour: null, enemyHealth: null, enemyArmour: null })
        setStaminaOverlay({ player: null, enemy: null })
        setAttackCooldownData({
            player: {},
            enemy: {},
            turn: 0
        })
        props.setCombatData(null)


        props.playerData.status.health.setCurrent(getPlayerBaseHealth(props.playerData))
        props.playerData.status.stamina.setCurrent(props.playerData.status.stamina.getBase() + 100)
        props.playerData.status.armour.setCurrent(props.playerData.status.armour.getBase())
        props.playerData.status.divination.setCurrent(props.playerData.status.divination.getBase())
    }


    const notifyWithImage = (value: string, url: string): void => {
        toast(value, {
            position: "bottom-right",
            autoClose: 3000,
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
            <Popup open={playerDeadPopup} closeOnDocumentClick onClose={playerDeadModal} position="right center" modal>
                <div className="dropData">
                    <img className="dropData-image" src={TOMBESTONE} alt={"TomeStone"} />
                    <h1 className="dropData-title">Oh dear, you seem to have died...</h1>
                    <h2 className="dropData-title">Luckily you have 9 lives!</h2>
                    <img className="dropData-image" src={CAT} />
                </div>
            </Popup>
            <Section
                type="player"
                currentTurn={currentTurn}
                data={props.playerData}
                cooldowns={attackCooldownData}
                onAttackHandler={onAttackHandler}
                autoCombatHandler={autoCombatHandler}
                damageOverlay={damageOverlay}
                staminaOverlay={staminaOverlay}
                attackSelectedID={attackSelectedID}
            />
            {/* <ToastContainer
                position="bottom-right"
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> */}
            <Section
                type="enemy"
                currentTurn={currentTurn}
                data={props.combatData}
                cooldowns={attackCooldownData}
                runAwayHandler={runAwayHandler}
                damageOverlay={damageOverlay}
                staminaOverlay={staminaOverlay}
                onDropInfoHandler={props.onDropInfoHandler}
                attackSelectedID={enemyAttackSelectedID}
            />
        </div >
    )
}


const mapStateToProps = (state) => ({
    combatData: state.engine.combatData,
    playerData: state.player.playerData,
    attackData: state.attacks.attackData,
    passiveData: state.passives.passiveData,
    enemyData: state.enemies.enemyData,
    itemData: state.items.itemData,
    skills: state.skills.skillData,

})

const mapDispatchToProps = {
    setCombatData
}

export default connect(mapStateToProps, mapDispatchToProps)(CatCombat)
