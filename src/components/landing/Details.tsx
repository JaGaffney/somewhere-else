import React from 'react'
import { connect } from 'react-redux'

export const Details = (props) => {
    return (
        <div className="landing__details">
            <h1>Somewhere else</h1>
            <h3>Browser based rpg idle game</h3>
            <h3>Also, your a Cat.</h3>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
