import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { Slot } from "../../data/enums/Slot"

import StatValue from './StatValue'

export const Stats = (props) => {

    const [attack, setAttack] = useState(0)
    const [defence, setDefence] = useState(0)
    const [weight, setWeight] = useState(0)
    const [speed, setSpeed] = useState(0)

    useEffect(() => {
        const currentStats = {
            attack: 0,
            defence: 0,
            weight: 0,
            speed: 0
        }
        for (const [key, value] of Object.entries(Slot)) {
            const id = props.playerData.inventory.getEquippedItem(value.replace(/\s/g, ''))
            if (id !== 0 && id !== undefined) {
                const data = props.itemData.getItemById(id)
                const stats = data.equipmentStats
                currentStats.attack += stats.attack
                currentStats.defence += stats.defence
                currentStats.weight += stats.weight
                currentStats.speed += stats.speed
            }
        }

        setAttack(currentStats.attack)
        setDefence(currentStats.defence)
        setWeight(currentStats.weight)
        setSpeed(currentStats.speed)


    }, [props.playerUpdated])


    const getStatDifference = (location: string) => {
        if (props.activeEquipmentSlot && props.activeEquipmentItemID) {
            const newItem = props.itemData.getItemById(props.activeEquipmentItemID).equipmentStats

            const id = props.playerData.inventory.getEquippedItem(props.activeEquipmentSlot.replace(/\s/g, ''))
            if (id === 0) {
                return newItem[location]
            }

            const equippedItem = props.itemData.getItemById(id).equipmentStats
            if (equippedItem[location] > newItem[location]) {
                return - newItem[location]
            }
            else if (equippedItem[location] === newItem[location]) {
                return null
            } else {
                return newItem[location]
            }
        } else {
            return null
        }
    }




    return (
        <div className="equipment__container-stats">
            <StatValue statType="attack" currentValue={attack} getStatDifference={getStatDifference} />
            <StatValue statType="defence" currentValue={defence} getStatDifference={getStatDifference} />
            <StatValue statType="weight" currentValue={weight} getStatDifference={getStatDifference} />
            <StatValue statType="speed" currentValue={speed} getStatDifference={getStatDifference} />


        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Stats)