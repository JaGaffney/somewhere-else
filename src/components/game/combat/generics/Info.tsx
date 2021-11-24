import React from 'react'
import { connect } from 'react-redux'

export const Info = (props) => {
    return (
        <div className="catcombat__description-info">
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

export default connect(mapStateToProps, mapDispatchToProps)(Info)
