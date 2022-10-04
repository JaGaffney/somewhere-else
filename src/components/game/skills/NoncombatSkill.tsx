import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import EXP from "./generics/EXP"
import Actions from "./generics/Actions"

export const NonCombatSkill = (props) => {
    const [activeData, setActiveData] = useState(null)

    useEffect(() => {
        if (props.skills.length !== 0) {
            setActiveData(props.skills.getSkillByName("gathering", props.activePage))
        }

    }, [props.skills])

    return (
        props.skills.length !== 0 ? (
            activeData !== null ?
                (
                    <div>
                        <EXP />
                        {/*
 // @ts-ignore */}
                        <Actions gather={activeData.gatheringName} skillData={activeData} production={false} />
                    </div>
                ) : null
        ) : null
    )
}



const mapStateToProps = (state) => ({
    skills: state.skills.skillData,
    activePage: state.engine.activePage
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NonCombatSkill)
