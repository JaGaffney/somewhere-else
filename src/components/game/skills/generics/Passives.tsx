import React from 'react'
import { connect } from 'react-redux'

export const Passives = (props) => {
    console.log(props.passiveData)

    return (
        <div className="attacks__container">
            Passives
        </div>
    )
}

const mapStateToProps = (state) => ({
    passiveData: state.passives.passiveData
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Passives)