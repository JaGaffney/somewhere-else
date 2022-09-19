import React, { useEffect } from 'react'
import { useTour } from '@reactour/tour';

import { connect } from 'react-redux'

import OfflineProgress from './OfflineProgress';
import News from './News';

export const Home = (props) => {
    const { setIsOpen } = useTour()
    const { setSteps, setCurrentStep } = useTour();

    useEffect(() => {
        setCurrentStep(0);
        setSteps([
            {
                selector: '[data-cy="helpToggle"]',
                content: "If your ever stuck on a page, just click here.",
            },
            {
                selector: '[data-cy="sidepanel"]',
                content: "This is your main hub of controls.",
            },
            {
                selector: '[data-cy="sidepanelNonSkill"]',
                content: "This area contains your key areas, such as combat and settlement management. You will spend most of your time in this area",
            },
            {
                selector: '[data-cy="sidepanelClasses"]',
                content: "The Classes area allows you see what actions & spells your Classes will unlock and at what level.",
            },
            {
                selector: '[data-cy="sidepanelJobs"]',
                content: "The Jobs area allows you to assign your workers to certain jobs in order to gather more resources or to produce items",
            },
            {
                selector: '[data-cy="sidepanelLogs"]',
                content: "The Logs area will show you stats for your character",
            },
            {
                selector: '[data-cy="sidepanelOther"]',
                content: "Contains settings and other account related features",
            },
        ]);
    }, []);


    return (
        <div className="game__normal">
            <div className="topPanel topPanel__controls">
                <div className="topPanel__controls-left">
                    <span onClick={() => setIsOpen(true)}>not sure what to do, click here to get started</span>
                    <span className="topPanel__controls-left-info"></span>
                </div>
            </div>

            <div className="home__container">
                <OfflineProgress />
                <News />
            </div>


        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)