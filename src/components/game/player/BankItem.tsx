import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';



export const BankItem = (props) => {
    useEffect(() => {
    }, [props.playerUpdated])

    return (
        props.qty > 0 &&
        <>
            <button className="bank__items-singleItem"
                key={props.key}
                onClick={() => {
                    props.bankItemSelectedHandler(props.itemData)
                    props.setActiveItemID(props.id)
                }}
                data-tip={props.name && props.name}
            >
                <img className="bank__items-image" src={props.icon} />
                <span className="bank__items-qty">{props.qty && props.qty}</span>
            </button>
            <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />
        </>
    )
}



const mapStateToProps = (state) => ({
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BankItem)
