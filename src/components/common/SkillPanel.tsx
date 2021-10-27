import React from 'react'
import { connect } from 'react-redux'
import { setActiveSkill } from '../actions/api';

import { GiCoins } from "react-icons/gi";


export const SkillPanel = (props) => {
    return (
        <div className="skillpanel" onClick={() => props.setActiveSkill(props.skillName)}>
            <span className="skillpanel__icon">{props.icon ? props.icon : <GiCoins />}</span>
            <span className="skillpanel__name">{props.skillName}</span>
            <span className="skillpanel__level">{props.skillLevel}{props.seperator}{props.skillLevelTotal}</span>
        </div>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    setActiveSkill
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillPanel)
