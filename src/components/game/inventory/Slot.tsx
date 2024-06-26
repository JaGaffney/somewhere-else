import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import ReactTooltip from 'react-tooltip';


export const Slot = (props) => {
    const [name, setName] = useState<string>("")
    const [icon, setIcon] = useState<string>("")
    const [opactiy, setOpactiy] = useState<number>(1)
    const [errorBorder, setErrorBorder] = useState<boolean>(false)

    useEffect(() => {
    }, [props.activeEquipmentSlot])

    useEffect(() => {
        const id = props.playerData.inventory.getEquippedItem(props.location.replace(/\s/g, ''))
        const data = props.itemData.getItemById(id)
        if (id === 0) {
            setName(props.location)
            setIcon(props.placeholderIcon)
            setOpactiy(0.2)
        } else {
            setName(data.name)
            setIcon(data.icon)
            setOpactiy(1)
        }

    }, [props.playerUpdated])

    const validLocation = (slot1, slot2) => {
        if (slot1.replace(/\s/g, '') === slot2.replace(/\s/g, '')) {
            return true
        }
        return false
    }

    const dragOver = e => {
        e.preventDefault()
        const itemDataID = e.dataTransfer
        if (itemDataID) {
            const data = props.itemData.getItemById(parseInt(props.activeEquipmentDrag))
            const slot = data.slot.replace(/\s/g, '')
            if (!validLocation(slot, props.location)) {
                setErrorBorder(true)
            }
        }
    }
    const dragEnter = (e) => {
        e.preventDefault()
    }
    const dragLeave = e => {
        e.preventDefault()
        const itemDataID = e.dataTransfer
        if (itemDataID) {
            setErrorBorder(false)
        }
    }
    const slotDrop = (e) => {
        e.preventDefault()
        const itemDataID = parseInt(e.dataTransfer.getData("text"))
        const data = props.itemData.getItemById(parseInt(props.activeEquipmentDrag))

        if (validLocation(data.slot, props.location)) {
            setErrorBorder(false)
            props.playerData.inventory.setEquippedItem(props.location.replace(/\s/g, ''), itemDataID)
            props.setPlayerUpdated()
        } else {
            setErrorBorder(true)
        }
    }

    const preventDragHandler = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div onClick={(e) => {
                if (e.detail === 1) {
                    props.onActiveEquipmentSlotHandler(props.location)
                }
                if (e.detail === 2) {
                    props.playerData.inventory.setEquippedItem(props.location.replace(/\s/g, ''), 0)
                    props.setPlayerUpdated()
                }

            }}
                onDragStart={preventDragHandler}
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={slotDrop}
                draggable={false}
                data-tip={name && name}
                className={`equipment__container-equipped-slot 
                            equipment__container-equipped-equippedSlot-${props.row} 
                            equipment__container-equipped-equippedSlot-${props.column} 
                            ${props.activeSlot === props.location && "equipment__container-equipped-equippedSlot-active"}
                            ${errorBorder && "equipment__container-equipped-equippedSlot-error"}
                            
                            `}
                data-cy={props.tourSelector && props.tourSelector}

            >
                <img src={icon} alt={name} style={{ opacity: opactiy }} />
            </div>

            <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />
        </>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
    activeEquipmentDrag: state.engine.activeEquipmentDrag,
    playerUpdated: state.engine.playerUpdated,
})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(Slot)