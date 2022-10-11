import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setActionTime, resetActionTime, setPlayerUpdated } from "../../../actions/api"

import * as icon from "../../../data/seed/icons/statSeedIcon"

export const ItemProduction = (props) => {
    const [manpower, setManpower] = useState<number>(props.playerData.settlement.tasks[props.id] || 0)


    const handleManpowerChange = (name: string, value: number): void => {
        props.playerData.settlement.updateTask(name, value)
        setManpower(manpower + value)
        props.setPlayerUpdated()
    }

    const enoughMaterials = () => {
        for (let i in props.data.itemsRequired) {
            const bankItem = props.playerData.playerBank.findItemInBank(props.data.itemsRequired[i].id)
            if (bankItem === null || bankItem?.qty < props.data.itemsRequired[i].qty * manpower) {
                return false
            }
        }
        return true
    }

    return (
        <div className={"action__item action__production"}>
            <div className="action__item-icon action__production-icon">
                <img src={props.data.icon} />
                <span className="action__item-name">{props.data.name} ({manpower})</span>
                <div className="action__item-buttons">
                    <button disabled={manpower === 0} onClick={() => handleManpowerChange(props.id, -1)}>[ - ]</button>
                    <button disabled={!props.enoughManpower || !enoughMaterials()} onClick={() => handleManpowerChange(props.id, 1)}>[ + ]</button>
                </div>
            </div>
            <div className="action__item-content action__production-content">
                <div className="action__item-level action__production-level"><span><img src={icon.level} />Level </span>{props.data.level}</div>
                <div className="action__item-level action__production-level"><span><img src={icon.manpower} />Manpower</span>{props.data.manpower}</div>
                <div className="action__item-details action__production-level"><span><img src={icon.xp} />XP</span>{props.data.exp}</div>

                <h4>Items required</h4>
                {props.data && props.data.itemsRequired.map((i, k) => {
                    const data = props.itemData.getItemById(i.id)
                    const bankItem = props.playerData.playerBank.findItemInBank(i.id)
                    let itemInBank = "text__valid"
                    if (bankItem === null || bankItem?.qty < i.qty * manpower) {
                        itemInBank = "text__error"
                    }
                    return (
                        <div className="action__item-production" key={k}>
                            <span><img src={data.icon} alt="data.name" />{data.name}</span>
                            <span className={itemInBank}>{manpower === 0 ? i.qty : i.qty * manpower}</span>
                        </div>
                    )
                })
                }


            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    activePage: state.engine.activePage,
    playerData: state.player.playerData,
    itemData: state.items.itemData,
})

const mapDispatchToProps = {
    setActionTime, resetActionTime, setPlayerUpdated
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemProduction)
