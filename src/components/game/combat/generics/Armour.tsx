import React from 'react'
import { connect } from 'react-redux'

export const Armour = (props) => {
    const handleDamageType = () => {
        if (props.damageOverlay) {
            if (props.damageOverlay > 0) {
                return "var(--blue700)"
            } else {
                return "var(--blue300)"
            }
        }
    }

    return (
        <div className="catcombat__armour">
            {props.value ? props.value : "*"}
            <div className={`statusBar-innerPopup ${props.damageOverlay ? 'fadeIn' : 'fadeOut'}`}
                style={{
                    color: handleDamageType(),
                }}
            >
                {props.damageOverlay && props.damageOverlay}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Armour)
