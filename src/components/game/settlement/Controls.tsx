import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

export const Controls = (props) => {

    useEffect(() => {
    }, [props.playerUpdated])


    const addManpower = () => {
        // TODO: check for price
        props.playerData.setManpower(1)
        props.setPlayerUpdated()
    }

    const resetAllTasks = () => {
        props.playerData.settlement.resetTasks()
        props.setPlayerUpdated()
    }

    const tempSkillAdder = (name, value) => {
        props.playerData.settlement.createNewTask(name, value)
        props.setPlayerUpdated()
    }

    return (
        <div className="topPanel settlement__controls">
            <div className="settlement__controls-manpower">
                <span>{props.playerData.getActiveManpower()} / {props.playerData.getManpower()} Manpower</span>
                <span className="settlement__controls-manpower-info">100 GP an action</span>
            </div>


            <div className="settlement__controls-buttons">
                <button className="generic__button generic__button-primary" onClick={addManpower}>Hire 100000 GP</button>
                <button className="generic__button generic__button-primary">Auto Sell</button>
                <button className="generic__button generic__button-secondary" onClick={resetAllTasks}>Reset</button>
                <button className="generic__button generic__button-secondary" onClick={() => tempSkillAdder("g_stone", 1)}>Temp task 1</button>
                <button className="generic__button generic__button-secondary" onClick={() => tempSkillAdder("g_bamboo", 4)}>Temp task 2</button>
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