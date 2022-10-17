import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setActionTime, resetActionTime } from "../../actions/api"
import { getBackgroundColor } from '../../utils/color';

export const AttackLoadout = (props) => {
    const [componentHover, setComponentHover] = useState<boolean>(false)

    useEffect(() => {

    }, [props.playerUpdated])

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
        if (!isNaN(attackDataID)) {
            props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout).changeAttackLocation(parseInt(attackDataID), slot)
        }
    }
    const passiveDrop = (e, slot: number) => {
        e.preventDefault()
        setComponentHover(false)
        const passiveDataID = e.dataTransfer.getData("text").split("-")
        if (isNaN(passiveDataID)) {
            const id = parseInt(passiveDataID[1])
            props.playerData.loadout.loadout[props.playerData.loadout.activeLoadout].changePassiveLocation(id, slot)
        }
    }

    return (
        <div className="attackloadout">

            <div className="attackloadout__equipped">
                <div className="attackloadout__equipped-active">
                    <h3>Active Skills</h3>
                    {props.playerData &&
                        <div className="attackloadout__equipped-attacks">
                            {props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout) && Object.keys(props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout).equippedAttacks).map((id, k) => {
                                const attackID: number = props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout).equippedAttacks[id]
                                const attackData = props.attackData.getAttackById(attackID)
                                console.log(attackData)
                                const slot: number = k + 1
                                return (
                                    <div className="attackloadout__equipped-slot"
                                        data-tip={attackData && attackData.name}
                                        key={k}
                                        onClick={(e) => {
                                            props.onSelectedPassiveHandler(null)
                                            if (e.detail === 1) {
                                                props.onSelectedSkillHandler(attackID)
                                            }
                                            if (e.detail === 2) {
                                                props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout).changeAttackLocation(null, slot)
                                                props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout).removeAttackFromRotation(slot)
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
                                            {attackData ? <img className="attacks__button-icon" src={attackData && attackData.icon} /> : <span className="attacks__button-icon attacks__button-icon-placeholder">{k + 1}</span>}

                                            {attackData &&
                                                <div className="attacks__button-stats">
                                                    <span className="attacks__button-stats-topLeft">{attackData.cooldown}</span>
                                                    <span className="attacks__button-stats-topRight">{attackData.stamina}</span>
                                                    <span className="attacks__button-stats-bottomRight">{attackData.power}</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>

                <div className="attackloadout__equipped-active">
                    <h3>Active Passives</h3>
                    <div className="attackloadout__equipped-attacks">

                        {props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout) && Object.keys(props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout).equippedPassives).map((i, k) => {
                            const data = props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout).getEquippedPassiveAtLocation(i)
                            const slot: number = k + 1
                            return (
                                <div className="attackloadout__equipped-slot" key={k}>
                                    <div
                                        onDragOver={dragOver}
                                        onDragEnter={dragEnter}
                                        onDragLeave={dragLeave}
                                        onDrop={(e) => passiveDrop(e, slot)}
                                        className="attacks__button"
                                        data-tip={data && props.passiveData.getPassiveById(data) && data && props.passiveData.getPassiveById(data).name}
                                        style={{ borderColor: getBackgroundColor(data && props.passiveData.getPassiveById(data) && data && props.passiveData.getPassiveById(data).job) }}
                                        onClick={(e) => {
                                            props.onSelectedSkillHandler(null)
                                            if (e.detail === 1) {
                                                props.onSelectedPassiveHandler(props.passiveData.getPassiveById(data))
                                            }
                                            if (e.detail === 2) {
                                                props.playerData.loadout.getLoadoutByNumber(props.playerData.loadout.activeLoadout).changePassiveLocation(null, slot)
                                                props.onSelectedPassiveHandler(null)
                                            }
                                        }}
                                    >
                                        {data ? <img className="attacks__button-icon" src={data && props.passiveData.getPassiveById(data).icon} /> : <span className="attacks__button-icon attacks__button-icon-placeholder">{k + 1}</span>}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


        </div >
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    passiveData: state.passives.passiveData,
    attackData: state.attacks.attackData,
    activePage: state.engine.activePage,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = {
    setActionTime, resetActionTime
}

export default connect(mapStateToProps, mapDispatchToProps)(AttackLoadout)
