import React from 'react'
import { connect } from 'react-redux'

import { getTextColor, getBackgroundColor } from '../utils/color'

export const Header = (props) => {
    return (
        <div className="header__container">
            <div className="header__container-title"><span>Somewhere else</span></div>
            <div className="header__container-info" style={{ background: getBackgroundColor(props.activePage), color: getTextColor(props.activePage) }}>
                <span>{props.activePage}</span>
                <span>Charcter info</span>
            </div>

        </div>
    )
}


const mapStateToProps = (state) => ({
    activePage: state.engine.activePage
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
