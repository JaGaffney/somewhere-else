import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';

import { setPlayerUpdated, setActiveEquipmentDrag } from '../../actions/api'

import { intToString } from '../../utils/generic';

export const BankItem = (props) => {
    useEffect(() => {
    }, [props.playerUpdated])

    const onSellModeHandler = () => {
        const qty = props.playerData.playerBank.findItemInBank(props.id).qty
        props.playerData.playerBank.sellItemFromBank(props.id, qty, props.itemData.price)
        props.bankItemSelectedHandler(null)
        props.setPlayerUpdated()
    }

    const onClickHandler = (e) => {
        if (props.doubleClickHandler) {
            if (e.detail === 1) {
                props.bankItemSelectedHandler(props.itemData)
                props.setActiveItemID(props.id)
            }
            if (e.detail === 2) {
                props.setActiveEquipmentDrag(e.target.id)
                props.doubleClickHandler(parseInt(e.target.id))
            }

        } else {
            if (props.sellMode) {
                onSellModeHandler()
            } else {
                props.bankItemSelectedHandler(props.itemData, props.id)
                props.setActiveItemID(props.id)
            }
        }
    }

    const onDragStart = (e) => {
        e.dataTransfer.setData("text/plain", e.target.id)
        props.setActiveEquipmentDrag(e.target.id)
    }

    const onMouseEnterHandler = (id) => {
        props.setActiveItemID(id)
    }
    const onMouseLeaveHandler = () => {
        props.setActiveItemID(0)
    }


    return (
        props.qty > 0 ? (
            <>
                <button className={`bank__items-singleItem ${props.sellMode ? "bank__items-sellMode" : null}`}
                    key={props.key}
                    onClick={(e) => onClickHandler(e)}
                    data-tip={props.name && props.name}
                    onMouseEnter={(e) => onMouseEnterHandler(props.id)}
                    onMouseLeave={onMouseLeaveHandler}

                >
                    <img className="bank__items-image" src={props.icon} onDragStart={onDragStart}
                        id={props.id && props.id} />
                    <span className="bank__items-qty">{props.qty && intToString(props.qty)}</span>
                </button>
                <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />
            </>
        ) : null)
}

const mapStateToProps = (state) => ({
    playerUpdated: state.engine.playerUpdated,
    playerData: state.player.playerData,
})

const mapDispatchToProps = {
    setPlayerUpdated, setActiveEquipmentDrag
}

export default connect(mapStateToProps, mapDispatchToProps)(BankItem)
