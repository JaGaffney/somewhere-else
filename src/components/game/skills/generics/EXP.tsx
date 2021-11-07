import React from 'react'
import { connect } from 'react-redux'

export const EXP = (props) => {
    return (
        <div className="exp">
            <div className="exp__level">
                <span>Level</span>
                <span>52 / 99{props.level}</span>
            </div>
            <div className="exp__progressbar"></div>
            <div className="exp__required">
                <span>14000</span>
                <span>21000</span>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EXP)
