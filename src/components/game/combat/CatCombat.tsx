import React from 'react'
import { connect } from 'react-redux'

export const CatCombat = (props) => {
    //props.playerData.status.health.setBase(15)
    console.log(props.playerData.status)
    // divination
    // can reset each one at the cost of coins, can only have 1  on at a time
    // 1 focus on dmg at the cost of defence
    // 1 focus on defence at the csot of damage
    // 1 focus on killing things effiecntly (drop rate increase etc)

    return (
        <div className="combat__container"><h1>Cat</h1></div>
    )
}


const mapStateToProps = (state) => ({
    enemies: state.enemies,
    playerData: state.player.playerData
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CatCombat)
