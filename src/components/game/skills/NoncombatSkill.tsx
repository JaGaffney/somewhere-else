import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import EXP from "./generics/EXP"
import Upgrades from "./generics/Upgrades"
import Actions from "./generics/Actions"
import Progression from "./generics/Progression"

export const Noncombat = (props) => {
    const [activeData, setActiveData] = useState(null)

    useEffect(() => {
        if (props.skills.length !== 0) {
            setActiveData(props.skills.getSkillByName("gathering", props.activePage))
        }

    }, [props.skills])

    return (
        props.skills.length !== 0 && (
            activeData !== null &&
            (
                <div>
                    <EXP />
                    {/* <Upgrades /> */}
                    {/* <Progression /> */}
                    <Actions gather={activeData.gatheringName} skillData={activeData} />
                </div>)
        )
    )
}



const mapStateToProps = (state) => ({
    skills: state.skills.skillData,
    activePage: state.engine.activePage
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Noncombat)
