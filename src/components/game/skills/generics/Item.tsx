import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setActionTime, resetActionTime, setPlayerUpdated } from "../../../actions/api"

import { FiClock } from "react-icons/fi";

export const Item = (props) => {

    const [manpower, setManpower] = useState<number>(props.playerData.settlement.tasks[props.id] || 0)

    // const setActiveActionData = () => {
    //     props.resetActionTime()
    //     const page = props.activePage
    //     const data = {
    //         id: props.id,
    //         skill: page
    //     }

    //     props.setActionTime(props.data.name, props.data.time, null, data)
    // }

    const handleManpowerChange = (name: string, value: number): void => {
        props.playerData.settlement.updateTask(name, value)
        setManpower(manpower + value)
        props.setPlayerUpdated()
    }

    return (
        <div className="action__item">
            <div className="action__item-icon"><img src={props.data.icon} /></div>
            <div className="action__item-content">
                <span className="action__item-name">{props.data.name} ({manpower})</span>
                <div className="action__item-buttons">
                    <button disabled={manpower === 0} onClick={() => handleManpowerChange(props.id, -1)}>[ - ]</button>

                    <button disabled={!props.enoughManpower} onClick={() => handleManpowerChange(props.id, 1)}>[ + ]</button>
                </div>
                <span className="action__item-level">Manpower {props.data.manpower}</span>
                <span className="action__item-level">Level {props.data.level}</span>
                <span className="action__item-details">{props.data.exp} xp</span>
                <span className="action__item-details"><FiClock /> {props.data.time} seconds</span>
            </div>

        </div>
    )
}



const mapStateToProps = (state) => ({
    activePage: state.engine.activePage,
    playerData: state.player.playerData,
})

const mapDispatchToProps = {
    setActionTime, resetActionTime, setPlayerUpdated
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
