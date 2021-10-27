import React from 'react'
import { connect } from 'react-redux'

import { FiClock } from "react-icons/fi";
import { BsTreeFill } from "react-icons/bs";



export const Progression = (props) => {
    return (
        <div className="progression">
            <div className="progression__container">
                <BsTreeFill className="progression__icon" />
                <span className="progression__name">Oak Tree</span>
            </div>
            <div className="progression__details">
                <span style={{ width: "100%" }}>50xp</span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><FiClock /> 5.4 seconds</span>
            </div>

        </div >
    )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Progression)
