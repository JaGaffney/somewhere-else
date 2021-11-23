import React from 'react'
import { connect } from 'react-redux'

import NoncombatSkill from "./skills/NoncombatSkill"
import CombatSkill from "./skills/CombatSkill"
import Playerbank from "./player/Playerbank"
import Combat from "./combat/Combat"

export const Game = (props) => {
    const LoadComponent = () => {
        switch (props.activePage) {
            case ("bushcraft"):
            case ("metalwork"):
                return <NoncombatSkill />
            case ("warrior"):
            case ("archer"):
            case ("magician"):
                return <CombatSkill />
            case ("bank"):
                return <Playerbank />
            case ("combat"):
                return <Combat />
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
    activePage: state.engine.activePage
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
