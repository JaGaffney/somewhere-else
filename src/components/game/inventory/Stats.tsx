import React from 'react'
import { connect } from 'react-redux'

export const Stats = (props) => {
    return (
        <div className="equipment__container-stats">Stats</div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Stats)