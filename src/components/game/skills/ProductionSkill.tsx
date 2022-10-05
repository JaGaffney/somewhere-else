import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Actions from './generics/Actions'

import EXP from "./generics/EXP"

// @ts-ignore
import DIVINIATION from "../../../images/sidepanel/divination.svg"

export const ProductionSkill = (props) => {
    const [activeData, setActiveData] = useState(null)
    const [activeCategory, setActiveCategory] = useState<string>("resource")

    useEffect(() => {
        if (props.skills.length !== 0) {
            setActiveData(props.skills.getSkillByName("nonCombat", props.activePage))
        }
    }, [props.skills])

    return (
        props.skills.length !== 0 ? (
            activeData !== null ?
                (
                    <div>
                        <EXP />
                        <div className="attackloadout__buttons">
                            <button className={`attackloadout__buttons-button ${activeCategory === "resource" ? "attackloadout__buttons-active" : ""}`} onClick={() => setActiveCategory("resource")}> <img src={DIVINIATION} alt="divination" /><span>Resources</span></button>
                            <button className={`attackloadout__buttons-button ${activeCategory === "1" ? "attackloadout__buttons-active" : ""}`} onClick={() => setActiveCategory("1")}> <img src={DIVINIATION} alt="passives" /><span>Tier 1</span></button>
                            <button className={`attackloadout__buttons-button ${activeCategory === "2" ? "attackloadout__buttons-active" : ""}`} onClick={() => setActiveCategory("2")}> <img src={DIVINIATION} alt="divination" /><span>Tier 2</span></button>
                            <button className={`attackloadout__buttons-button ${activeCategory === "3" ? "attackloadout__buttons-active" : ""}`} onClick={() => setActiveCategory("3")}> <img src={DIVINIATION} alt="divination" /><span>Tier 3</span></button>
                            <button className={`attackloadout__buttons-button ${activeCategory === "4" ? "attackloadout__buttons-active" : ""}`} onClick={() => setActiveCategory("4")}> <img src={DIVINIATION} alt="divination" /><span>Tier 4</span></button>
                        </div>
                        <Actions gather={activeData.gatheringName} skillData={activeData} production={true} activeCategory={activeCategory} />
                    </div>
                ) : null
        ) : null
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductionSkill)