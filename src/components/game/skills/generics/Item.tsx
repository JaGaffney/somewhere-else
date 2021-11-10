import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setActiveAction, setActionTime } from "../../../actions/api"

import { FiAlertTriangle } from "react-icons/fi";
import { FiClock } from "react-icons/fi";

export const Item = (props) => {
    const [update, setUpdate] = useState(false)
    const setActiveActionData = () => {
        const data = {
            id: props.id,
            name: props.data.name,
            level: props.data.level,
            exp: props.data.exp,
            time: props.data.time
        }
        props.setActiveAction(data)

        if (update === false) {
            setUpdate(true)
        } else {
            setUpdate(false)
        }

        props.setActionTime(props.data.name, !update, props.data.time)
    }


    return (
        <div className="action__item" onClick={() => setActiveActionData()}>
            <div className="action__item-icon"><FiAlertTriangle /></div>
            <span className="action__item-name">{props.data.name}</span>
            <span className="action__item-name">Level {props.data.level}</span>
            <span className="action__item-details">{props.data.exp} xp / <FiClock />  {props.data.time} seconds</span>
        </div>
    )
}



const mapStateToProps = (state) => ({
    counter: state.player.counter,
})

const mapDispatchToProps = {
    setActiveAction, setActionTime
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
