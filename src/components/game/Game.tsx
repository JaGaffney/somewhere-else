import React from 'react'
import { connect } from 'react-redux'

import Bushcraft from "../skills/Bushcraft"

export const Game = (props) => {
    return (
        <section className="game__container">
            {props.activeSkill === "bushcraft" && <Bushcraft />}
        </section>
    )
}



const mapStateToProps = (state) => ({
    activeSkill: state.activeSkill
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
