import React, { useState } from 'react'
import { connect } from 'react-redux'

import Equipped from './Equipped'
import Equipment from './Equipment'
import Stats from "./Stats"

import Controls from '../player/Controls'

export const Inventory = (props) => {

    const [activeEquipmentSlot, setActiveEquipmentSlot] = useState("weapon")

    const onActiveEquipmentSlotHandler = (slot: string): void => {
        setActiveEquipmentSlot(slot)
    }


    return (
        <div className="game__normal">
            <Controls />
            <div className="equipment__container">
                <Equipped onActiveEquipmentSlotHandler={onActiveEquipmentSlotHandler} />
                <Equipment activeEquipmentSlot={activeEquipmentSlot} />
                <Stats />
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)