import React, { useEffect } from 'react'
import { useTour } from '@reactour/tour';

import { connect } from 'react-redux'

import OfflineProgress from './OfflineProgress';
import News from './News';

export const Home = (props) => {
    const { setSteps, setCurrentStep } = useTour();

    const time = () => {
        var utcSeconds = 1639876543;
        var date = new Date(utcSeconds * 1000);
        var resultFormat = date.toISOString().split('T')[0]
        console.log(resultFormat);
    }

    useEffect(() => {
        setCurrentStep(0);
        setSteps([
            {
                selector: '[data-cy="sidepanel"]',
                content: "TODO.",
            },
            {
                selector: '[data-cy="sidepanelNonSkill"]',
                content: "TODO",
            },
            {
                selector: '[data-cy="sidepanelInfo"]',
                content: "HTODO",
            },
            {
                selector: '[data-cy="sidepanelClasses"]',
                content: "TODO",
            },
            {
                selector: '[data-cy="sidepanelJobs"]',
                content: "TODO",
            },
            {
                selector: '[data-cy="sidepanelLogs"]',
                content: "TTODO",
            },
            {
                selector: '[data-cy="sidepanelOther"]',
                content: "TODO",
            },
        ]);
    }, []);

    return (
        <div className="game__normal">
            <OfflineProgress />
            <div>not sure what to do, click here to get started</div>
            <News />
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)