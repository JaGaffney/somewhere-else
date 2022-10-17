import React from 'react'
import { connect } from 'react-redux'
import { validFilterQuery } from '../../utils/generic'

import BankItem from '../player/BankItem'

export const Equipment = (props: { playerData, itemData, search: string, activeEquipmentSlot, onItemSelectedHandler, setActiveItemID, handleItemEquipStatus }) => {
    return (
        <div className="equipment__container-equipment" data-cy="equipmentStorage">
            <div className="bank__items">
                <div className="bank__items-inner">
                    {props.playerData.playerBank.bankItems.map((i, k) => {
                        const id = i.id
                        const data = props.itemData.getItemById(id)
                        if (data.itemType !== "equipment") {
                            return null
                        }

                        if (data.slot === props.activeEquipmentSlot) {
                            if (validFilterQuery(data.name, props.search)) {
                                return (
                                    data &&
                                    <BankItem
                                        key={k}
                                        id={id}
                                        name={data.name}
                                        icon={data.icon}
                                        qty={props.playerData.playerBank.findItemInBank(id).qty}
                                        itemData={data}
                                        bankItemSelectedHandler={props.onItemSelectedHandler}
                                        setActiveItemID={props.setActiveItemID}
                                        sellMode={false}
                                        doubleClickHandler={props.handleItemEquipStatus}
                                    />

                                )
                            }
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