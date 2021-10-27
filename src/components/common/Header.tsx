import React from 'react'
import { connect } from 'react-redux'

export const Header = (props) => {

    const getColor = () => {
        switch (props.activeSkill) {
            case ("bushcraft"): {
                return "var(--green700)";
            }
            default:
                return "inherit"
        }
    }

    return (
        <div className="header__container">
            <div className="header__container-title"><span>Somewhere else</span></div>
            <div className="header__container-info" style={{ background: getColor() }}>
                <span>{props.activeSkill}</span>
                <span>Charcter info</span>
            </div>

        </div>
    )
}


const mapStateToProps = (state) => ({
    activeSkill: state.activeSkill
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
