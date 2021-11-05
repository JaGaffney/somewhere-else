import React from 'react'
import { connect } from 'react-redux'

import Noncombat from "../skills/Noncombat"

export const Game = (props) => {
    const LoadComponent = () => {
        switch (props.activeSkill) {
            case ("bushcraft"):
            case ("metalwork"):
                return <Noncombat />
            default:
                return null
        }
    }

    return (
        <section className="game__container">
            <LoadComponent />
        </section>
    )
}



const mapStateToProps = (state) => ({
    activeSkill: state.skills.activeSkill
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
