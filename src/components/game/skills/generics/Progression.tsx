import React from 'react'
import { connect } from 'react-redux'

import { FiClock } from "react-icons/fi";
import { BsTreeFill } from "react-icons/bs";

export const Progression = (props) => {

    const testLoad = () => {
        console.log(props.activeAction.id)
        const activeData = props.skillData.getItemIdBySkillId(props.activePage, props.activeAction.id)
        console.log(activeData)
        if (activeData.itemsReceived.length > 0) {
            for (const item in activeData.itemsReceived) {
                props.playerData.playerBank.addItemtoBank(activeData.itemsReceived[item].id, activeData.itemsReceived[item].qty)
            }
        }
    }

    return (
        <div className="progression">
            <div className="progression__container">
                <BsTreeFill className="progression__icon" />
                <span className="progression__name">{props.activeAction && props.activeAction.name}</span>
            </div>
            <button onClick={testLoad}>click</button>
            <div className="progression__details">
                <span style={{ width: "100%" }}>{props.activeAction && props.activeAction.exp}xp</span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><FiClock /> {props.activeAction && props.activeAction.time} seconds</span>
            </div>

        </div >
    )
}


const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    skillData: state.skills.skillData,
    itemData: state.items,
    activePage: state.skills.activePage,
    activeAction: state.skills.activeAction,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Progression)
