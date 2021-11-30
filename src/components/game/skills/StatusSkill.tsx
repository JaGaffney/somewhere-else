import React from 'react'
import { connect } from 'react-redux'

export const StatusSkill = (props) => {
    console.log(props.status)
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
