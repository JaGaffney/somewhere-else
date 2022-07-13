import React, { useState } from 'react'
import { connect } from 'react-redux'

import StatusBar from './statusBar'
import Armour from "./Armour"

import Hotbar from './Hotbar'
import EnemyInfo from "./EnemyInfo"

import Rotation from './Rotation'
import Info from './Info'

import { calculateDamage, currentStatCalculator } from "../../../utils/equipment"

export const Section = (props) => {
    const [selectedSkill, setSelecetedSkill] = useState(null)

    const onSelectedSkillHandler = (id) => {
        setSelecetedSkill(id)
    }

    const maxDamgeCalc = (maxDamage): number => {
        let jobLevel = 1; // get

        const playerStats = currentStatCalculator(props.itemData, props.playerData.inventory)
        let attack = 1
        if (playerStats) {
            attack = playerStats.attack
        }

        let damage = calculateDamage(jobLevel, maxDamage, attack, 1, 1)
        return Math.floor(damage)
    }

    return (
        <div className={`catcombat__section ${props.type === props.currentTurn() ? "catcombat__section-active" : ""}`}>
            <div className="catcombat__status">
                <StatusBar
                    type="health"
                    maxValue={props.data && props.data.status.getValue("health").getBase()}
                    currentValue={props.data && props.data.status.getValue("health").getCurrent()}
                    damageOverlay={props.type === "player" ? props.damageOverlay.playerHealth : props.damageOverlay.enemyHealth}
                />
                <Armour
                    value={props.data && props.data.status.getValue("armour").getCurrent()}
                    damageOverlay={props.type === "player" ? props.damageOverlay.playerArmour : props.damageOverlay.enemyArmour}
                />
                <StatusBar
                    type="stamina"
                    maxValue={props.data && props.data.status.getValue("stamina").getBase() + 100}
                    currentValue={props.data && props.data.status.getValue("stamina").getCurrent()}
                    damageOverlay={props.type === "player" ? props.staminaOverlay.player : props.staminaOverlay.enemy}
                />
            </div>

            {props.type === "player" ? (
                <div className="catcombat__hotbar">
                    <Hotbar
                        onSelectedSkillHandler={onSelectedSkillHandler}
                        onAttackHandler={props.onAttackHandler}
                        cooldowns={props.cooldowns}
                        maxDamgeCalc={maxDamgeCalc}
                    />
                </div>
            ) : (
                <EnemyInfo
                    data={props.data ? props.data : null}
                    onSelectedSkillHandler={onSelectedSkillHandler}
                    cooldowns={props.cooldowns}
                />
            )}

            <div className="catcombat__description">
                <Info selectedSkill={selectedSkill} maxDamgeCalc={maxDamgeCalc} />
                <Rotation
                    type={props.type}
                    data={props.data}
                    onButtonHandler={props.type === "enemy" ? props.runAwayHandler : props.autoCombatHandler}
                    onDropInfoHandler={props.type === "enemy" ? props.onDropInfoHandler : null}
                />
            </div>


        </div>
    )
}

const mapStateToProps = (state) => ({
    enemies: state.enemies,
    playerData: state.player.playerData,
    itemData: state.items.itemData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Section)
