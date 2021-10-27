import React from 'react'
import { connect } from 'react-redux'

import Header from "../common/Header"
import SidePanel from '../common/SidePanel'
import Game from "./Game"

export const Structure = (props) => {
    return (
        <div className="structure__container">
            <Header />
            <SidePanel />
            <Game />
        </div>
    )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Structure)
