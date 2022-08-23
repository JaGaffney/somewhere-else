import React from 'react'
import { connect } from 'react-redux'

export const OfflineProgress = (props) => {
    return (
        <div className="equipment__container-equipment">
            <h3>Heres what your settlement has produced since you have been away</h3>

            <span>GP {props.playerData.offline.coins}</span>
            <span>Salary -{props.playerData.offline.salary}</span>

            OfflineProgress</div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OfflineProgress)