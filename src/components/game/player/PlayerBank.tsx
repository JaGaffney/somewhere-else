import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import BankItem from "./BankItem"

export const PlayerBank = (props) => {
    const [activeBankItem, setActiveBankItem] = useState(null)

    const bankItemHandler = (itemData) => {
        setActiveBankItem(itemData)
    }

    useEffect(() => {
    }, [props.playerData.playerBank.bankItems, props.playerUpdated])

    return (
        <div className="game__normal">
            <div className="bank__info">
                <span>Bank Space Used {props.playerData.playerBank.bankItems.size} / {props.playerData.playerBank.bankSpace}</span>
                <span>Bank Value 69 gp</span>
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
                                        handler={bankItemHandler} />
                                )
                            })}
                        </div>
                    </div>
                )}
                <div className="bank__details">
                    {activeBankItem && (
                        <div>
                            <span>img</span>
                            <div>
                                <span>name</span>
                                <span>description</span>
                                <span>qty</span>
                            </div>
                        </div>
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
    playerUpdated: state.player.playerUpdated
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerBank)
