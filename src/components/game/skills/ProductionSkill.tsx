import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Actions from './generics/Actions'

import EXP from "./generics/EXP"

export const ProductionSkill = (props) => {
    const [activeData, setActiveData] = useState(null)


    useEffect(() => {
        if (props.skills.length !== 0) {
            setActiveData(props.skills.getSkillByName("nonCombat", props.activePage))
        }

    }, [props.skills])

    console.log(activeData)
    return (
        props.skills.length !== 0 ? (
            activeData !== null ?
                (
                    <div>
                        <EXP />
                        <Actions gather={activeData.gatheringName} skillData={activeData} />
                    </div>
                ) : null
        ) : null
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductionSkill)