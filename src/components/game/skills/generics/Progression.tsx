import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { FiClock } from "react-icons/fi";
import { BsTreeFill } from "react-icons/bs";

export const Progression = (props) => {
    const [activeData, setActiveData] = useState(null)

    useEffect(() => {
        for (const current in props.actionTime) {
            const actionData = props.actionTime[current]
            const id = actionData.data.id
            const skill = actionData.data.skill
            const activeData = props.skillData.getItemIdBySkillId(skill, id)
            setActiveData(activeData)
        }

    }, [props.actionTime])

    function normalize(val: number, max: number) {
        return (val - 0) / (max - 0) * 100;
    }


    return (
        <div className="progression">

            <div className="progression__container">
                <div className="progression__body">

                    {activeData && <img className="progression__body-icon" src={activeData.icon} />}

                    <div className="progression__body-details">
                        <span className="progression__body-name">{activeData && activeData.name}</span>
                        {activeData && <span className="progression__body-data">{activeData.exp} xp</span>}
                        {activeData && <span className="progression__body-data"><FiClock /> {activeData.time} seconds</span>}
                    </div>

                </div>

                <div className="exp__progressbar">
                    <div className="exp__progressbar-inner" style={{ transform: `scaleX(${activeData && normalize(props.deltaTime, activeData.time)}%)` }}></div>
                </div>
            </div>

        </div >
    )
}


const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    skillData: state.skills.skillData,
    itemData: state.items,
    activePage: state.engine.activePage,
    deltaTime: state.engine.deltaTime,
    actionTime: state.engine.actionTime,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Progression)
