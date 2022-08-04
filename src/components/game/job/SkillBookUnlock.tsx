import React from 'react'
import { connect } from 'react-redux'

import Attack from '../skills/generics/Attack'

export const SkillBookUnlock = (props) => {
    return (
        <div className="attacks__container attacks__container-skillbook">
            <h3>Skillbook</h3>
            {[...props.attackData.attacks.keys()].map((i, k) => {
                if (props.attackData.getAttackById(i).type === props.activePage.toLowerCase()) {
                    return (
                        <div className="attackloadout__equipped-slot" key={k}>
                            <Attack attackID={i} key={k} onSelectedSkillHandler={props.onSelectedSkillHandler} onSelectedPassiveHandler={props.onSelectedPassiveHandler} />
                        </div>)
                }
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    attackData: state.attacks.attackData,
    activePage: state.engine.activePage,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SkillBookUnlock)