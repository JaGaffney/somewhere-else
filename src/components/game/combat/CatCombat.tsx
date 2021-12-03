import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Section from './generics/Section'

export const CatCombat = (props) => {
    const [timer, setTimer] = useState(0)
    const [combatInProcess, setCombatInProcess] = useState<boolean>(false)
    const [playersTurn, setPlayersTurn] = useState(null)


    const handleAttackInput = (attackID) => {

    }

    const handleHit = () => {
        console.log("waiting for next attack", timer)

    }

    const gameEngineStart = () => {

    }


    useEffect(() => {
        console.log("start up")
        if (props.enemyData) {
            setCombatInProcess(true)
        }
    }, [])

    const updateTime = () => {
        setTimer(timer + 1)
    }

    useEffect(() => {
        const intervalRefresh = setInterval(() => {
            updateTime()

            if (timer >= 3) {
                console.log("attack happend")
                handleHit()
                setTimer(0)
            }

        }, 1000);
        return () => clearInterval(intervalRefresh);
    }, [combatInProcess, timer]);

    return (
        <div className="catcombat__container">
            <Section type="player" data={props.playerData} />
            <Section type="enemy" data={props.enemyData} />
        </div>
    )
}


const mapStateToProps = (state) => ({
    enemyData: state.engine.combatData,
    playerData: state.player.playerData
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CatCombat)
