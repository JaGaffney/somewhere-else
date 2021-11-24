import React from 'react'
import { connect } from 'react-redux'

export const Stats = (props) => {
    return (
        <div className="catcombat__description-stats">
            <p>testingsd</p>
            <p>testingsd</p>
            <p>testingsd</p>
            <p>testingsd</p>
            <p>testingsd</p>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
