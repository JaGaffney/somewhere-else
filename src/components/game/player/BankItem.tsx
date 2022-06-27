import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';

import { setPlayerUpdated } from '../../actions/api'

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

    const onClickHandler = () => {
        if (props.sellMode) {
            onSellModeHandler()
        } else {
            props.bankItemSelectedHandler(props.itemData)
            props.setActiveItemID(props.id)
        }
    }

    return (
        props.qty > 0 &&
        <>
            <button className={`bank__items-singleItem ${props.sellMode ? "bank__items-sellMode" : null}`}
                key={props.key}
                onClick={onClickHandler}
                data-tip={props.name && props.name}
            >
                <img className="bank__items-image" src={props.icon} />
                <span className="bank__items-qty">{props.qty && intToString(props.qty)}</span>
            </button>
            <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />
        </>
    )
}

const mapStateToProps = (state) => ({
    playerUpdated: state.engine.playerUpdated,
    playerData: state.player.playerData,
})

const mapDispatchToProps = {
    setPlayerUpdated
}

export default connect(mapStateToProps, mapDispatchToProps)(BankItem)
