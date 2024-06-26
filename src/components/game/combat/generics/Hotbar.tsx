import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getBackgroundColor } from '../../../utils/color';
import { currentPassiveStatCalculator, currentStatCalculator, maxDamgeCalc, statMerge } from '../../../utils/equipment';


export const Hotbar = (props) => {

    useEffect(() => {
    }, [props.attackSelectedID])

    function onDragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.id)
    }

    // handles no loadouts being avaialable
    const activeLoadout = () => {
        let stats = {}
        if (props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout)) {
            stats = currentPassiveStatCalculator(props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout), props.passiveData)
        }
        return stats
    }

    const currentStats = currentStatCalculator(props.itemData, props.playerData.inventory)
    const passiveStats = activeLoadout()
    const playerStats = statMerge(currentStats, passiveStats)


    return (
        <div className="catcombat__hotbar-attacks">
            {props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout) ? Object.keys(props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout).equippedAttacks).map((id, k) => {
                const attackID = props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout).equippedAttacks[id]
                const attackData = props.attackData.getAttackById(attackID)
                let cooldownRemaining;
                if (props.cooldowns) {
                    for (const attack in props.cooldowns["player"]) {
                        if (props.cooldowns["player"][attack]) {
                            if (props.cooldowns["player"][attack].id === attackID) {
                                cooldownRemaining = props.cooldowns["player"][attack].cooldown.current
                            }
                        }

                    }
                }
                return (
                    <div className="attackloadout__equipped-slot"
                        key={k}
                        onDragStart={e => onDragStart(e)}
                        id={attackID}
                        draggable={true}
                        onClick={() => props.onAttackHandler(attackID)}
                        onMouseEnter={() => props.onSelectedSkillHandler(attackID)}
                    >
                        <button
                            className="attacks__button attacks__button-general"
                            style={{
                                borderColor: getBackgroundColor(attackData ? attackData.type : "default"),
                                transform: `${props.attackSelectedID === attackID && props.attackSelectedID !== null ? "scale(1.1)" : "scale(1)"}`
                            }}
                        >
                            <img className="attacks__button-icon" src={attackData && attackData.icon} />
                            {attackData &&
                                <div className="attacks__button-stats">
                                    <span className="attacks__button-stats-topLeft">{attackData.cooldown}</span>
                                    <span className="attacks__button-stats-topRight">{attackData.stamina + playerStats.weight >= 0 ? attackData.stamina + playerStats.weight : 0}</span>
                                    <span className="attacks__button-stats-bottomRight">{maxDamgeCalc(props.playerData, attackData, props.itemData)}</span>
                                    {cooldownRemaining !== 0 && (<span className="attacks__button-stats-overlay">{cooldownRemaining}</span>)}
                                </div>
                            }
                        </button>
                    </div>
                )
            }) : <h3>You need some actions and spells to start combat</h3>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    attackData: state.attacks.attackData,
    itemData: state.items.itemData,
    passiveData: state.passives.passiveData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Hotbar)
