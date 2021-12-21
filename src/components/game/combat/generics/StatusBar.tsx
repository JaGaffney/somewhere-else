import React from 'react'
import { connect } from 'react-redux'

export const StatusBar = (props) => {
    function normalize(val: number, max: number) {
        return (val - 0) / (max - 0) * 100;
    }
    const handleDamageType = () => {
        if (props.damageOverlay) {
            if (props.damageOverlay > 0) {
                return "var(--green700)"
            } else {
                return "var(--red900)"
            }
        }
    }

    return (
        <div className="statusBar__container">
            <div className="statusBar">
                <div className="statusBar-inner"
                    style={{
                        transform: `scaleX(${normalize(props.currentValue, props.maxValue)}%)`,
                        background: props.type === "health" ? "var(--red500)" : "var(--green500)"
                    }}
                >
                </div>

                <div className={`statusBar-innerPopup ${props.damageOverlay ? 'fadeIn' : 'fadeOut'}`}
                    style={{
                        left: `${normalize(props.currentValue, props.maxValue)}%`,
                        color: handleDamageType(),
                    }}
                >
                    {props.damageOverlay && props.damageOverlay}
                </div>

            </div>
            <div>
                <span>{props.currentValue} / {props.maxValue} {props.type}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar)
