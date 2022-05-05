import React from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

export const StatusSkill = (props) => {
    // divination
    // can reset each one at the cost of coins, can only have 1  on at a time
    // 1 focus on dmg at the cost of defence
    // 1 focus on defence at the csot of damage
    // 1 focus on killing things effiecntly (drop rate increase etc)
    // TODO:

    const update = () => {
        props.setPlayerUpdated()
    }


    return (
        <div>
            <button onClick={() => {
                props.status.health.buyStatus()
                update()
            }}>Add Health</button>
            <button onClick={() => {
                props.status.stamina.buyStatus()
                update()
            }}>Add Stamina</button>
            <button onClick={() => {
                props.status.armour.buyStatus()
                update()
            }}>Add Armour</button>
            <button onClick={() => {
                props.status.divination.buyStatus()
                update()
            }}>Add divination</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    status: state.player.playerData.status
})

const mapDispatchToProps = {
    setPlayerUpdated
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusSkill)
