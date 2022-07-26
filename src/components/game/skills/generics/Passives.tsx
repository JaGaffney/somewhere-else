import React from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';


export const Passives = (props) => {

    function onDragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.id)
    }

    return (
        <div className="attacks__container">
            {props.playerData.passives.getAllUnlockedPassivesID().map((id, k) => {
                if (id !== null) {
                    const passive = props.passiveData.getPassiveById(id)
                    return (

                        <button className="attacks__button attacks__button-general" draggable={true}
                            id={id}
                            data-tip={passive.name && passive.name}>
                            <img className="attacks__button-icon"

                                src={passive.icon}
                                alt={passive.name}
                            />
                        </button>
                    )
                }
            })}

            <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />
        </div>
    )
}

const mapStateToProps = (state) => ({
    passiveData: state.passives.passiveData,
    playerData: state.player.playerData
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Passives)