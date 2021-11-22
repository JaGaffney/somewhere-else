// @ts-nocheck
import React from 'react'
import { connect } from 'react-redux'

import SkillPanel from './SkillPanel'
import NonSkillPanel from "./NonSkillPanel"

// classses
import WARRIOR from "../../images/classes/warrior.svg"
import ARCHER from "../../images/classes/archer.svg"
import MAGICIAN from "../../images/classes/magician.svg"

// status
import HEALTH from "../../images/sidepanel/health.svg"
import DEFENCE from "../../images/sidepanel/defence.svg"
import STAMINA from "../../images/sidepanel/stamina.svg"
import DIVI from "../../images/sidepanel/divination.svg"


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
    const tempNonCombatSklls = [
        "bushcraft", "Prowling", "metalwork", "quartermaster", "way of the land", "cat burglar", "botanist"
    ]

    const tempCombatClasses = [
        {
            name: "warrior",
            icon: WARRIOR
        },
        {
            name: "archer",
            icon: ARCHER
        },
        {
            name: "magician",
            icon: MAGICIAN
        },
    ]
    const tempStatusSkills = [
        {
            name: "health",
            icon: HEALTH
        },
        {
            name: "defence",
            icon: DEFENCE
        },
        {
            name: "stamina",
            icon: STAMINA
        },
        {
            name: "divination",
            icon: DIVI
        },
    ]
    const tempLogs = [
        {
            name: "collection",
            icon: COLLECTION
        },
        {
            name: "combat",
            icon: COMBAT
        },
        {
            name: "achievement",
            icon: ACHI
        },
        {
            name: "quest",
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
                    <div className="sidepanel__skill">
                        <span className="sidepanel__skill-title">Classes</span>
                        {props.skills.getAllCombatSkills().map((i, k: number) => <SkillPanel key={k} skillName={i} skillLevelTotal={99} seperator={" / "} icon={props.skills.getSkillIconByName("combat", i)} />)}
                    </div>
                }

                <div className="sidepanel__skill">
                    <span className="sidepanel__skill-title">Status</span>
                    {Object.keys(tempStatusSkills).map((i, k) => <SkillPanel key={k} skillName={tempStatusSkills[i].name} skillLevelTotal={99} seperator={" / "} icon={tempStatusSkills[i].icon} />)}
                </div>

                {props.skills.length !== 0 &&
                    <div className="sidepanel__skill">
                        <span className="sidepanel__skill-title">Non-Combat</span>
                        {props.skills.getAllNoncombatSkills().map((i, k: number) => <SkillPanel key={k} skillName={i} skillLevelTotal={99} seperator={" / "} icon={props.skills.getSkillIconByName("gathering", i)} />)}
                    </div>
                }

                <div className="sidepanel__skill">
                    <span className="sidepanel__skill-title">Logs</span>
                    {Object.keys(tempLogs).map((i, k) => <SkillPanel key={k} skillName={tempLogs[i].name} icon={tempLogs[i].icon} />)}
                </div>

                <div className="sidepanel__skill">
                    <span className="sidepanel__skill-title">Other</span>
                    {Object.keys(tempOther).map((i, k) => <SkillPanel key={k} skillName={tempOther[i].name} icon={tempOther[i].icon} />)}
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
