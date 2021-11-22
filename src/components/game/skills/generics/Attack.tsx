import React from 'react'
import { connect } from 'react-redux'
import { setActionTime, resetActionTime } from "../../../actions/api"

import { FiClock } from "react-icons/fi";

export const Attack = (props) => {
    function onDragStart(e) {
        console.log(e.target.id)
        e.dataTransfer.setData("text/plain", e.target.id)
    }

    return (
        <button className={`attacks__button ${props.attackData.getAttackById(props.attackID).type === "general" ? "attacks__button-general" : null}`} onClick={() => props.onSelectedSkillHandler(props.attackID)} >
            <img className="attacks__button-icon"
                draggable={true}
                onDragStart={e => onDragStart(e)}
                id={props.attackID}
                src={props.attackData.getAttackById(props.attackID).icon}
                alt={props.attackData.getAttackById(props.attackID).name}
            />
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
