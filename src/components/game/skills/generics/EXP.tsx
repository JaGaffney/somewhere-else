import React from 'react'
import { connect } from 'react-redux'

export const EXP = (props) => {
    return (
        <div className="exp">
            <div className="exp__level">
                <span>Level</span>

                <span>{props.playerData.levelChecker.getLevelFromExp(props.playerData.getSkillExp(props.activePage))} / 99</span>
            </div>
            <div className="exp__progressbar"></div>
            <div className="exp__required">
                <span>{props.playerData.getSkillExp(props.activePage)}</span>
                <span>21000</span>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    activePage: state.player.activePage
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EXP)
