import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import BankItem from "./BankItem"

export const PlayerBank = (props) => {
    const [activeBankItem, setActiveBankItem] = useState(null)
    const [playerBank, setPlayerBank] = useState(null)

    const bankItemHandler = (itemData) => {
        setActiveBankItem(itemData)
    }

    useEffect(() => {
        setPlayerBank(props.playerData.playerBank)
    }, [props.playerData.playerBank.bankItems])

    return (
        <div className="game__normal">
            <div className="bank__info">
                <span>Bank Space Used {props.playerData.playerBank.bankItems.size} / {props.playerData.playerBank.bankSpace}</span>
                <span>Bank Value 69 gp</span>
            </div>
            <div className="bank__container">
                {playerBank !== null && (
                    <div className="bank__items">
                        {[...playerBank.bankItems.keys()].map((id, k) => {
                            const data = props.itemData.getItemById(id)
                            return (
                                <BankItem
                                    key={k}
                                    id={id}
                                    name={data.name}
                                    icon={data.icon}
                                    qty={playerBank.bankItems.get(id).qty}
                                    itemData={data}
                                    handler={bankItemHandler} />
                            )
                        })}
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
    activePage: state.skills.activePage
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerBank)
