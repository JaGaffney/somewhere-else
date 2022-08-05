import React from 'react'
import { connect } from 'react-redux'
import { setActionTime, resetActionTime } from "../../../actions/api"

import { getBackgroundColor } from '../../../utils/color';

import ReactTooltip from 'react-tooltip';

export const Attack = (props) => {
    function onDragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.id)
    }

    return (
        <button className="attacks__button attacks__button-general"
            style={{ borderColor: getBackgroundColor(props.attackData.getAttackById(props.attackID).type) }}
            onClick={() => {
                props.onSelectedPassiveHandler(null)
                props.onSelectedSkillHandler(props.attackID)
            }}
            draggable={true}
            onDragStart={e => onDragStart(e)}
            id={props.attackID}
            data-tip={props.attackData.getAttackById(props.attackID).name && props.attackData.getAttackById(props.attackID).name}>
            <img className="attacks__button-icon"

                src={props.attackData.getAttackById(props.attackID).icon}
                alt={props.attackData.getAttackById(props.attackID).name}
            />
            {props.attackData &&
                <div className="attacks__button-stats">
                    <span className="attacks__button-stats-topLeft">{props.attackData.getAttackById(props.attackID).cooldown}</span>
                    <span className="attacks__button-stats-topRight">{props.attackData.getAttackById(props.attackID).stamina}</span>
                    <span className="attacks__button-stats-bottomRight">{props.attackData.getAttackById(props.attackID).maxDamage}</span>
                </div>
            }
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
