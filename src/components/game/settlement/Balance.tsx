import React from 'react'
import { connect } from 'react-redux'

export const Balance = (props) => {
    return (
        <div className="settlement__stats-balance">
            <h2>{props.title}</h2>


            <div>
                {props.data.map((i, k) => {
                    console.log(i.id)
                    const data = props.itemData.getItemById(i.id)
                    console.log(data)
                    return (
                        <div key={k}>
                            <span></span>
                            <span></span>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemData: state.items.itemData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Balance)