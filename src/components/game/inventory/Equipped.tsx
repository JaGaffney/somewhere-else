import React from 'react'
import { connect } from 'react-redux'

import Slot from './Slot'

import { Slot as SlotEnum } from "../../data/enums/Slot"

export const Equipped = (props) => {
    return (
        <div className="equipment__container-equipped">
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.MAIN_HAND} row="weapon" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.BACK} row="top" column="left" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.HEAD} row="top" column="center" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.NECK} row="top" column="right" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.CHEST} row="middle" column="center" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.HANDS} row="middle" column="right" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.LEGS} row="bottom" column="center" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.TRINKET} row="bottom" column="left" />
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Equipped)