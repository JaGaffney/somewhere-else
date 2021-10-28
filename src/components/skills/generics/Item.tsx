import React from 'react'
import { connect } from 'react-redux'
import { setActiveAction } from "../../actions/api"

import { FiAlertTriangle } from "react-icons/fi";
import { FiClock } from "react-icons/fi";

export const Item = (props) => {
    return (
        <div className="action__item" onClick={() => props.setActiveAction(props.id)}>
            <div className="action__item-icon"><FiAlertTriangle /></div>
            <span className="action__item-name">{props.data.name}</span>
            <span className="action__item-name">Level {props.data.level}</span>
            <span className="action__item-details">{props.data.xp} xp / <FiClock />  {props.data.time} seconds</span>
        </div>
    )
}



const mapStateToProps = (state) => ({
    activeSkill: state.activeSkill
})

const mapDispatchToProps = {
    setActiveAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
