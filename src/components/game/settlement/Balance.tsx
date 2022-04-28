import React from 'react'
import { connect } from 'react-redux'

export const Balance = (props) => {

    console.log(props.itemData)

    return (
        <div className="settlement__stats-balance">
            <h2>{props.title}</h2>

            <div>
                {props.data.map((i, k) => {
                    const data = props.itemData.getItemById(i.id)
                    return (
                        <div key={k}>
                            <span><img src={data.icon} />{data.name}</span>
                            <span>{i.qty}</span>
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