import React from 'react'
import { connect } from 'react-redux'

import { getTextColor, getBackgroundColor } from '../utils/color'

export const Header = (props) => {


    // TEMP Debug mode
    const healTesting = () => {
        props.playerData.status.health.setCurrent(props.playerData.status.health.getBase())
        props.playerData.status.stamina.setCurrent(props.playerData.status.stamina.getBase() + 100)
        props.playerData.status.armour.setCurrent(props.playerData.status.armour.getBase())
    }
    const killPlayer = () => {
        props.playerData.status.health.setCurrent(1)
        props.playerData.status.stamina.setCurrent(props.playerData.status.stamina.getBase())
        props.playerData.status.armour.setCurrent(0)
    }

    const killTesting = () => {
        props.combatData.status.health.setCurrent(1)
        props.combatData.status.armour.setCurrent(0)
    }


    return (
        <div className="header__container">
            <div className="header__container-title"><span>Somewhere else</span></div>
            <div className="header__container-info" style={{ background: getBackgroundColor(props.activePage), color: getTextColor(props.activePage) }}>


                <span>{props.activePage}</span>
                <div>
                    <span>Debug Mode</span>
                    <button onClick={healTesting}>Heal player</button>
                    <button onClick={killPlayer}>Kill player</button>
                    <button onClick={killTesting}>Kill</button>
                </div>
                <span>Charcter info</span>
            </div>

        </div>
    )
}


const mapStateToProps = (state) => ({
    activePage: state.engine.activePage,
    combatData: state.engine.combatData,
    playerData: state.player.playerData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
