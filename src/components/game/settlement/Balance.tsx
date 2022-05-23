import React from 'react'
import { connect } from 'react-redux'

// @ts-ignore
import COINS from "../../../images/sidepanel/coins.svg"

export const Balance = (props) => {
    return (
        <div className="settlement__stats-balance">
            <h2>{props.title}</h2>

            {props.exp && (
                <div className="settlement__stats-balance-items">
                    <h4>Experience gained</h4>
                    {Object.keys(props.exp).map((i, k) => {
                        const icon = props.skills.getSkillIconByName("gathering", i)
                        return (
                            <div key={k}>
                                <span><img src={icon} />{i}</span>
                                <span>{props.exp[i]}</span>
                            </div>
                        )
                    })}
                </div>)}

            {props.data && (
                <div className="settlement__stats-balance-items">
                    <h4>Items gained</h4>
                    {props.data.map((i, k) => {
                        const data = props.itemData.getItemById(i.id)
                        return (
                            <div key={k}>
                                <span><img src={data.icon} />{data.name}</span>
                                <span>{i.qty}</span>
                            </div>
                        )
                    })}
                    {props.cash && (
                        <div>
                            <span><img src={COINS} />Coins</span>
                            <span>{props.cash} GP</span>
                        </div>
                    )
                    }
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemData: state.items.itemData,
    skills: state.skills.skillData,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Balance)