import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'


import { useTour } from '@reactour/tour'

import { setPlayerUpdated } from '../../actions/api'

import Equipped from './Equipped'
import Equipment from './Equipment'
import Stats from "./Stats"

import Controls from './Controls'

export const Inventory = (props: { playerData, setPlayerUpdated: any }) => {
    const { setIsOpen } = useTour()
    const { setSteps, setCurrentStep } = useTour();

    useEffect(() => {
        setCurrentStep(0);
        setSteps([
            {
                selector: '[data-cy="equipmentContainer"]',
                content: "This is where you can handle all of your characters equipment.",
            },
            {
                selector: '[data-cy="equipmentInventory"]',
                content: "Here are all the items you currently have equipped.",
            },
            {
                selector: '[data-cy="equipmentSlot"]',
                content: "Displays the item location where your character can hold an item. On clicking you can see all items that can go into that spot",
            },

            {
                selector: '[data-cy="equipmentStorage"]',
                content: "This area shows all items you own that can be equipped in the currently selected spot.",
            },
            {
                selector: '[data-cy="equipmentStats"]',
                content: "Shows your current stats and what stats the current slot adds/subtracts.",
            },
            {
                selector: '[data-cy="equipmentName"]',
                content: "Shows the name of the currently eqiupped item.",
            },
            {
                selector: '[data-cy="equipmentSearch"]',
                content: "Allows you to search for any items in your storage.",
            },
        ]);
    }, []);

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
            <div className="equipment__container" data-cy="equipmentContainer">
                <Equipped onActiveEquipmentSlotHandler={onActiveEquipmentSlotHandler} activeEquipmentSlot={activeEquipmentSlot} />
                <Equipment activeEquipmentSlot={activeEquipmentSlot} onItemSelectedHandler={onItemSelectedHandler} setActiveItemID={setActiveItemID} handleItemEquipStatus={handleItemEquipStatus} search={search} />
                <Stats activeEquipmentSlot={activeEquipmentSlot} activeEquipmentItemID={activeEquipmentItemID} />
            </div>

            <button onClick={() => setIsOpen(true)}>Open Tour</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData
})

const mapDispatchToProps = { setPlayerUpdated }

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)