import React, { useState } from 'react'
import { connect } from 'react-redux'

import Equipped from './Equipped'
import Equipment from './Equipment'
import Stats from "./Stats"

import Controls from '../player/Controls'

export const Inventory = (props) => {

    const [activeEquipmentSlot, setActiveEquipmentSlot] = useState("")
    const [activeEquipmentItem, setActiveEquipmentItem] = useState("")

    const onActiveEquipmentSlotHandler = (slot: string): void => {
        setActiveEquipmentSlot(slot)
    }

    const onItemSelectedHandler = (item) => {
        console.log(item)
        //props.playerData.inventory.setEquippedItem("MainHand", 21)
    }

    const setActiveItemID = (id) => {
        console.log({ id })
        props.playerData.inventory.setEquippedItem(activeEquipmentSlot, id)
    }


    return (
        <div className="game__normal">
            <Controls />
            <div className="equipment__container">
                <Equipped onActiveEquipmentSlotHandler={onActiveEquipmentSlotHandler} />
                <Equipment activeEquipmentSlot={activeEquipmentSlot} onItemSelectedHandler={onItemSelectedHandler} setActiveItemID={setActiveItemID} />
                <Stats />
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)