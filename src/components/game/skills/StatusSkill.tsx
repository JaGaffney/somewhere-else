import React from 'react'
import { connect } from 'react-redux'

export const StatusSkill = (props) => {
    // divination
    // can reset each one at the cost of coins, can only have 1  on at a time
    // 1 focus on dmg at the cost of defence
    // 1 focus on defence at the csot of damage
    // 1 focus on killing things effiecntly (drop rate increase etc)
    return (
        <div>
            <button onClick={() => props.status.health.buyStatus()}>Add Health</button>
            <button onClick={() => props.status.stamina.buyStatus()}>Add Stamina</button>
            <button onClick={() => props.status.armour.buyStatus()}>Add Armour</button>
            <button onClick={() => props.status.divination.buyStatus()}>Add divination</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    status: state.player.playerData.status
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(StatusSkill)
