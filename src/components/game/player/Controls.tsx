import React from 'react'
import { connect } from 'react-redux'

import { intToString } from '../../utils/generic'

export const Controls = (props) => {
    return (
        <div className="topPanel settlement__controls">
            <div className="settlement__controls-manpower research__panel-controls">
                <span>{props.playerData.playerBank.bankItems.size} / {props.playerData.playerBank.bankSpace}</span>
                <span className="settlement__controls-manpower-info">Bank Value {intToString(props.playerData.playerBank.getBankValue())} gp</span>
            </div>

            <div className="settlement__controls-buttons">
                <button className="generic__button generic__button-primary" >do something</button>
                <button className="generic__button generic__button-primary" >do something</button>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)