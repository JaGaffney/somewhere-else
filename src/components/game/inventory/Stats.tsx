import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { Slot } from "../../data/enums/Slot"

import StatValue from './StatValue'

export const Stats = (props) => {
    const defaultStatState = {
        attack: 0,
        defence: 0,
        weight: 0,
        speed: 0
    }

    const [currentStats, setCurrentStats] = useState(defaultStatState)

    useEffect(() => {
        const tempStats = defaultStatState
        for (const [key, value] of Object.entries(Slot)) {
            const id = props.playerData.inventory.getEquippedItem(value.replace(/\s/g, ''))
            if (id !== 0 && id !== undefined) {
                const data = props.itemData.getItemById(id)
                const stats = data.equipmentStats
                tempStats.attack += stats.attack
                tempStats.defence += stats.defence
                tempStats.weight += stats.weight
                tempStats.speed += stats.speed
            }
        }
        setCurrentStats(tempStats)
    }, [props.playerUpdated])



    const getStatDifference = (location: string) => {
        if (props.activeEquipmentSlot && props.activeEquipmentItemID) {
            const newItem = props.itemData.getItemById(props.activeEquipmentItemID).equipmentStats

            const id = props.playerData.inventory.getEquippedItem(props.activeEquipmentSlot.replace(/\s/g, ''))
            if (id === 0) {
                return newItem[location]
            }

            const equippedItem = props.itemData.getItemById(id)
            if (equippedItem) {
                const equippedItemStats = equippedItem.equipmentStats
                if (equippedItemStats[location] > newItem[location]) {
                    return - newItem[location]
                }
                else if (equippedItemStats[location] === newItem[location]) {
                    return null
                } else {
                    return newItem[location]
                }
            }
        } else {
            return null
        }
    }

    return (
        <div className="equipment__container-stats">
            {Object.keys(currentStats).map((i, k) => {
                return (
                    <StatValue statType={[i]} currentValue={currentStats[i]} getStatDifference={getStatDifference} />

                )
            })}
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