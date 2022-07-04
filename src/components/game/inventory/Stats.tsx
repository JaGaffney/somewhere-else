import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { Slot } from "../../data/enums/Slot"

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


    }, [])


    return (
        <div className="equipment__container-stats">
            <h2>attack: {attack}</h2>
            <h2>defence: {defence}</h2>
            <h2>weight: {weight}</h2>
            <h2>speed: {speed}</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Stats)