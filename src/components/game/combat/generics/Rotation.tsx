import React, { useState } from 'react'
import { connect } from 'react-redux'

export const Rotation = (props) => {
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
        console.log("got here drop")
        e.preventDefault()
        setComponentHover(false)
        const attackDataID = e.dataTransfer.getData("text")

        console.log(attackDataID, slot)
        console.log(props.data)
        props.data.classes.findJobClass(props.data.classes.equippedJobClass).changeRotation(attackDataID, slot)

    }

    return (
        <div className="catcombat__description-rotation">
            {props.data && (
                <>
                    <p>Set your rotation for auto-combat</p>
                    <ul>
                        {props.data.classes.findJobClass(props.data.classes.equippedJobClass).rotation.map((attackID: string, k: number) => {
                            const attackData = props.attackData.getAttackById(parseInt(attackID))
                            let name = ""
                            if (attackData !== undefined) {
                                name = attackData.name
                            }
                            return (
                                <li
                                    className={`${componentHover ? "catcombat__description-rotationActive" : ""}`}
                                    key={k}
                                    onDragOver={dragOver}
                                    onDragEnter={dragEnter}
                                    onDragLeave={dragLeave}
                                    onDrop={(e) => attackDrop(e, k)}>{k + 1} - {name}</li>
                            )
                        })}


                    </ul>
                    {props.type === "player" ? (
                        <button>Being auto combat</button>
                    )
                        : (
                            <>
                                <button>Drops</button>
                                <button>Run away</button>
                            </>
                        )}
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    attackData: state.attacks.attackData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Rotation)
