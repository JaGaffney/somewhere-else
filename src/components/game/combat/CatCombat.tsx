import React from 'react'
import { connect } from 'react-redux'

import { Section } from './generics/Section'

export const CatCombat = (props) => {
    //props.playerData.status.health.setBase(15)
    // divination
    // can reset each one at the cost of coins, can only have 1  on at a time
    // 1 focus on dmg at the cost of defence
    // 1 focus on defence at the csot of damage
    // 1 focus on killing things effiecntly (drop rate increase etc)

    return (
        <div className="catcombat__container">
            <Section type="player" />
            <Section type="enemy" />
        </div>
    )
}


const mapStateToProps = (state) => ({
    enemies: state.enemies,
    playerData: state.player.playerData
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CatCombat)
