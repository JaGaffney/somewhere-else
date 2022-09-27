// @ts-nocheck
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setActivePage } from '../actions/api';

import { intToString } from "../utils/generic"

import SHOP from "../../images/sidepanel/shop.svg"
import BANK from "../../images/sidepanel/bank.svg"
import COMBAT from "../../images/sidepanel/combat.svg"
import SETTLEMENT from "../../images/sidepanel/castle.svg"
import RESEARCH from "../../images/sidepanel/research.svg"
import ACTIONS from "../../images/sidepanel/spellbook.svg"
import EQUIPMENT from "../../images/sidepanel/equipment.svg"

export const NonSkillPanel = (props) => {
    useEffect(() => {
    }, [props.playerUpdated])

    return (
        <div className="sidepanel__skill" data-cy="sidepanelNonSkill">
            <span className="sidepanel__skill-title"></span>

            <button className="skillpanel" onClick={() => props.setActivePage("shop")}>
                <img className="skillpanel__icon" src={SHOP} />
                <span className={`skillpanel__name ${props.activePage === "shop" ? "skillpanel__name-active" : null}`}>Merchant</span>
                {props.playerData.length !== 0 && (
                    <span className="skillpanel__level">{intToString(props.playerData.playerBank.getCoins())} GP</span>
                )}
            </button>

            <button className="skillpanel" onClick={() => props.setActivePage("bank")}>
                <img className="skillpanel__icon" src={BANK} />
                <span className={`skillpanel__name ${props.activePage === "bank" ? "skillpanel__name-active" : null}`}>Storage</span>
                {props.playerData.length !== 0 && (
                    <span className="skillpanel__level">{props.playerData.playerBank.totalItemsInBank()}{props.seperator} / {props.playerData.playerBank.getBankSpace() + props.playerData.research.getRepeatValue("capacity")}</span>
                )}
            </button>

            <button className="skillpanel" onClick={() => props.setActivePage("settlement")}>
                <img className="skillpanel__icon" src={SETTLEMENT} />
                <span className={`skillpanel__name ${props.activePage === "settlement" ? "skillpanel__name-active" : null}`}>Settlement</span>
                {props.playerData.length !== 0 && (
                    <span className="skillpanel__level">{props.playerData.getActiveManpower()} / {props.playerData.getManpower()}</span>
                )}
            </button>

            <button className="skillpanel" onClick={() => props.setActivePage("research")}>
                <img className="skillpanel__icon" src={RESEARCH} />
                <span className={`skillpanel__name ${props.activePage === "research" ? "skillpanel__name-active" : null}`}>Upgrades</span>
            </button>

            <button className="skillpanel" onClick={() => props.setActivePage("combat")}>
                <img className="skillpanel__icon" src={COMBAT} />
                <span className={`skillpanel__name ${props.activePage === "combat" ? "skillpanel__name-active" : null}`}>Combat</span>
            </button>

            <button className="skillpanel" onClick={() => props.setActivePage("loadout")}>
                <img className="skillpanel__icon" src={ACTIONS} />
                <span className={`skillpanel__name ${props.activePage === "loadout" ? "skillpanel__name-active" : null}`}>Actions & spells</span>
            </button>

            <button className="skillpanel" onClick={() => props.setActivePage("equipment")}>
                <img className="skillpanel__icon" src={EQUIPMENT} />
                <span className={`skillpanel__name ${props.activePage === "inventory" ? "skillpanel__name-active" : null}`}>Equipment</span>
            </button>






        </div>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    activePage: state.skills.activePage,
    playerUpdated: state.engine.playerUpdated
})

const mapDispatchToProps = {
    setActivePage
}

export default connect(mapStateToProps, mapDispatchToProps)(NonSkillPanel)
