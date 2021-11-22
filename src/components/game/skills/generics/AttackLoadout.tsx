import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setActionTime, resetActionTime } from "../../../actions/api"

import { FiClock } from "react-icons/fi";

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
    const attackDrop = e => {
        e.preventDefault()
        setComponentHover(false)
        const attackDataID = e.dataTransfer.getData("text")

        console.log(attackDataID)
    }

    console.log(props.attackData)
    return (
        <div className="attackloadout">
            <div className="attackloadout__equipped">

                <div className="attackloadout__equipped-slot">
                    <div className="attacks__button"
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={attackDrop}
                    >
                        <img className="attacks__button-icon" src={require("../../../../images/combat/attack.svg")} />
                    </div>
                </div>
                <div className="attackloadout__equipped-slot">
                    <div className="attacks__button"
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={attackDrop}
                    >
                        <img className="attacks__button-icon" src={require("../../../../images/combat/speed.svg")} />
                    </div>
                </div>
                <div className="attackloadout__equipped-slot">
                    <div className="attacks__button">
                        <img className="attacks__button-icon" src={""} />
                    </div>
                </div>
                <div className="attackloadout__equipped-slot">
                    <div className="attacks__button">
                        <img className="attacks__button-icon" src={""} />
                    </div>
                </div>
                <div className="attackloadout__equipped-slot">
                    <div className="attacks__button">
                        <img className="attacks__button-icon" src={""} />
                    </div>
                </div>
                <div className="attackloadout__equipped-slot">
                    <div className="attacks__button">
                        <img className="attacks__button-icon" src={""} />
                    </div>
                </div>

            </div>

            <div className="attackloadout__info">
                {props.selectedSkill !== null &&
                    <>
                        <h3>{props.attackData.getAttackById(props.selectedSkill).name}</h3>
                        <div className="attacks__button">
                            <img className="attacks__button-icon" src={props.attackData.getAttackById(props.selectedSkill).icon} />
                        </div>
                        <div className="attacksloadout__stats">

                            <span className="attacksloadout__stats-description">
                                min damage
                                <span>
                                    {props.attackData.getAttackById(props.selectedSkill).minDamage}
                                </span>
                            </span>
                            <span className="attacksloadout__stats-description">
                                max damage
                                <span>
                                    {props.attackData.getAttackById(props.selectedSkill).maxDamage}
                                </span>
                            </span>
                            <span className="attacksloadout__stats-description">
                                cooldown
                                <span>
                                    {props.attackData.getAttackById(props.selectedSkill).cooldown}
                                </span>
                            </span>
                            <span className="attacksloadout__stats-description">
                                stamina
                                <span>
                                    {props.attackData.getAttackById(props.selectedSkill).stamina}
                                </span>
                            </span>
                            <span className="attacksloadout__stats-description">
                                Effect
                                <span>
                                    {props.attackData.getAttackById(props.selectedSkill).effect.value} {props.attackData.getAttackById(props.selectedSkill).effect.type}
                                </span>
                            </span>
                        </div>

                        <button className="attackloadout__eqiup">Equip</button>

                    </>
                }
            </div>

        </div>
    )
}



const mapStateToProps = (state) => ({
    attackData: state.attacks.attackData,
    activePage: state.engine.activePage
})

const mapDispatchToProps = {
    setActionTime, resetActionTime
}

export default connect(mapStateToProps, mapDispatchToProps)(AttackLoadout)
