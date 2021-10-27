import React from 'react'
import { connect } from 'react-redux'

import Login from "./Login"
import Details from './Details'

export const Landing = (props) => {
    return (
        <div className="landing__container">
            <Details />
            <Login />
        </div>
    )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
