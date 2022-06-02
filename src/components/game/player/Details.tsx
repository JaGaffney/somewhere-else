import React, { useState } from 'react'
import { connect } from 'react-redux'

import { getRarityColor } from '../../utils/color'

// @ts-expect-error
import GOLDICON from "../../../images/sidepanel/coins.svg"

export const Details = (props) => {
    const [xValue, setXValue] = useState<number>(0)

    const onSellHandler = (amount: number) => {
        const qty = props.playerData.playerBank.findItemInBank(props.activeItemID).qty
        if (amount <= qty) {
            props.playerData.playerBank.sellItemFromBank(props.activeItemID, amount, props.activeBankItem.price)

            if (amount === qty) {
                props.bankItemSelectedHandler(null)
            }
        }
    }

    return (
        <div className="bank__details">
            {props.activeBankItem && (
                <>
                    <div className="bank__details-content">
                        <div className="bank__details-icon">
                            <img src={props.activeBankItem.icon} />
                            <span className="bank__details-icon-qty">{props.playerData.playerBank.findItemInBank(props.activeItemID).qty}</span>
                        </div>

                        <div className="bank__details-body" style={{ color: getRarityColor(props.activeBankItem.rarity) }}>
                            <h4>{props.activeBankItem.name}</h4>
                            <p>{props.activeBankItem.description === "" ? "Description coming soon" : props.activeBankItem.description}</p>
                        </div>
                    </div>

                    <div className="bank__details-sale">
                        <div className="bank__details-sale-price">
                            <img src={GOLDICON} />
                            <span>{props.activeBankItem.price} GP</span>
                        </div>

                        <form>
                            <label>X = </label>
                            <input type="number" value={xValue} onChange={(e) => setXValue(parseInt(e.target.value))} placeholder="X" />
                        </form>

                        <div className="bank__details-sale-buttons">
                            <button className="generic__button" onClick={() => onSellHandler(1)}>Sell 1</button>
                            <button className="generic__button" onClick={() => onSellHandler(props.playerData.playerBank.findItemInBank(props.activeItemID).qty - 1)}>All but 1</button>
                            <button className="generic__button" onClick={() => onSellHandler(xValue)}>X</button>
                            <button className="generic__button generic__button-fit " onClick={() => onSellHandler(props.playerData.playerBank.findItemInBank(props.activeItemID).qty)}>All</button>
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