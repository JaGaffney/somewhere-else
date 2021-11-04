import React from 'react'
import { connect } from 'react-redux'
import { setActiveAction } from "../../actions/api"

import { FiAlertTriangle } from "react-icons/fi";
import { FiClock } from "react-icons/fi";

export const Item = (props) => {
    console.log(props.id)


    const setActiveActionData = () => {
        const data = {
            id: props.id,
            name: props.data.name,
            level: props.data.level,
            exp: props.data.exp,
            time: props.data.time
        }
        props.setActiveAction(data)
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
})

const mapDispatchToProps = {
    setActiveAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
