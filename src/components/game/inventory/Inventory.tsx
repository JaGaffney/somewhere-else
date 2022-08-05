import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setPlayerUpdated } from '../../actions/api'

import Equipped from './Equipped'
import Equipment from './Equipment'
import Stats from "./Stats"

import Controls from './Controls'

export const Inventory = (props: { playerData, setPlayerUpdated: any }) => {

    const [activeEquipmentSlot, setActiveEquipmentSlot] = useState("")
    const [activeEquipmentItem, setActiveEquipmentItem] = useState("")
    const [activeEquipmentItemID, setActiveEquipmentItemID] = useState(0)
    const [search, setSearch] = useState<string>("")

    const onActiveEquipmentSlotHandler = (slot: string): void => {
        setActiveEquipmentSlot(slot)
        setActiveEquipmentItem("")
        setActiveEquipmentItemID(0)
    }

    const onItemSelectedHandler = (item): void => {
        setActiveEquipmentItem(item)
    }

    const setActiveItemID = (id: number): void => {
        setActiveEquipmentItemID(id)
    }

    const handleItemEquipStatus = (ID: number): void => {
        props.playerData.inventory.setEquippedItem(activeEquipmentSlot.replace(/\s/g, ''), ID)
        props.setPlayerUpdated()
    }

    return (
        <div className="game__normal">
            <Controls activeEquipmentSlot={activeEquipmentSlot} activeEquipmentItem={activeEquipmentItem} handleItemEquipStatus={handleItemEquipStatus} activeEquipmentItemID={activeEquipmentItemID} search={search} setSearch={setSearch} />
            <div className="equipment__container">
                <Equipped onActiveEquipmentSlotHandler={onActiveEquipmentSlotHandler} activeEquipmentSlot={activeEquipmentSlot} />
                <Equipment activeEquipmentSlot={activeEquipmentSlot} onItemSelectedHandler={onItemSelectedHandler} setActiveItemID={setActiveItemID} handleItemEquipStatus={handleItemEquipStatus} search={search} />
                <Stats activeEquipmentSlot={activeEquipmentSlot} activeEquipmentItemID={activeEquipmentItemID} />
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData
})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)