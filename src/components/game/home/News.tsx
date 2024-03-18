import React from 'react'
import { connect } from 'react-redux'

export const News = (props) => {
    return (
        <div className="generic__container">
            <div className="offlineProgression-gp settlement__stats-balance-items">
                <h4>Info</h4>
                <span style={{ textTransform: "none", fontSize: "18px", color: "var(--gray400)" }}>Embark on a journey to <strong>Somewhere else</strong>, an immersive idle settlement game where strategy meets serenity. Engage in thrilling turn-based combat, harnessing a diverse array of unique skills to fortify your settlement. Elevate your community and unlock the secrets to mastering combat, paving the way to bountiful rewards. Every decision shapes your path to prosperity in this captivating world of growth and conquest.</span>
            </div>
            <div className="offlineProgression-gp settlement__stats-balance-items">
                <h4>Patch notes</h4>
                <span style={{ textTransform: "none", fontSize: "18px", color: "var(--gray400)" }}>Game is discontinued, sorry.</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(News)