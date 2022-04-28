import React from 'react'
import { connect } from 'react-redux'

import Balance from './Balance'

export const Stats = (props) => {


    const mockIncome = [
        {
            id: 1,
            qty: 1
        },
        {
            id: 4,
            qty: 5
        }

    ]

    return (
        <div className="settlement__stats">
            <h1>Breakdown</h1>

            <Balance title={"Income"} data={mockIncome} />
            <Balance title={"Cost"} data={mockIncome} />
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Stats)