import React, { useEffect, useState } from "react"
import { connect } from "react-redux"


export const Settlement = props => {
    return (
        <div className="game__normal">

        </div>
    )
}

const mapStateToProps = state => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
    activePage: state.skills.activePage,
    playerUpdated: state.player.playerUpdated,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Settlement)
