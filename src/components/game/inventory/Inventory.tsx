import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import Equipped from './Equipped'
import Equipment from './Equipment'
import Stats from "./Stats"

import Controls from './Controls'

export const Inventory = (props) => {

    const [activeEquipmentSlot, setActiveEquipmentSlot] = useState("")
    const [activeEquipmentItem, setActiveEquipmentItem] = useState("")
    const [activeEquipmentItemID, setActiveEquipmentItemID] = useState(0)

    const onActiveEquipmentSlotHandler = (slot: string): void => {
        setActiveEquipmentSlot(slot)
    }

    const onItemSelectedHandler = (item) => {
        setActiveEquipmentItem(item)
    }

    const setActiveItemID = (id) => {
        setActiveEquipmentItemID(id)
    }

    const handleItemEquipStatus = (ID) => {
        console.log(`Equipping ${ID} to ${activeEquipmentSlot}`)
        props.playerData.inventory.setEquippedItem(activeEquipmentSlot.replace(/\s/g, ''), ID)
        props.setPlayerUpdated()
    }


    return (
        <div className="game__normal">
            <Controls activeEquipmentSlot={activeEquipmentSlot} activeEquipmentItem={activeEquipmentItem} handleItemEquipStatus={handleItemEquipStatus} activeEquipmentItemID={activeEquipmentItemID} />
            <div className="equipment__container">
                <Equipped onActiveEquipmentSlotHandler={onActiveEquipmentSlotHandler} activeEquipmentSlot={activeEquipmentSlot} />
                <Equipment activeEquipmentSlot={activeEquipmentSlot} onItemSelectedHandler={onItemSelectedHandler} setActiveItemID={setActiveItemID} />
                <Stats />
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)