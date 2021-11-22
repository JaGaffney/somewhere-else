import React from 'react'
import { connect } from 'react-redux'

export const Header = (props) => {

    const getColor = () => {
        switch (props.activePage) {
            case ("shop"): {
                return "var(--amber500)";
            }
            case ("bank"): {
                return "var(--amber800)";
            }
            case ("bushcraft"): {
                return "var(--green700)";
            }
            case ("metalwork"): {
                return "var(--gray600)";
            }
            default:
                return "inherit"
        }
    }

    return (
        <div className="header__container">
            <div className="header__container-title"><span>Somewhere else</span></div>
            <div className="header__container-info" style={{ background: getColor() }}>
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
