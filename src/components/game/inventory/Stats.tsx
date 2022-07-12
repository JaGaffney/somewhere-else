import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { Slot } from "../../data/enums/Slot"
import { IEquipmentStatsKeys } from '../../data/items/EquipmentStats'

import StatValue from './StatValue'

export const Stats = (props) => {
    const [currentStats, setCurrentStats] = useState({})

    const currentStatCalculator = () => {
        const tempStats = {}
        for (const [key, value] of Object.entries(Slot)) {
            const id = props.playerData.inventory.getEquippedItem(value.replace(/\s/g, ''))
            if (id !== 0 && id !== undefined) {
                const data = props.itemData.getItemById(id)
                const stats = data.equipmentStats
                for (let stat in stats) {
                    if (tempStats[stat]) {
                        tempStats[stat] = tempStats[stat] + stats[stat]
                    } else {
                        tempStats[stat] = stats[stat]
                    }

                }
            }
        }
        setCurrentStats(tempStats)
    }

    useEffect(() => {
        currentStatCalculator()
    }, [])

    useEffect(() => {
        currentStatCalculator()
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
                }
                else if (!newItem[location]) {
                    return - equippedItemStats[location]
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
            {Object.keys(IEquipmentStatsKeys).map((i, k) => {
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