import React from 'react'
import { connect } from 'react-redux'

import { getBackgroundColor } from '../../../utils/color'
import { currentPassiveStatCalculator, currentStatCalculator, statMerge } from '../../../utils/equipment'

export const Info = (props) => {
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
        <div className="catcombat__description-info">
            <h3>{props.selectedSkill ? props.attackData.getAttackById(props.selectedSkill).name : "Attack"}</h3>
            <div className="attacks__button" style={{ borderColor: props.selectedSkill && getBackgroundColor(props.attackData.getAttackById(props.selectedSkill).type) }}>
                <img className="attacks__button-icon " src={props.selectedSkill ? props.attackData.getAttackById(props.selectedSkill).icon : null} />
            </div>

            <div className="attacksloadout__stats">
                <span className="attacksloadout__stats-description">
                    attack power
                    <span>
                        {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).maxDamage}
                    </span>
                </span>
                <span className="attacksloadout__stats-description">
                    min damage
                    <span>
                        {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).minDamage}
                    </span>
                </span>
                <span className="attacksloadout__stats-description" style={{ color: "var(--red700)" }}>
                    damage
                    <span>
                        {props.selectedSkill && props.maxDamgeCalc(props.attackData.getAttackById(props.selectedSkill))}
                    </span>
                </span>
                <span className="attacksloadout__stats-description" style={{ color: "var(--blue700)" }}>
                    cooldown
                    <span>
                        {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).cooldown}
                    </span>
                </span>
                <span className="attacksloadout__stats-description" style={{ color: "var(--green600)" }}>
                    stamina
                    <span>
                        {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).stamina + playerStats.encumbrance >= 0 ? props.attackData.getAttackById(props.selectedSkill).stamina + playerStats.encumbrance : 0}
                    </span>
                </span>
                <span className="attacksloadout__stats-description">
                    {props.selectedSkill && Object.keys(props.attackData.getAttackById(props.selectedSkill).effect).map((i, k) => {
                        return (
                            <React.Fragment key={k}>
                                {i}
                                <span>
                                    {props.attackData.getAttackById(props.selectedSkill).effect[i]}
                                    {playerStats[i] && (
                                        <span className="equipment__container-stats-single-difference equipment__container-stats-single-difference-positive"> (+{playerStats[i]})</span>)}
                                </span>
                            </React.Fragment>
                        )
                    })}

                </span>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Info)
