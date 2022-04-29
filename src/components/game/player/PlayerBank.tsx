import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import BankItem from "./BankItem"

export const PlayerBank = (props) => {
    const [activeBankItem, setActiveBankItem] = useState(null)
    const [xValue, setXValue] = useState<number>(0)
    const [activeQty, setActiveQty] = useState<number>(0)
    const [activeID, setActiveID] = useState<number>(0)

    useEffect(() => {
    }, [props.playerData.playerBank.bankItems, props.playerUpdated])

    const bankItemHandler = (itemData) => {
        setActiveBankItem(itemData)
    }

    const getRarityColor = (rarity: string): string => {
        let color = ""
        switch (rarity) {
            case ("COMMON"):
                color = "var(--gray100)"
                break;
            case ("RARE"):
                color = "var(--blue400)"
                break;
            default:
                color = "var(--gray100)"
        }
        return color
    }

    const onSellHandler = (amount: number) => {
        if (amount <= activeQty) {
            props.playerData.playerBank.sellItemFromBank(activeID, amount, activeBankItem.price)
        }
    }

    console.log(props.playerData.playerBank)
    return (
        <div className="game__normal">
            <div className="bank__info">
                <span>Bank Space Used {props.playerData.playerBank.bankItems.size} / {props.playerData.playerBank.bankSpace}</span>
                <span>Bank Value {props.playerData.playerBank.getBankValue()} gp</span>
            </div>
            <div className="bank__container">
                {props.playerData.playerBank !== null && (
                    <div className="bank__items">
                        <div className="bank__items-inner">
                            {[...props.playerData.playerBank.bankItems.keys()].map((id, k) => {
                                const data = props.itemData.getItemById(id)
                                return (
                                    <BankItem
                                        key={k}
                                        id={id}
                                        name={data.name}
                                        icon={data.icon}
                                        qty={props.playerData.playerBank.bankItems.get(id).qty}
                                        itemData={data}
                                        handler={bankItemHandler}
                                        qtyHandler={setActiveQty}
                                        idHandler={setActiveID} />

                                )
                            })}
                        </div>
                    </div>
                )}
                <div className="bank__details">
                    {activeBankItem && (
                        <>
                            <div className="bank__details-content">
                                <div className="bank__details-icon">
                                    <img src={activeBankItem.icon} />
                                    <span className="bank__details-icon-qty"><span>qty</span></span>
                                </div>

                                <div className="bank__details-body" style={{ color: getRarityColor(activeBankItem.rarity) }}>
                                    <h4>{activeBankItem.name}</h4>
                                    <p>{activeBankItem.description === "" ? "Description coming soon" : activeBankItem.description}</p>
                                </div>


                            </div>
                            <div className="bank__details-sale">
                                <span className="bank__details-qty">Sells for {activeBankItem.price} gold</span>

                                <form>
                                    <label>X = </label>
                                    <input type="number" value={xValue} onChange={(e) => setXValue(parseInt(e.target.value))} placeholder="X" />
                                </form>

                                <div className="bank__details-buttons">
                                    <button className="bank__details-button" onClick={() => onSellHandler(1)}>Sell 1</button>
                                    <button className="bank__details-button" onClick={() => onSellHandler(activeQty - 1)}>All but 1</button>
                                    <button className="bank__details-button" onClick={() => onSellHandler(xValue)}>X</button>
                                    <button className="bank__details-button" onClick={() => onSellHandler(activeQty)}>All</button>
                                </div>

                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
    activePage: state.skills.activePage,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerBank)
