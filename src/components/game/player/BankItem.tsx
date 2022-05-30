import React from 'react'
import { connect } from 'react-redux'

export const BankItem = (props) => {
    return (
        <button className="bank__items-singleItem" key={props.key} onClick={() => {
            props.bankItemSelectedHandler(props.itemData)
            props.setActiveItemID(props.id)
        }}>
            <img className="bank__items-image" src={props.icon} />
            <span className="bank__items-name">{props.name && props.name}</span>
            <span className="bank__items-qty"><span className="bank__items-qty-inner">{props.qty && props.qty}</span></span>
        </button>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BankItem)
