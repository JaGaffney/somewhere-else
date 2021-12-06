import React from 'react'
import { connect } from 'react-redux'

import { getBackgroundColor } from '../../../utils/color';

export const Hotbar = (props) => {
    function onDragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.id)
    }

    return (
        <div className="catcombat__hotbar-attacks">
            {Object.keys(props.playerData.classes.findJobClass(props.playerData.classes.equippedJobClass).equippedAttacks).map((id, k) => {
                const attackID = props.playerData.classes.findJobClass(props.playerData.classes.equippedJobClass).equippedAttacks[id]
                const attackData = props.attackData.getAttackById(attackID)
                return (
                    <div className="attackloadout__equipped-slot"
                        key={k}
                        onDragStart={e => onDragStart(e)}
                        id={attackID}
                        draggable={true}
                        onClick={() => props.onAttackHandler(attackID)}
                        onMouseEnter={() => props.onSelectedSkillHandler(attackID)}
                    >
                        <button className="attacks__button attacks__button-general" style={{ borderColor: getBackgroundColor(attackData ? attackData.type : "default") }}

                        >
                            <img className="attacks__button-icon" src={attackData && attackData.icon} />
                            {attackData &&
                                <div className="attacks__button-stats">
                                    <span className="attacks__button-stats-topLeft">{attackData.cooldown}</span>
                                    <span className="attacks__button-stats-topRight">{attackData.stamina}</span>
                                    <span className="attacks__button-stats-bottomRight">{attackData.maxDamage}</span>
                                </div>
                            }
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    attackData: state.attacks.attackData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Hotbar)
