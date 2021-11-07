import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import EXP from "./generics/EXP"
import Talents from "./generics/Talents"
import Actions from "./generics/Actions"
import Progression from "./generics/Progression"

export const Noncombat = (props) => {
    const [activeData, setActiveData] = useState(null)

    useEffect(() => {
        if (props.skills.length !== 0) {
            setActiveData(props.skills.getNoncombatSkillByName(props.activePage))
        }

    }, [props.skills])

    return (
        props.skills.length !== 0 && (
            activeData !== null &&
            (
                <div>
                    <EXP />
                    <Talents />
                    <Progression />
                    <Actions gather={activeData.gatheringName} production={activeData.productionName} skillData={activeData} />
                </div>)
        )
    )
}



const mapStateToProps = (state) => ({
    skills: state.skills.skillData,
    activePage: state.skills.activePage
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Noncombat)
