import React from 'react'
import { connect } from 'react-redux'

export const Rotation = (props) => {
    return (
        <div className="catcombat__description-rotation">
            <p>Set your rotation for auto-combat</p>
            <ul>
                <li>Attack 1</li>
                <li>Attack 2</li>
                <li>Attack 3</li>
                <li>Attack 4</li>
                <li>Attack 5</li>
                <li>Attack 6</li>
            </ul>

            <button>Being auto combat</button>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Rotation)
