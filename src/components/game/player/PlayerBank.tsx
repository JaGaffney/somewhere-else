import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

export const PlayerBank = (props) => {

    const [activeBankItem, setActiveBankItem] = useState(null)

    const bankItemHandler = (itemData) => {
        setActiveBankItem(itemData)
    }

    console.log(activeBankItem)
    return (
        <div className="game__normal">
            <div className="bank__info">
                <span>Bank Space Used {props.playerData.playerBank.bankItems.size} / {props.playerData.playerBank.bankSpace}</span>
                <span>Bank Value 69 gp</span>
            </div>
            <div className="bank__container">
                <div className="bank__items">
                    {[...props.playerData.playerBank.bankItems.keys()].map((id, k) => {
                        return (
                            <button className="bank__items-singleItem" key={k} onClick={() => bankItemHandler(props.itemData.getItemById(id))}>
                                <span className="bank__items-image">{id}</span>
                                <span className="bank__items-name">{props.itemData.getItemById(id).name}</span>
                                <span className="bank__items-qty"><span className="bank__items-qty-inner">{props.playerData.playerBank.bankItems.get(id).qty}</span></span>
                            </button>)
                    })}
                </div>
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
