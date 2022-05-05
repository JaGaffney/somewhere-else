import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import ShopItem from "./ShopItem"

export const Shop = props => {
  return (
    <div className="game__normal">
      <div className="shop__container">
        {" "}
        <div className="shop__items">
          <div className="shop__items-inner">
            {[...props.itemData.shop.shopItems.keys()].map((id, k) => {
              const itemId = props.itemData.shop.shopItems.get(id).item.id
              const data = props.itemData.getItemById(itemId)
              return <ShopItem key={k} id={id} itemData={data} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  playerData: state.player.playerData,
  itemData: state.items.itemData,
  activePage: state.skills.activePage,
  playerUpdated: state.engine.playerUpdated,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
