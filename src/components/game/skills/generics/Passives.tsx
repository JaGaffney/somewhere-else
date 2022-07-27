import React from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';

import { getBackgroundColor } from '../../../utils/color';


export const Passives = (props) => {

    function onDragStart(e) {
        const id = e.target.id
        e.dataTransfer.setData("text/plain", `passive-${id}`)
    }


    return (
        <div className="attacks__container">
            {props.playerData.passives.unlockedPassives.map((id, k) => {
                if (id !== null) {
                    const passive = props.passiveData.getPassiveById(id)
                    return (
                        <button
                            className="attacks__button attacks__button-general"
                            draggable={true}
                            onDragStart={e => onDragStart(e)}
                            id={id}
                            key={k}
                            data-tip={passive.name && passive.name}
                            style={{ borderColor: getBackgroundColor(passive.job) }}
                        >
                            <img className="attacks__button-icon"
                                src={passive.icon}
                                alt={passive.name}
                                id={id}
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