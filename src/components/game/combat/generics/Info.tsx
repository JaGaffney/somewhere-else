import React from 'react'
import { connect } from 'react-redux'

import { currentPassiveStatCalculator, currentStatCalculator, statMerge } from '../../../utils/equipment'
import AttackInfo from '../../loadout/AttackInfo'

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
            <AttackInfo selectedSkill={props.selectedSkill} playerStats={playerStats} />
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
