import React from "react"
import { connect } from "react-redux"

export const ShopItem = props => {
  return (
    <button
      className="bank__items-singleItem"
      key={props.key}
      onClick={() => {
        props.handler(props.itemData)
        props.qtyHandler(props.qty)
        props.idHandler(props.id)
      }}
    >
      <img className="bank__items-image" src={props.itemData.icon} />
      <span className="bank__items-name">{props.itemData.name}</span>
      <span className="bank__items-qty">
        <span className="bank__items-qty-inner">{props.itemData.unique}</span>
      </span>
    </button>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ShopItem)
