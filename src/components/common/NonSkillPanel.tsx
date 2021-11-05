import React from 'react'
import { connect } from 'react-redux'
import { setActiveSkill } from '../actions/api';

import { GiCoins } from "react-icons/gi";
import { FaPiggyBank } from "react-icons/fa";


export const NonSkillPanel = (props) => {
    return (
        <div className="sidepanel__skill">
            <span className="sidepanel__skill-title"></span>

            <div className="skillpanel" onClick={() => props.setActiveSkill("shop")}>
                <span className="skillpanel__icon"><GiCoins /></span>
                <span className="skillpanel__name">Shop</span>
                {props.playerData.length !== 0 && (
                    <span className="skillpanel__level">{props.playerData.playerBank.getCoins()} GP</span>
                )}
            </div>

            <div className="skillpanel" onClick={() => props.setActiveSkill("bank")}>
                <span className="skillpanel__icon"><FaPiggyBank /></span>
                <span className="skillpanel__name">Bank</span>
                {props.playerData.length !== 0 && (
                    <span className="skillpanel__level">{props.playerData.playerBank.totalItemsInBank()}{props.seperator} / {props.playerData.playerBank.getBankSpace()}</span>
                )}
            </div>

        </div>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData
})

const mapDispatchToProps = {
    setActiveSkill
}

export default connect(mapStateToProps, mapDispatchToProps)(NonSkillPanel)
