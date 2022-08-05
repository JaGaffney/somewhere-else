import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'


export const Controls = (props: { playerData, itemData, activeEquipmentSlot: string, activeEquipmentItem: string, search: string, setSearch, handleItemEquipStatus, activeEquipmentItemID: number }) => {
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

            <div className="topPanel__controls-right">
                <form>
                    <input type="text" value={props.search} placeholder="filter..." onChange={(e) => props.setSearch(e.target.value)} />
                </form>
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