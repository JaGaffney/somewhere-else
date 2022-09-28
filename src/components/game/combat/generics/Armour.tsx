import React from 'react'
import { connect } from 'react-redux'

//@ts-ignore
import SHIELDBROKEN from "../../../../images/combat/shieldBroken.svg"
//@ts-ignore
import SHIELD from "../../../../images/combat/shield.svg"

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

            <div className="catcombat__armour-icon">
                {props.value ? (
                    <>
                        <img className="catcombat__armour-image" src={SHIELD} alt={props.value} />
                        <span>{props.value}</span>
                    </>
                ) : (<img className="catcombat__armour-image" src={SHIELDBROKEN} alt={"0"} />)}
            </div>

            <div className={`statusBar-innerPopup ${props.damageOverlay ? 'fadeIn' : 'fadeOut'}`}
                style={{
                    color: handleDamageType(),
                }}
            >
                {props.damageOverlay && props.value > 0 ? props.damageOverlay : `-${props.damageOverlay}`}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Armour)
function normalize(currentValue: any, maxValue: any) {
    throw new Error('Function not implemented.')
}

