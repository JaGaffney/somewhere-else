import React from 'react'
import { connect } from 'react-redux'

// @ts-ignore
import COINS from "../../../../images/items/coins.svg"
import ESSENCE from "../../../../images/items/essence.svg"

export const Drop = (props) => {
    return (
        <div className="dropData">
            <img className="dropData-image" src={props.dropData.image} alt={props.dropData.name} />
            <h1 className="dropData-title">{props.dropData.name}</h1>
            <div className="dropData-wrapper">

                <div className="dropData-container">

                    <h4>Always drops</h4>
                    <div className="dropData-lootItem">
                        <img src={COINS} alt="coins" />
                        <span><strong>{props.dropData.drops.coins.min}</strong> - <strong>{props.dropData.drops.coins.max}</strong><i><b> gp </b></i> </span>
                    </div>
                    <div className="dropData-lootItem">
                        <img src={ESSENCE} alt="essence" />
                        <span><strong>{props.dropData.drops.essence} <b>x</b> </strong>essence</span>
                    </div>
                </div>

                <div className="dropData-container">
                    <h4>Sometimes drops</h4>
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
