import React from 'react'
import { connect } from 'react-redux'
import { setActivePage } from '../actions/api';

import { GiCoins } from "react-icons/gi";
import { FaPiggyBank } from "react-icons/fa";


export const NonSkillPanel = (props) => {
    return (
        <div className="sidepanel__skill">
            <span className="sidepanel__skill-title"></span>

            <button className="skillpanel" onClick={() => props.setActivePage("shop")}>
                <span className="skillpanel__icon"><GiCoins /></span>
                <span className={`skillpanel__name ${props.activePage === "shop" ? "skillpanel__name-active" : null}`}>Shop</span>
                {props.playerData.length !== 0 && (
                    <span className="skillpanel__level">{props.playerData.playerBank.getCoins()} GP</span>
                )}
            </button>

            <button className="skillpanel" onClick={() => props.setActivePage("bank")}>
                <span className="skillpanel__icon"><FaPiggyBank /></span>
                <span className={`skillpanel__name ${props.activePage === "bank" ? "skillpanel__name-active" : null}`}>Bank</span>
                {props.playerData.length !== 0 && (
                    <span className="skillpanel__level">{props.playerData.playerBank.totalItemsInBank()}{props.seperator} / {props.playerData.playerBank.getBankSpace()}</span>
                )}
            </button>

        </div>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    activePage: state.skills.activePage
})

const mapDispatchToProps = {
    setActivePage
}

export default connect(mapStateToProps, mapDispatchToProps)(NonSkillPanel)
