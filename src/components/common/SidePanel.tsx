// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { FiEye, FiEyeOff } from "react-icons/fi";

import SkillPanel from './SkillPanel'
import NonSkillPanel from "./NonSkillPanel"

// logs
import COLLECTION from "../../images/sidepanel/collectionLog.svg"
import COMBAT from "../../images/sidepanel/combatLog.svg"
import ACHI from "../../images/sidepanel/achievementLog.svg"
import QUEST from "../../images/sidepanel/questLog.svg"

// other
import SETTINGS from "../../images/sidepanel/settings.svg"
import HELP from "../../images/sidepanel/help.svg"
import BUG from "../../images/sidepanel/bug.svg"



export const SidePanel = (props) => {
    const [showStatus, setShowStatus] = useState<boolean>(true)
    const [showCombat, setShowCombat] = useState<boolean>(true)
    const [showSkills, setShowSkills] = useState<boolean>(true)
    const [showLogs, setShowLogs] = useState<boolean>(true)
    const [showOther, setShowOther] = useState<boolean>(true)

    const tempNonCombatSklls = [
        "forestry/forestry", "Prowling", "metalwork", "quartermaster", "way of the land", "cat burglar", "botanist"
    ]

    const tempLogs = [
        {
            name: "collection log",
            icon: COLLECTION
        },
        {
            name: "combat log",
            icon: COMBAT
        },
        {
            name: "achievement log",
            icon: ACHI
        },
        {
            name: "quest log",
            icon: QUEST
        },
    ]
    const tempOther = [
        {
            name: "settings",
            icon: SETTINGS
        },
        {
            name: "help",
            icon: HELP
        },
        {
            name: "bug report",
            icon: BUG
        },
    ]

    return (
        <aside className="sidepanel__wrapper">
            <div className="sidepanel__container">

                <NonSkillPanel />

                {props.skills.length !== 0 &&
                    (
                        <>

                            <div className="sidepanel__skill">
                                <span className="sidepanel__skill-title" onClick={() => setShowStatus(!showStatus)}>Status {showStatus ? <FiEyeOff /> : <FiEye />}</span>
                                {showStatus && props.skills.getAllStatusSkills().map((i, k) => <SkillPanel key={k} skillName={i} skillLevelTotal={99} seperator={" / "} icon={props.skills.getSkillIconByName("status", i)} type={"status"} />)}
                            </div>

                            <div className="sidepanel__skill">
                                <span className="sidepanel__skill-title" onClick={() => setShowCombat(!showCombat)}>Classes {showCombat ? <FiEyeOff /> : <FiEye />}</span>
                                {showCombat && props.skills.getAllCombatSkills().map((i, k: number) => <SkillPanel key={k} skillName={i} skillLevelTotal={99} seperator={" / "} icon={props.skills.getSkillIconByName("combat", i)} />)}
                            </div>

                            <div className="sidepanel__skill">
                                <span className="sidepanel__skill-title" onClick={() => setShowSkills(!showSkills)}>Jobs {showSkills ? <FiEyeOff /> : <FiEye />}</span>
                                {showSkills && props.skills.getAllNoncombatSkills().map((i, k: number) => <SkillPanel key={k} skillName={i} skillLevelTotal={99} seperator={" / "} icon={props.skills.getSkillIconByName("gathering", i)} />)}
                            </div>
                        </>
                    )}

                <div className="sidepanel__skill">
                    <span className="sidepanel__skill-title" onClick={() => setShowLogs(!showLogs)}>Logs {showLogs ? <FiEyeOff /> : <FiEye />}</span>
                    {showLogs && Object.keys(tempLogs).map((i, k) => <SkillPanel key={k} skillName={tempLogs[i].name} icon={tempLogs[i].icon} />)}
                </div>

                <div className="sidepanel__skill">
                    <span className="sidepanel__skill-title" onClick={() => setShowOther(!showOther)}>Other {showOther ? <FiEyeOff /> : <FiEye />}</span>
                    {showOther && Object.keys(tempOther).map((i, k) => <SkillPanel key={k} skillName={tempOther[i].name} icon={tempOther[i].icon} />)}
                </div>
            </div>
        </aside>
    )
}


const mapStateToProps = (state) => ({
    skills: state.skills.skillData,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)
