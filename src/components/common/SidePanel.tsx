// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { FiEye, FiEyeOff } from "react-icons/fi";

import { setActivePage } from '../actions/api';

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

import LOCKED from "../../images/sidepanel/locked.svg"

export const SidePanel = (props) => {
    const [showCombat, setShowCombat] = useState<boolean>(true)
    const [showSkills, setShowSkills] = useState<boolean>(true)
    const [showLogs, setShowLogs] = useState<boolean>(false)
    const [showOther, setShowOther] = useState<boolean>(false)

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

    useEffect(() => {
    }, [props.playerUpdated])

    const getValidCombatSkills = () => {
        const tempCombatSkills = props.skills.getAllCombatSkills()
        const tempResearchSkills = Object.keys(props.playerData.research.singular)
        let unlockedSkills = []

        if (tempResearchSkills.length <= 0) {
            return unlockedSkills
        }

        for (let skill in tempCombatSkills) {
            if (tempResearchSkills.includes(tempCombatSkills[skill])) {
                unlockedSkills.push(tempCombatSkills[skill])
            }
        }
        return unlockedSkills
    }


    return (
        <>
            {props.hamburgerMenu && (
                <aside className="sidepanel__wrapper">
                    <div className="sidepanel__container" data-cy="sidepanel">

                        <NonSkillPanel />

                        {props.skills.length !== 0 &&
                            (
                                <>
                                    <div className="sidepanel__skill" data-cy="sidepanelClasses">
                                        <span className="sidepanel__skill-title" onClick={() => setShowCombat(!showCombat)}>Classes {showCombat ? <FiEyeOff /> : <FiEye />}</span>
                                        {showCombat && getValidCombatSkills().length !== 0 ? (
                                            getValidCombatSkills().map((i, k: number) => <SkillPanel key={k} skillName={i} skillLevelTotal={99} seperator={" / "} icon={props.skills.getSkillIconByName("combat", i)} />))
                                            : (
                                                <button className="skillpanel" onClick={() => props.setActivePage("research")}>
                                                    <img className="skillpanel__icon" src={LOCKED} />
                                                    <span className="skillpanel__name">Locked</span>
                                                </button>
                                            )}
                                    </div>

                                    <div className="sidepanel__skill" data-cy="sidepanelJobs">
                                        <span className="sidepanel__skill-title" onClick={() => setShowSkills(!showSkills)}>Jobs {showSkills ? <FiEyeOff /> : <FiEye />}</span>
                                        {showSkills && props.skills.getAllNoncombatSkills().map((i, k: number) => <SkillPanel key={k} skillName={i} skillLevelTotal={99} seperator={" / "} icon={props.skills.getSkillIconByName("nonCombat", i)} />)}
                                    </div>
                                </>
                            )}

                        <div className="sidepanel__skill" data-cy="sidepanelLogs">
                            <span className="sidepanel__skill-title" onClick={() => setShowLogs(!showLogs)}>Logs {showLogs ? <FiEyeOff /> : <FiEye />}</span>
                            {showLogs && Object.keys(tempLogs).map((i, k) => <SkillPanel key={k} skillName={tempLogs[i].name} icon={tempLogs[i].icon} />)}
                        </div>

                        <div className="sidepanel__skill" data-cy="sidepanelOther">
                            <span className="sidepanel__skill-title" onClick={() => setShowOther(!showOther)}>Other {showOther ? <FiEyeOff /> : <FiEye />}</span>
                            {showOther && Object.keys(tempOther).map((i, k) => <SkillPanel key={k} skillName={tempOther[i].name} icon={tempOther[i].icon} />)}
                        </div>
                    </div>
                </aside>
            )}
        </>
    )
}


const mapStateToProps = (state) => ({
    skills: state.skills.skillData,
    playerData: state.player.playerData,
    playerUpdated: state.engine.playerUpdated,
    hamburgerMenu: state.engine.hamburgerMenu,
})

const mapDispatchToProps = {
    setActivePage
}

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)
