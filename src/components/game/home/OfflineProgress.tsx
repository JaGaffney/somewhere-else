import React from 'react'
import { connect } from 'react-redux'

import { intToString } from "../../utils/generic"

// @ts-ignore
import COINS from "../../../images/sidepanel/coins.svg"

export const OfflineProgress = (props) => {
    // TODO: get this working
    return (
        <div className="equipment__container-equipment offlineProgression">
            <h3>Heres what your settlement has produced since you have been away</h3>

            <div className="offlineProgression-gp">
                <span><img src={COINS} alt="income" />{props.playerData.offline && intToString(props.playerData.offline.coins)}</span>
                <span className="offlineProgression-gp-negative"><img src={COINS} alt="salary" />-{props.playerData.offline && intToString(props.playerData.offline.salary)}</span>
                <span className={`${props.playerData.offline && props.playerData.offline.coins - props.playerData.offline.salary > 0 ? "" : "offlineProgression-gp-negative"}`}>
                    <img src={COINS} alt="total" />{props.playerData.offline && intToString(props.playerData.offline.coins - props.playerData.offline.salary)}
                </span>
            </div>

            OfflineProgress
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OfflineProgress)