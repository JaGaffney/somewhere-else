import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setActionTime, resetActionTime } from "../../../actions/api"

import AttackInfo from './AttackInfo';

import { getBackgroundColor } from '../../../utils/color';

export const AttackLoadout = (props) => {
    const [componentHover, setComponentHover] = useState(false)


    const dragOver = e => {
        e.preventDefault()
        setComponentHover(true)
    }
    const dragEnter = e => {
        e.preventDefault()
        setComponentHover(true)
    }
    const dragLeave = e => {
        e.preventDefault()
        setComponentHover(false)
    }
    const attackDrop = (e, slot: number) => {
        e.preventDefault()
        setComponentHover(false)
        const attackDataID = e.dataTransfer.getData("text")

        console.log(attackDataID, slot)
        props.playerData.classes.findJobClass(props.activePage).changeAttackLocation(parseInt(attackDataID), slot)
    }

    return (
        <div className="attackloadout">
            <div className="attackloadout__equipped">

                {props.playerData &&
                    <div className="attackloadout__equipped-attacks">
                        {Object.keys(props.playerData.classes.findJobClass(props.activePage).equippedAttacks).map((id, k) => {
                            const attackID: number = props.playerData.classes.findJobClass(props.activePage).equippedAttacks[id]
                            const attackData = props.attackData.getAttackById(attackID)
                            const slot: number = k + 1
                            return (
                                <div className="attackloadout__equipped-slot"
                                    key={k}
                                    onClick={() => props.onSelectedSkillHandler(attackID)}
                                >
                                    <div className="attacks__button attacks__button-general" style={{ borderColor: getBackgroundColor(attackData ? attackData.type : "default") }}
                                        onDragOver={dragOver}
                                        onDragEnter={dragEnter}
                                        onDragLeave={dragLeave}
                                        onDrop={(e) => attackDrop(e, slot)}
                                    >
                                        <img className="attacks__button-icon" src={attackData && attackData.icon} />
                                        {attackData &&
                                            <div className="attacks__button-stats">
                                                <span className="attacks__button-stats-topLeft">{attackData.cooldown}</span>
                                                <span className="attacks__button-stats-topRight">{attackData.stamina}</span>
                                                <span className="attacks__button-stats-bottomRight">{attackData.maxDamage}</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }

                <div className="attackloadout__equipped-talents">
                    <div className="attackloadout__equipped-slot">
                        <div className="attacks__button">
                            <img className="attacks__button-icon" src={""} />
                        </div>
                    </div>
                </div>


            </div>

            <AttackInfo selectedSkill={props.selectedSkill} />
        </div>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    attackData: state.attacks.attackData,
    activePage: state.engine.activePage
})

const mapDispatchToProps = {
    setActionTime, resetActionTime
}

export default connect(mapStateToProps, mapDispatchToProps)(AttackLoadout)
