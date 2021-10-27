import React from 'react'
import { connect } from 'react-redux'

import Progression from "./Progression"

import { Gi3DHammer } from "react-icons/gi";

export const Craft = (props) => {
    return (
        <div className="actions__craft">
            <div className="actions__gather actions__title">
                <Gi3DHammer />
                <span>{props.type}</span>
            </div>

            <Progression />
        </div>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Craft)
