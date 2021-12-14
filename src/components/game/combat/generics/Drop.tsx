import React from 'react'
import { connect } from 'react-redux'

// @ts-ignore
import COINS from "../../../../images/items/coins.svg"

export const Drop = (props) => {
    return (
        <div className="dropData">
            <img className="dropData-image" src={props.dropData.image} alt={props.dropData.name} />
            <h1 className="dropData-title">{props.dropData.name}</h1>
            <div className="dropData-coins">
                <img src={COINS} alt="coins" />
                <span><strong>{props.dropData.drops.coins.min}</strong><i> gp </i> to <strong>{props.dropData.drops.coins.max}</strong><i> gp </i></span>
            </div>
            <div className="dropData-loot">
                {props.dropData.drops.drops.map((i, k: number) => {
                    const item = props.itemData.getItemById(i.id)
                    return (
                        <div className="dropData-lootItem" key={k}>
                            <img src={item.icon} alt={item.name} />
                            <span><strong>{i.qty}</strong> <b>x</b> {item.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemData: state.items.itemData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Drop)
