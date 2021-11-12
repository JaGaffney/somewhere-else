import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setActionTime, resetActionTime } from "../../../actions/api"

import { FiClock } from "react-icons/fi";

export const Item = (props) => {
    const setActiveActionData = () => {
        props.resetActionTime()
        const page = props.activePage
        const data = {
            id: props.id,
            skill: page
        }

        props.setActionTime(props.data.name, props.data.time, data)

    }

    return (
        <div className="action__item" onClick={() => setActiveActionData()}>
            <div className="action__item-icon"><img src={props.data.icon} /></div>
            <div className="action__item-content">
                <span className="action__item-name">{props.data.name}</span>
                <span className="action__item-level">Level {props.data.level}</span>
                <span className="action__item-details">{props.data.exp} xp</span>
                <span className="action__item-details"><FiClock /> {props.data.time} seconds</span>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    counter: state.player.counter,
    activePage: state.player.activePage
})

const mapDispatchToProps = {
    setActionTime, resetActionTime
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
