import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setActivePage } from '../actions/api';

// general
// @ts-ignore
import SHOP from "../../images/sidepanel/shop.svg"
// @ts-ignore
import BANK from "../../images/sidepanel/bank.svg"
// @ts-ignore
import COMBAT from "../../images/sidepanel/combat.svg"

export const NonSkillPanel = (props) => {

    useEffect(() => {
    }, [props.playerUpdated])

    return (
        <div className="sidepanel__skill">
            <span className="sidepanel__skill-title"></span>

            <button className="skillpanel" onClick={() => props.setActivePage("shop")}>
                <img className="skillpanel__icon" src={SHOP} />
                <span className={`skillpanel__name ${props.activePage === "shop" ? "skillpanel__name-active" : null}`}>Shop</span>
                {props.playerData.length !== 0 && (
                    <span className="skillpanel__level">{props.playerData.playerBank.getCoins()} GP</span>
                )}
            </button>

            <button className="skillpanel" onClick={() => props.setActivePage("bank")}>
                <img className="skillpanel__icon" src={BANK} />
                <span className={`skillpanel__name ${props.activePage === "bank" ? "skillpanel__name-active" : null}`}>Bank</span>
                {props.playerData.length !== 0 && (
                    <span className="skillpanel__level">{props.playerData.playerBank.totalItemsInBank()}{props.seperator} / {props.playerData.playerBank.getBankSpace()}</span>
                )}
            </button>

            <button className="skillpanel" onClick={() => props.setActivePage("combat")}>
                <img className="skillpanel__icon" src={COMBAT} />
                <span className={`skillpanel__name ${props.activePage === "combat" ? "skillpanel__name-active" : null}`}>Combat</span>
            </button>

        </div>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    activePage: state.skills.activePage,
    playerUpdated: state.player.playerUpdated
})

const mapDispatchToProps = {
    setActivePage
}

export default connect(mapStateToProps, mapDispatchToProps)(NonSkillPanel)
