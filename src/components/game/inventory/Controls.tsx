import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'


export const Controls = (props) => {
    const [name, setName] = useState<string>("")

    useEffect(() => {
        const id = props.playerData.inventory.getEquippedItem(props.activeEquipmentSlot.replace(/\s/g, ''))
        const data = props.itemData.getItemById(id)
        if (id === 0) {
            setName("")
        } else {
            if (data) {
                setName(data.name)
            }

        }

    }, [props.activeEquipmentSlot])

    return (
        <div className="topPanel topPanel__controls">
            <div className="topPanel__controls-left">
                <span>{name}</span>
                <span className="topPanel__controls-left-info">{props.activeEquipmentSlot}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)