import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Slot from './Slot'

import { Slot as SlotEnum } from "../../data/enums/Slot"


// icons
import MAINHAND from "../../../images/items/template/weapon.svg"
import OFFHAND from "../../../images/items/template/offhand.svg"
import BACK from "../../../images/items/template/back.svg"
import HEAD from "../../../images/items/template/head.svg"
import NECK from "../../../images/items/template/neck.svg"
import CHEST from "../../../images/items/template/chest.svg"
import HANDS from "../../../images/items/template/hands.svg"
import LEGS from "../../../images/items/template/legs.svg"
import FEET from "../../../images/items/template/feet.svg"
import TRINKET from "../../../images/items/template/trinket.svg"

export const Equipped = (props: { activeEquipmentSlot: string, onActiveEquipmentSlotHandler }) => {
    return (
        <div className="equipment__container-equipped" data-cy="equipmentInventory">
            <Slot activeSlot={props.activeEquipmentSlot} placeholderIcon={MAINHAND} onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.MAIN_HAND} row="2" column="left" tourSelector={"equipmentSlot"} />
            <Slot activeSlot={props.activeEquipmentSlot} placeholderIcon={OFFHAND} onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.OFF_HAND} row="2" column="right" />
            <Slot activeSlot={props.activeEquipmentSlot} placeholderIcon={BACK} onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.BACK} row="1" column="left" />
            <Slot activeSlot={props.activeEquipmentSlot} placeholderIcon={HEAD} onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.HEAD} row="1" column="center" />
            <Slot activeSlot={props.activeEquipmentSlot} placeholderIcon={NECK} onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.NECK} row="1" column="right" />
            <Slot activeSlot={props.activeEquipmentSlot} placeholderIcon={CHEST} onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.CHEST} row="2" column="center" />
            <Slot activeSlot={props.activeEquipmentSlot} placeholderIcon={HANDS} onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.HANDS} row="4" column="left" />
            <Slot activeSlot={props.activeEquipmentSlot} placeholderIcon={LEGS} onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.LEGS} row="3" column="center" />
            <Slot activeSlot={props.activeEquipmentSlot} placeholderIcon={FEET} onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.FEET} row="4" column="center" />
            <Slot activeSlot={props.activeEquipmentSlot} placeholderIcon={TRINKET} onActiveEquipmentSlotHandler={props.onActiveEquipmentSlotHandler} location={SlotEnum.TRINKET} row="4" column="right" />
        </div>
    )
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Equipped)