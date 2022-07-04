import React from 'react'
import { connect } from 'react-redux'

import Slot from './Slot'

import { Slot as SlotEnum } from "../../data/enums/Slot"

// @ts-expect-error
import PLACEHOLDER from "../../../images/placeholder.svg"

export const Equipped = (props) => {
    return (
        <div className="equipment__container-equipped">
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.MainHand} name="" icon={PLACEHOLDER} row="weapon" column="" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.Back} name="test" icon={PLACEHOLDER} row="top" column="left" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.Head} name="" icon={PLACEHOLDER} row="top" column="center" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.Neck} name="" icon={PLACEHOLDER} row="top" column="right" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.Chest} name="" icon={PLACEHOLDER} row="middle" column="center" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.Hands} name="" icon={PLACEHOLDER} row="middle" column="right" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.Legs} name="" icon={PLACEHOLDER} row="bottom" column="center" />
            <Slot onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.Trinket} name="" icon={PLACEHOLDER} row="bottom" column="left" />
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Equipped)