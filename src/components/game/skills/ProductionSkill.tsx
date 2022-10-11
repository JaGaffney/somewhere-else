import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Actions from './generics/Actions'

import EXP from "./generics/EXP"
import Controls from './generics/Controls'



export const ProductionSkill = (props) => {
    const [activeData, setActiveData] = useState(null)
    const [activeCategory, setActiveCategory] = useState<string>("resource")
    const [search, setSearch] = useState<string>("")

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

                        <Controls search={search} setSearch={setSearch} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                        <Actions gather={activeData.gatheringName} skillData={activeData} production={true} activeCategory={activeCategory} search={search} />
                    </div>
                ) : null
        ) : null
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductionSkill)