import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { FiClock } from "react-icons/fi";
import { BsTreeFill } from "react-icons/bs";

export const Progression = (props) => {

    function normalize(val: number) {
        console.log(props.actionTime)
        if (props.activeAction) {
            console.log((val - 0) / (props.activeAction.time - 0) * 100)
            return (val - 0) / (props.activeAction.time - 0);
        } else {
            return 0
        }

    }

    return (
        <div className="progression">
            <div className="progression__container">
                <BsTreeFill className="progression__icon" />
                <span className="progression__name">{props.activeAction && props.activeAction.name}</span>
            </div>

            <div className="exp__progressbar">
                <div className="exp__progressbar-inner" style={{ transform: `scaleX(${normalize(props.deltaTime)}%)` }}></div>
            </div>

            <div className="progression__details">
                <span>{props.deltaTime}</span>
                <span style={{ width: "100%" }}> xp</span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><FiClock />  seconds</span>
            </div>

        </div >
    )
}


const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    skillData: state.skills.skillData,
    itemData: state.items,
    activePage: state.player.activePage,
    deltaTime: state.player.deltaTime,
    actionTime: state.player.actionTime,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Progression)
