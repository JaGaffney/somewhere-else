import React from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';


export const Slot = (props) => {
    return (
        <>
            <div onClick={() => props.onActiveEquipmentSlotHandler(props.location)} data-tip={props.name && props.name} className={`equipment__container-equipped-slot equipment__container-equipped-equippedSlot-${props.row} equipment__container-equipped-equippedSlot-${props.column}`}>
                <span>{props.location}</span>
                <img src={props.icon} alt={props.name} />
            </div>

            <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Slot)