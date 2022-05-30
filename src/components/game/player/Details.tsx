import React, { useState } from 'react'
import { connect } from 'react-redux'

import { getRarityColor } from '../../utils/color'

export const Details = (props) => {
    const [xValue, setXValue] = useState<number>(0)

    const onSellHandler = (amount: number) => {
        if (amount <= props.playerData.playerBank.findItemInBank(props.activeItemID).qty) {
            props.playerData.playerBank.sellItemFromBank(props.activeItemID, amount, props.activeBankItem.price)
        }
    }

    return (
        <div className="bank__details">
            {props.activeBankItem && (
                <>
                    <div className="bank__details-content">
                        <div className="bank__details-icon">
                            <img src={props.activeBankItem.icon} />
                            <span className="bank__details-icon-qty"><span>{props.playerData.playerBank.findItemInBank(props.activeItemID).qty}</span></span>
                        </div>

                        <div className="bank__details-body" style={{ color: getRarityColor(props.activeBankItem.rarity) }}>
                            <h4>{props.activeBankItem.name}</h4>
                            <p>{props.activeBankItem.description === "" ? "Description coming soon" : props.activeBankItem.description}</p>
                        </div>


                    </div>
                    <div className="bank__details-sale">
                        <span className="bank__details-qty">Sells for {props.activeBankItem.price} gold</span>

                        <form>
                            <label>X = </label>
                            <input type="number" value={xValue} onChange={(e) => setXValue(parseInt(e.target.value))} placeholder="X" />
                        </form>

                        <div className="bank__details-buttons">
                            <button className="bank__details-button" onClick={() => onSellHandler(1)}>Sell 1</button>
                            <button className="bank__details-button" onClick={() => onSellHandler(props.playerData.playerBank.findItemInBank(props.activeItemID).qty - 1)}>All but 1</button>
                            <button className="bank__details-button" onClick={() => onSellHandler(xValue)}>X</button>
                            <button className="bank__details-button" onClick={() => onSellHandler(props.playerData.playerBank.findItemInBank(props.activeItemID).qty)}>All</button>
                        </div>

                    </div>
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Details)