import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

export const RotationItems = (props) => {
    useEffect(() => {
    }, [props.playerUpdated])


    const [componentHover, setComponentHover] = useState(false)
    const [activeHover, setActiveHover] = useState("")

    const dragOver = e => {

        e.preventDefault()
        setComponentHover(true)
    }
    const dragEnter = e => {
        setActiveHover(e.target.id)
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

        if (props.editable) {
            props.data.loadout.getLoadoutByNumber(props.data.loadout.activeLoadout).changeRotation(parseInt(attackDataID), slot)
        }


    }

    return (
        <ul>
            {props.rotation.map((attackID: string, k: number) => {
                const attackData = props.attackData.getAttackById(parseInt(attackID))
                let name = ""
                if (attackData !== undefined) {
                    name = attackData.name
                }

                if (!props.editable) {
                    return (
                        <li key={k}><span>{k + 1}</span><span className="catcombat__description-rotation-single">{name !== "" ? <img src={attackData.icon} /> : null} {name}</span></li>
                    )
                } else {
                    return (
                        <li
                            className={`${componentHover ? "catcombat__description-rotationActive" : ""}`}
                            key={k}
                            onDragOver={dragOver}
                            onDragEnter={dragEnter}
                            onDragLeave={dragLeave}
                            onDrop={(e) => attackDrop(e, k)}>
                            <span>{k + 1}</span><span className="catcombat__description-rotation-single">{name !== "" ? <img src={attackData.icon} /> : null}  {name}</span>
                        </li>
                    )
                }
            })}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    attackData: state.attacks.attackData,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RotationItems)
