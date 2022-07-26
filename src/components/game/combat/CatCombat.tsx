import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setCombatData } from "../../actions/api"

import Section from './generics/Section'

import { randomInteger } from "../../utils/generic"
import { calculateDamage, currentStatCalculator, calculateEnemyDamage } from "../../utils/equipment"
import { Attack } from "../../data/attacks/Attack"

// @ts-ignore
import TOMBESTONE from "../../../images/combat/grave.svg"
// @ts-ignore
import CAT from "../../../images/cat.svg"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



export const CatCombat = (props) => {
    const tempBaseStaminaRegen = 10

    const [combatInProcess, setCombatInProcess] = useState<boolean>(false)
    const [autoCombat, setAutoCombat] = useState(true)
    const [playerTurn, setPlayerTurn] = useState(true)
    const [timer, setTimer] = useState(0)
    const [attackSelectedID, setAttackSelectedID] = useState<null | number>(null)
    const [enemyAttackSelectedID, setEnemyAttackSelectedID] = useState<null | number>(null)
    const [attackErrors, setAttackErrors] = useState({
        stamina: false,
        cooldown: false
    }) // not in use
    const [combatData, setCombatData] = useState(null)
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
    const [playerDeadPopup, setPlayerDeadPopup] = useState<boolean>(false)

    const playerDeadModal = () => setPlayerDeadPopup(false)

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
            const rotation = props.playerData.classes.findJobClass(props.playerData.classes.equippedJobClass).rotation
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
        console.log(currentStamina, " ", attackData.stamina)
        if (currentStamina < attackData.stamina) {
            console.log("Attack failed due to lack of stamina")
            setAttackErrors({ ...attackErrors, stamina: true })
            return false
        }
        return true
    }
    const attackPossibleCooldown = (attackID: number, activePlayer: string): boolean => {
        // console.log(combatData[activePlayer][attackID].cooldown.current)
        if (combatData[activePlayer][attackID].cooldown.current >= 2) {
            console.log("Attack failed due to still being on cooldown")
            setAttackErrors({ ...attackErrors, cooldown: true })
            return false
        }
        return true
    }

    // reduces cooldowns by 1 round
    const handleCooldowns = (attackID: number, activePlayer: string): void => {
        if (activePlayer === "player") {
            for (const attack in combatData[activePlayer]) {
                if (combatData[activePlayer][attack].cooldown.base) {
                    if (combatData[activePlayer][attack].cooldown.base !== 0) {
                        if (combatData[activePlayer][attack].cooldown.current > 0) {
                            combatData[activePlayer][attack].cooldown.current = combatData[activePlayer][attack].cooldown.current - 1
                            console.log(combatData[activePlayer][attack].cooldown)
                        }
                    }


                }
            }
        } else {

        }

        combatData[activePlayer][attackID].cooldown.current = combatData[activePlayer][attackID].cooldown.base
    }

    // can also be used to estimate how much damage an attack would do to the enemy before hand
    // could grey out the enemy hp in the avg dmg would do
    const attackDamageCalculator = (attackData: Attack): number => {
        // TODO: damage here is not correct
        // TODO: all effects are happening at once

        const playerStats = currentStatCalculator(props.itemData, props.playerData.inventory)
        const enemeyStats = props.enemyData.enemies.get(props.combatData ? props.combatData.enemyID : 1)

        let damageData;
        if (playerTurn) {
            const jobLevel = props.playerData.levelChecker.getLevelFromExp(props.playerData.skillExp.getCurrentExp(attackData.type))
            let jobLevelMultiplyer = 1
            if (jobLevel) {
                jobLevelMultiplyer = jobLevel
            }

            damageData = calculateDamage(playerStats, enemeyStats, attackData, jobLevelMultiplyer, false)

            props.playerData.setSkillExp(attackData.type, Math.floor(damageData.attack) * 3)
        } else {
            damageData = calculateEnemyDamage(enemeyStats, playerStats, attackData)
        }

        return damageData
    }

    const staminaHandler = (stamina, value: number): void => {
        // stamina cost of attack
        stamina.setCurrent(stamina.getCurrent() - value)

        // stamina regen
        if ((stamina.getCurrent() + tempBaseStaminaRegen) >= (stamina.getBase() + 100)) {
            stamina.setCurrent(stamina.getBase() + 100)
        } else {
            stamina.setCurrent(stamina.getCurrent() + tempBaseStaminaRegen)
        }
    }

    const statusEffectResovlePlayer = (data: any, status: string): Object => {
        switch (status) {
            case ("lifesteal"):
                props.playerData.status.health.setCurrent(props.playerData.status.health.getCurrent() + data)
                if (props.playerData.status.health.getCurrent() > props.playerData.status.health.getBase()) {
                    props.playerData.status.health.setCurrent(props.playerData.status.health.getBase())
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
                props.playerData.status.armour.setCurrent(props.playerData.status.armour.getCurrent() + data)
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
                setStaminaOverlay({ enemy: - data, })
            default:
                return {}
        }

    }

    const resolveDamageDealt = (activePlayer: string, attackData: Attack, attackID: number): void => {
        // TODO: damage is happening irregarldess of stamina
        // work out attack damage
        const damageData = attackDamageCalculator(attackData)

        console.log(attackData)
        const damageOrder = ["lifesteal", "bleed", "elemental", "enfeeable", "armour", "stun", "drain", "attack"]

        const tempOverlay = {
            playerHealth: null,
            playerArmour: null,
            enemyHealth: null,
            enemyArmour: null,
            enemyStatus: null
        }
        if (activePlayer === "player") {
            setAttackSelectedID(attackID)
            setEnemyAttackSelectedID(null)
            for (let damage of damageOrder) {
                if (damageData[damage]) {
                    const overlayValues = statusEffectResovlePlayer(damageData[damage], damage)
                    for (let value in overlayValues) {
                        tempOverlay[value] = tempOverlay[value] + overlayValues[value]
                    }
                }
            }

            setDamageOverlay(tempOverlay)

            staminaHandler(props.playerData.status.stamina, attackData.stamina)
            setStaminaOverlay({ player: tempBaseStaminaRegen - attackData.stamina, enemy: null })

        } else {
            // for ui purposes only
            setAttackSelectedID(null)
            setEnemyAttackSelectedID(attackID)
            // setters
            let damage = Math.floor(damageData.attack)
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
                    playerArmour: - damageData.damage,
                    enemyHealth: null,
                    enemyArmour: null
                })

                props.playerData.status.armour.setCurrent(armourValue)
            }

            staminaHandler(props.combatData.status.stamina, attackData.stamina)
            setStaminaOverlay({ player: tempBaseStaminaRegen - attackData.stamina, enemy: null })
        }
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
            props.combatData.status.stamina.setCurrent(props.combatData.status.stamina.getBase())
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
        const randomNumber = randomInteger(1, 100)

        if (randomNumber < coins.chance) {
            const coinsReceived = randomInteger(coins.min, coins.max)
            props.playerData.playerBank.addToCoins(coinsReceived)
            notifyWithImage(`+ ${coinsReceived} coins`, require("../../../images/items/coins.svg"))
        }
        // need to work out loot randomness
        const item = props.itemData.getItemById(drops[0].id)
        props.playerData.playerBank.addItemtoBank(drops[0].id, drops[0].qty, item)
        notifyWithImage(`+ ${drops[0].qty} ${item.name}`, item.icon)


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
        setDamageOverlay({ playerHealth: null, playerArmour: null, enemyHealth: null, enemyArmour: null })
        setStaminaOverlay({ player: null, enemy: null })
        setCombatData({
            player: {},
            enemy: {},
            turn: 0
        })

        props.setCombatData(null)
        props.playerData.status.health.setCurrent(props.playerData.status.health.getBase())
        props.playerData.status.stamina.setCurrent(props.playerData.status.stamina.getBase())
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
                cooldowns={combatData}
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
                cooldowns={combatData}
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
    enemyData: state.enemies.enemyData,
    itemData: state.items.itemData,

})

const mapDispatchToProps = {
    setCombatData
}

export default connect(mapStateToProps, mapDispatchToProps)(CatCombat)
