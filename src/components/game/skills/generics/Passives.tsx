import React from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';

import { getBackgroundColor } from '../../../utils/color';
import { validFilterQuery } from '../../../utils/generic';


export const Passives = (props) => {
    function onDragStart(e) {
        const id = e.target.id
        e.dataTransfer.setData("text/plain", `passive-${id}`)
    }

    return (
        <div className="attacks__container">
            <h3>Passives</h3>
            {[...props.passiveData.passives.keys()].map((id: string, k) => {
                if (id !== null) {
                    const passive = props.passiveData.getPassiveById(id)
                    const currentLevel = props.playerData.levelChecker.getLevelFromExp(props.playerData.skillExp.getCurrentExp(passive.job))
                    if (validFilterQuery(passive.name, props.search) || validFilterQuery(passive.job, props.search)) {
                        if (currentLevel >= passive.levelRequired) {
                            return (
                                <div className="attackloadout__equipped-slot" key={k}>
                                    <button
                                        className="attacks__button attacks__button-general"
                                        draggable={true}
                                        onDragStart={e => onDragStart(e)}
                                        id={id}
                                        data-tip={passive.name && passive.name}
                                        style={{ borderColor: getBackgroundColor(passive.job) }}
                                        onClick={() => {
                                            props.onSelectedSkillHandler(null)
                                            props.onSelectedPassiveHandler(passive)
                                        }}
                                    >
                                        <img className="attacks__button-icon"
                                            src={passive.icon}
                                            alt={passive.name}
                                            id={id}
                                        />
                                    </button>
                                </div>
                            )
                        }
                    }


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