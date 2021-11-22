import React from 'react'
import { connect } from 'react-redux'
import { setActionTime, resetActionTime } from "../../../actions/api"

import { FiClock } from "react-icons/fi";

export const Attack = (props) => {
    const setEquippedSkill = (data) => {
        console.log("skill clicked")
        console.log(data)
    }

    return (
        <button className="attacks__button" onClick={() => setEquippedSkill(props.attackData)}>
            <div className="attacks__button-icon"><img src={props.attackData.getAttackById(props.attackID).icon} /></div>
            {/* <div className="attacks__button-content">
                <span className="attacks__button-name">{props.data.name}</span>
                <span className="attacks__button-level">Level {props.data.level}</span>
                <span className="attacks__button-details">{props.data.exp} xp</span>
                <span className="attacks__button-details"><FiClock /> {props.data.time} seconds</span>
            </div> */}
        </button>
    )
}



const mapStateToProps = (state) => ({
    attackData: state.attacks.attackData,
    activePage: state.engine.activePage
})

const mapDispatchToProps = {
    setActionTime, resetActionTime
}

export default connect(mapStateToProps, mapDispatchToProps)(Attack)
