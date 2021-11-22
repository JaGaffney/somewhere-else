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
    const attackDrop = (e, slot) => {
        e.preventDefault()
        setComponentHover(false)
        const attackDataID = e.dataTransfer.getData("text")

        console.log(attackDataID, slot)
        props.playerData.classes.findJobClass(props.activePage).changeAttackLocation(parseInt(attackDataID), parseInt(slot))
    }

    return (
        <div className="attackloadout">
            <div className="attackloadout__equipped">
                <div className="attackloadout__equipped-attacks">

                    {Object.keys(props.playerData.classes.findJobClass(props.activePage).equippedAttacks).map((id, k) => {
                        const attackID = props.playerData.classes.findJobClass(props.activePage).equippedAttacks[id]
                        const attackData = props.attackData.getAttackById(attackID)
                        return (
                            <div className="attackloadout__equipped-slot"
                                key={k}
                                onClick={() => props.onSelectedSkillHandler(attackID)}
                            >
                                <div className="attacks__button"
                                    onDragOver={dragOver}
                                    onDragEnter={dragEnter}
                                    onDragLeave={dragLeave}
                                    onDrop={(e) => attackDrop(e, k + 1)}
                                >
                                    <img className="attacks__button-icon" src={attackData && attackData.icon} />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="attackloadout__equipped-talents">
                    <div className="attackloadout__equipped-slot">
                        <div className="attacks__button">
                            <img className="attacks__button-icon" src={""} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="attackloadout__info">
                <h3>{props.selectedSkill ? props.attackData.getAttackById(props.selectedSkill).name : "Attack"}</h3>
                <div className="attacks__button">
                    <img className="attacks__button-icon" src={props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).icon} />
                </div>
                <div className="attacksloadout__stats">

                    <span className="attacksloadout__stats-description">
                        min damage
                        <span>
                            {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).minDamage}
                        </span>
                    </span>
                    <span className="attacksloadout__stats-description">
                        max damage
                        <span>
                            {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).maxDamage}
                        </span>
                    </span>
                    <span className="attacksloadout__stats-description">
                        cooldown
                        <span>
                            {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).cooldown}
                        </span>
                    </span>
                    <span className="attacksloadout__stats-description">
                        stamina
                        <span>
                            {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).stamina}
                        </span>
                    </span>
                    <span className="attacksloadout__stats-description">
                        Effect
                        <span>
                            {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).effect.value} {props.selectedSkill && props.attackData.getAttackById(props.selectedSkill).effect.type}
                        </span>
                    </span>
                </div>

                <button className="attackloadout__eqiup">Equip</button>


            </div>

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
