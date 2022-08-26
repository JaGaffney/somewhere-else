import React from 'react'
import { connect } from 'react-redux'

export const News = (props) => {
    return (
        <div className="equipment__container-equipment">
            <div className="offlineProgression-gp settlement__stats-balance-items">
                <h4>Recent news</h4>
            </div>
            <div className="offlineProgression-gp settlement__stats-balance-items">
                <h4>Patch notes</h4>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(News)