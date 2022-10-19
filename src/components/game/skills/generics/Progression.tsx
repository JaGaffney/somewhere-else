import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

export const Progression = (props) => {
    const [activeData, setActiveData] = useState(0)




    useEffect(() => {
        setActiveData(props.realTimeCalc())
        console.log("got here")
    }, [props.deltaTime])


    function normalize(val: number, max: number) {
        const value = (val - 0) / (max - 0) * 100
        if (value <= 100) {
            return value
        } else {
            return 100
        }
    }

    return (
        <div className="timer">
            <div className="timer__progressbar">
                <div className="timer__progressbar-inner" style={{ transform: `scaleX(${activeData && normalize(props.deltaTime, activeData)}%)` }}></div>
            </div>
        </div >
    )
}


const mapStateToProps = (state) => ({
    playerData: state.player.playerData,
    deltaTime: state.engine.deltaTime,
    actionTime: state.engine.actionTime,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Progression)
