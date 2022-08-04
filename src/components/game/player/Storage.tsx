import React from 'react'
import { connect } from 'react-redux'
import { validFilterQuery } from '../../utils/generic'

import BankItem from "./BankItem"

export const Storage = (props) => {
    return (
        <div className="bank__items">
            <div className="bank__items-inner">
                {[...props.playerData.playerBank.bankItems.keys()].map((id, k) => {
                    const data = props.itemData.getItemById(id)
                    if (validFilterQuery(data.name, props.search)) {
                        return (
                            data &&
                            <BankItem
                                key={k}
                                id={id}
                                name={data.name}
                                icon={data.icon}
                                qty={props.playerData.playerBank.bankItems.get(id).qty}
                                itemData={data}
                                bankItemSelectedHandler={props.bankItemSelectedHandler}
                                setActiveItemID={props.setActiveItemID}
                                sellMode={props.sellMode} />

                        )
                    }
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Storage)