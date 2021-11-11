import React from 'react'
import { connect } from 'react-redux'

export const BankItem = (props) => {
    return (
        <button className="bank__items-singleItem" key={props.key} onClick={() => props.handler(props.itemData)}>
            <span className="bank__items-image">{props.id}</span>
            <span className="bank__items-name">{props.name}</span>
            <span className="bank__items-qty"><span className="bank__items-qty-inner">{props.qty}</span></span>
        </button>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BankItem)
