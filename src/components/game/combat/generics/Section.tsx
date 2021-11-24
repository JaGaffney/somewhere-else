import React from 'react'
import { connect } from 'react-redux'

import StatusBar from './statusBar'
import Armour from "./Armour"

import Hotbar from './Hotbar'

import Stats from './Stats'
import Info from './Info'

export const Section = (props) => {
    console.log(props.playerData)

    return (
        <div className="catcombat__section">
            <div className="catcombat__status">
                <StatusBar type="health" maxValue={100} currentValue={90} />
                <Armour value={4} />
                <StatusBar type="stamina" maxValue={100} currentValue={90} />
            </div>


            <div className="catcombat__hotbar">
                <Hotbar />
            </div>

            <div className="catcombat__description">
                <Stats />
                <Info />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    enemies: state.enemies,
    playerData: state.player.playerData
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Section)
