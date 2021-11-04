import React from 'react'
import { connect } from 'react-redux'

import Noncombat from "../skills/Noncombat"

export const Game = (props) => {
    return (
        <section className="game__container">
            {props.activeSkill === "bushcraft" || props.activeSkill === "metalwork" && <Noncombat />}
        </section>
    )
}



const mapStateToProps = (state) => ({
    activeSkill: state.skills.activeSkill
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
