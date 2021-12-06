import React, { useState } from 'react'
import { connect } from 'react-redux'

export const RotationItems = (props) => {
    const [componentHover, setComponentHover] = useState(false)
    const [activeHover, setActiveHover] = useState("")

    const dragOver = e => {

        e.preventDefault()
        setComponentHover(true)
    }
    const dragEnter = e => {
        console.log(e.target.id)
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
            props.data.classes.findJobClass(props.data.classes.equippedJobClass).changeRotation(attackDataID, slot)
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
                        <li key={k}>{k + 1} - {name}</li>
                    )
                } else {
                    return (
                        <li
                            className={`${componentHover ? "catcombat__description-rotationActive" : ""}`}
                            key={k}
                            onDragOver={dragOver}
                            onDragEnter={dragEnter}
                            onDragLeave={dragLeave}
                            onDrop={(e) => attackDrop(e, k)}>{k + 1} - {name}</li>
                    )
                }
            })}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    attackData: state.attacks.attackData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RotationItems)
