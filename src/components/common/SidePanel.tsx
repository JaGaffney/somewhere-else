import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import SkillPanel from './SkillPanel'

export const SidePanel = (props) => {
    const tempCombatClasses = [
        "warrior", "archer", "magician"
    ]
    const tempCombatSklls = [
        "health", "defence", "stamina", "divination"
    ]
    const tempNonCombatSklls = [
        "bushcraft", "Prowling", "metalwork", "quartermaster", "way of the land", "cat burglar", "combat craft"
    ]

    const logs = [
        "collection", "combat", "diary", "quest"
    ]

    const other = [
        "settings", "wiki", "contact", "discord", "bug report"
    ]

    return (
        <aside className="sidepanel__wrapper">
            <div className="sidepanel__container">

                <div className="sidepanel__skill">
                    <span className="sidepanel__skill-title"></span>
                    <SkillPanel skillName={"cash"} skillLevel={69420} skillLevelTotal={"gp"} seperator={" "} icon={false} />
                    <SkillPanel skillName={"cache"} skillLevel={100} skillLevelTotal={120} seperator={" / "} />
                </div>

                <div className="sidepanel__skill">
                    <span className="sidepanel__skill-title">Classes</span>
                    {tempCombatClasses.map((i, k) => <SkillPanel key={k} skillName={i} skillLevel={69} skillLevelTotal={99} seperator={" / "} />)}
                </div>

                <div className="sidepanel__skill">
                    <span className="sidepanel__skill-title">Combat</span>
                    {tempCombatSklls.map((i, k) => <SkillPanel key={k} skillName={i} skillLevel={69} skillLevelTotal={99} seperator={" / "} />)}
                </div>

                {props.skills.length !== 0 &&
                    <div className="sidepanel__skill">
                        <span className="sidepanel__skill-title">Non-Combat</span>
                        {props.skills.getAllNoncombatSkills().map((i, k) => <SkillPanel key={k} skillName={i} skillLevel={69} skillLevelTotal={99} seperator={" / "} />)}
                    </div>
                }

                <div className="sidepanel__skill">
                    <span className="sidepanel__skill-title">Logs</span>
                    {logs.map((i, k) => <SkillPanel key={k} skillName={i} />)}
                </div>

                <div className="sidepanel__skill">
                    <span className="sidepanel__skill-title">Other</span>
                    {other.map((i, k) => <SkillPanel key={k} skillName={i} />)}
                </div>
            </div>
        </aside>
    )
}


const mapStateToProps = (state) => ({
    skills: state.skills.skillData
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)
