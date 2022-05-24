import React from 'react'
import { connect } from 'react-redux'

import { getResearchBorderColor } from "../../utils/color"

export const Repeat = (props) => {
    console.log(props.researchData)
    return (
        <div className="research__panel">
            {Object.keys(props.researchData.repeat).map((i, k) => {
                const data = props.researchData.repeat[i]
                console.log(data)
                return (
                    <div className="research__panel-data-action" key={k} style={{ borderColor: getResearchBorderColor(data.type) }}>
                        <img className="action__item-icon" src={data.icon} />
                        <div className="research__panel-data-action-data">
                            <span className="research__panel-data-action-title">{data.name}</span>
                            <span className="research__panel-data-action-description">"{data.description}"</span>
                            <div className="research__panel-data-action-controls">
                                <button onClick={() => null}>[ Buy ]</button>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    researchData: state.research.researchData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Repeat)