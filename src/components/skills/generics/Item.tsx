import React from 'react'

import { connect } from 'react-redux'

import { FiAlertTriangle } from "react-icons/fi";
import { FiClock } from "react-icons/fi";

export const Item = (props) => {
    return (
        <div className="action__item">
            <div className="action__item-icon"><FiAlertTriangle /></div>
            <span className="action__item-name">Name</span>
            <span className="action__item-details">50 xp / <FiClock />  5.4 seconds</span>
        </div>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
