import React from 'react'
import { connect } from 'react-redux'

import Bushcraft from "../skills/Bushcraft"

export const Game = (props) => {
    return (
        <div className="game__container">
            {props.activeSkill === "bushcraft" && <Bushcraft />}
        </div>
    )
}



const mapStateToProps = (state) => ({
    activeSkill: state.activeSkill
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
