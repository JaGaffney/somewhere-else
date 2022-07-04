import React from 'react'
import { connect } from 'react-redux'

import BankItem from '../player/BankItem'

export const Equipment = (props) => {


    const onItemSelectedHandler = (item) => {
        console.log(item)
    }

    const setActiveItemID = (id) => {
        console.log({ id })
    }

    return (
        <div className="equipment__container-equipment">
            <h2>{props.activeEquipmentSlot}</h2>

            <div className="bank__items">
                <div className="bank__items-inner">
                    {[...props.playerData.playerBank.bankItems.keys()].map((id, k) => {
                        const data = props.itemData.getItemById(id)

                        if (data.itemType !== "equipment") {
                            return null
                        }

                        if (data.slot === props.activeEquipmentSlot) {
                            return (
                                data &&
                                <BankItem
                                    key={k}
                                    id={id}
                                    name={data.name}
                                    icon={data.icon}
                                    qty={props.playerData.playerBank.bankItems.get(id).qty}
                                    itemData={data}
                                    bankItemSelectedHandler={onItemSelectedHandler}
                                    setActiveItemID={setActiveItemID}
                                    sellMode={false} />

                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Equipment)