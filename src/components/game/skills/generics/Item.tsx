import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setActionTime, resetActionTime, setPlayerUpdated } from "../../../actions/api"

import { FiClock } from "react-icons/fi";

export const Item = (props) => {
    const [manpower, setManpower] = useState<number>(props.playerData.settlement.tasks[props.id] || 0)

    const handleManpowerChange = (name: string, value: number): void => {
        props.playerData.settlement.updateTask(name, value)
        setManpower(manpower + value)
        props.setPlayerUpdated()
    }

    return (
        <div className={`action__item ${props.production && "action__production"}`}>
            <div className="action__item-icon"><img src={props.data.icon} /></div>
            <div className="action__item-content">
                <span className="action__item-name">{props.data.name} ({manpower})</span>
                <div className="action__item-buttons">
                    <button disabled={manpower === 0} onClick={() => handleManpowerChange(props.id, -1)}>[ - ]</button>
                    <button disabled={!props.enoughManpower} onClick={() => handleManpowerChange(props.id, 1)}>[ + ]</button>
                </div>
                <span className="action__item-level">Manpower {props.data.manpower}</span>
                <span className="action__item-level">Level {props.data.level}</span>
                <span className="action__item-details">{props.data.exp} xp</span>
                <span className="action__item-details"><FiClock /> {props.data.time} seconds</span>

                {props.production && (
                    <>
                        <h4>Items required</h4>
                        {props.data && props.data.itemsRequired.map((i, k) => {
                            const data = props.itemData.getItemById(i.id)
                            const bankItem = props.playerData.playerBank.findItemInBank(i.id)
                            let itemInBank = "text__valid"
                            if (bankItem === undefined || bankItem?.qty < i.qty * manpower) {
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
                    </>
                )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Item)
