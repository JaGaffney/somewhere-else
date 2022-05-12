import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import { costPerAction } from '../../utils/generic'

export const Controls = (props) => {
    const [manpowerCost, setManpowerCost] = useState<number>(props.playerData.levelChecker.level[props.playerData.getManpower()])

    useEffect(() => {
        setManpowerCost(props.playerData.levelChecker.level[props.playerData.getManpower()])
    }, [props.playerUpdated])


    const addManpower = () => {
        if (manpowerCost <= props.playerData.playerBank.getCoins()) {
            props.playerData.setManpower(1)
            props.playerData.playerBank.removeFromCoins(manpowerCost)
            props.setPlayerUpdated()
        }
    }

    const resetAllTasks = () => {
        props.playerData.settlement.resetTasks()
        props.setPlayerUpdated()
    }

    return (
        <div className="topPanel settlement__controls">
            <div className="settlement__controls-manpower">
                <span>{props.playerData.getActiveManpower()} / {props.playerData.getManpower()} Manpower</span>
                <span className="settlement__controls-manpower-info">{costPerAction(props.playerData.getActiveManpower())} GP an action</span>
            </div>


            <div className="settlement__controls-buttons">
                <button disabled={props.playerData.playerBank.getCoins() <= manpowerCost} className="generic__button generic__button-primary" onClick={addManpower}>Hire for {manpowerCost} GP</button>
                <button className="generic__button generic__button-primary">Auto Sell</button>
                <button className="generic__button generic__button-secondary" onClick={resetAllTasks}>Reset</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(Controls)