import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import Controls from "./Controls"
import Stats from "./Stats"
import Jobs from "./Jobs"

export const Settlement = props => {
    return (
        <div className="game__normal">
            <Controls />
            <div className="settlement__actions">
                <Jobs />
                <Stats />

            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    playerData: state.player.playerData,
    itemData: state.items.itemData,
    activePage: state.skills.activePage,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Settlement)
