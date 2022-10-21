import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import { costPerAction, intToString } from '../../utils/generic'

// @ts-ignore
import COINS from "../../../images/items/coins.svg"
// @ts-ignore
import TRIBUTE from "../../../images/items/tribute.svg"


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

    const handleAutoSell = () => {
        props.playerData.updateSettings("autoSell", !props.playerData.getSettingValue("autoSell"))
        props.setPlayerUpdated()
    }

    return (
        <div className="topPanel topPanel__controls" data-cy="settlementControls">
            <div className="topPanel__controls-left" data-cy="settlementControls-manpower">
                <span>{props.playerData.getActiveManpower()} / {props.playerData.getManpower()} Manpower</span>
                <div className="topPanel__controls-left-infoContainer">
                    <span className="topPanel__controls-left-info ">
                        <img src={COINS} />
                        <span>-{costPerAction(props.playerData.getActiveManpower())}GP</span>
                    </span>
                    <span className="topPanel__controls-left-info">
                        <img src={TRIBUTE} />
                        <span style={{}}>-{props.tributeCost}</span>
                    </span>
                    <span className="topPanel__controls-left-info">
                        <span style={{}}>every {props.realTimeCalc()} seconds</span>
                    </span>
                </div>
            </div>


            <div className="topPanel__controls-right">
                <button data-cy="settlementControls-hire" disabled={props.playerData.playerBank.getCoins() <= manpowerCost} className="generic__button generic__button-primary" onClick={addManpower}>Hire for {intToString(manpowerCost)} GP</button>
                <button data-cy="settlementControls-sell" className={`generic__button generic__button-primary ${props.playerData.getSettingValue("autoSell") ? "generic__button-active" : null}`} onClick={handleAutoSell}>Auto Sell</button>
                <button data-cy="settlementControls-reset" className="generic__button generic__button-secondary" onClick={resetAllTasks}>Reset</button>
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