import React from 'react'
import { connect } from 'react-redux'

import ReactTooltip from 'react-tooltip';

import { getBackgroundColor } from '../../utils/color';
import { getValidCombatSkills } from '../../utils/equipment';
import { validFilterQuery } from '../../utils/generic';


export const Passives = (props) => {
    function onDragStart(e) {
        const id = e.target.id
        e.dataTransfer.setData("text/plain", `passive-${id}`)
    }

    const validSkill = (passive, currentLevel): boolean => {
        let valid = false
        if (validFilterQuery(passive.name, props.search) || validFilterQuery(passive.job, props.search)) {
            if (currentLevel >= passive.levelRequired) {
                if (getValidCombatSkills(props.skills, props.playerData).includes(passive.job.toLowerCase())) {
                    valid = true
                }

            }
        }
        return valid
    }

    return (
        <div className="attacks__container">
            {[...props.passiveData.passives.keys()].map((id: string, k) => {
                if (id !== null) {
                    const passive = props.passiveData.getPassiveById(id)
                    const currentLevel = props.playerData.levelChecker.getLevelFromExp(props.playerData.skillExp.getCurrentExp(passive.job.toLocaleLowerCase()))
                    if (validSkill(passive, currentLevel)) {
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
            })}

            <ReactTooltip className="react__tooltips-override" type="dark" effect="solid" />
        </div>
    )
}

const mapStateToProps = (state) => ({
    passiveData: state.passives.passiveData,
    playerData: state.player.playerData,
    skills: state.skills.skillData
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Passives)