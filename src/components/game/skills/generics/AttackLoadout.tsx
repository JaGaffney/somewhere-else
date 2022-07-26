import React, { useState } from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';

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
                                    data-tip={attackData && attackData.name}
                                    key={k}
                                    onClick={(e) => {
                                        if (e.detail === 1) {
                                            props.onSelectedSkillHandler(attackID)
                                        }
                                        if (e.detail === 2) {
                                            props.playerData.classes.findJobClass(props.activePage).changeAttackLocation(parseInt(null), slot)
                                            props.onSelectedSkillHandler(null)
                                        }

                                    }}
                                >
                                    <div className="attacks__button attacks__button-general" style={{ borderColor: getBackgroundColor(attackData ? attackData.type : "default") }}
                                        onDragOver={dragOver}
                                        onDragEnter={dragEnter}
                                        onDragLeave={dragLeave}
                                        onDrop={(e) => attackDrop(e, slot)}
                                    >
                                        {attackData && <img className="attacks__button-icon" src={attackData && attackData.icon} />}

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
                        {Object.keys(props.playerData.passives.equippedPassives).map((i, k) => {
                            const data = props.playerData.passives.getEquippedPassiveAtLocation(i)
                            return (
                                <div className="attacks__button"
                                    data-tip={data && props.passiveData.getPassiveById(data) && data && props.passiveData.getPassiveById(data).name}>
                                    <img className="attacks__button-icon" src={data && props.passiveData.getPassiveById(data).icon} />
                                </div>
                            )



                        })}

                    </div>
                </div>

                <button onClick={() => props.playerData.passives.changeEquippedPassives(1, 1)}>test</button>


            </div>

            <AttackInfo selectedSkill={props.selectedSkill} />

            <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />
        </div>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    passiveData: state.passives.passiveData,
    attackData: state.attacks.attackData,
    activePage: state.engine.activePage,
})

const mapDispatchToProps = {
    setActionTime, resetActionTime
}

export default connect(mapStateToProps, mapDispatchToProps)(AttackLoadout)
