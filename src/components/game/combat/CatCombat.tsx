import React from 'react'
import { connect } from 'react-redux'

export const CatCombat = (props) => {

    return (
        <h1>Cat</h1>
    )
}


const mapStateToProps = (state) => ({
    enemies: state.enemies
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CatCombat)
