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