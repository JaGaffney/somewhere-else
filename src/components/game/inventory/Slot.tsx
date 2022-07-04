import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';


export const Slot = (props) => {
    const [name, setName] = useState("")
    const [icon, setIcon] = useState("")

    useEffect(() => {
        const id = props.playerData.inventory.getEquippedItem(props.location.replace(/\s/g, ''))
        const data = props.itemData.getItemById(id)
        if (id === 0) {
            setName(props.location)
        } else {
            setName(data.name)
        }
        setIcon(data.icon)
    }, [])

    return (
        <>
            <div onClick={() => props.onActiveEquipmentSlotHandler(props.location)} data-tip={name && name} className={`equipment__container-equipped-slot equipment__container-equipped-equippedSlot-${props.row} equipment__container-equipped-equippedSlot-${props.column}`}>
                <span>{props.location}</span>
                <img src={icon} alt={name} />
            </div>

            <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />
        </>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Slot)