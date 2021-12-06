import React from "react"
import { connect } from "react-redux"

export const ShopItem = props => {
  console.log(props.itemData)
  return (
    <button
      className="shop__items-singleItem"
      key={props.key}
      onClick={() => {
        props.handler(props.itemData)
        props.qtyHandler(props.qty)
        props.idHandler(props.id)
      }}
    >
      <img className="shop__items-image" src={props.itemData.icon} />
      <span className="shop__items-name">{props.itemData.name}</span>
      <span className="shop__items-detail">
        <span className="shop__items-detail-price">
          ${props.itemData.price}
        </span>
        <span className="shop__items-detail-rarity">
          {props.itemData.rarity.toLowerCase()}
        </span>
      </span>
    </button>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ShopItem)
