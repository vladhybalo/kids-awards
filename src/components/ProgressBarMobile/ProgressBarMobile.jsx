import React from "react";

import { useNavigate } from "react-router-dom";

import PropTypes from 'prop-types';

import {
    ProgressBarSet,
    ProgressBarInfo,
    InfoTasksDone,
    InfoTasksPlanned,
    ProgressBarBackground,
    ProgressBarFiller,
    MobileProgressBar,
    MobileProgressBarTitle,
    ProgressBarButtonCircle,
    ProgressBarButtonCrossLine
} from "./ProgressBarMobileStyled"

export const ProgressBarMobile = ({currentWeekTasks, getProgressBarFillPercentFunc}) => {

    const navigate = useNavigate();

    return (
        <MobileProgressBar>
            <MobileProgressBarTitle>
                Points made:
            </MobileProgressBarTitle>
            <ProgressBarSet isMobile={true}>
                <ProgressBarInfo>
                    <InfoTasksDone>
                        {currentWeekTasks?.rewardsGained || 0} &nbsp;
                    </InfoTasksDone>
                    <InfoTasksPlanned>
                        / {currentWeekTasks?.rewardsPlanned || 0}
                    </InfoTasksPlanned>
                </ProgressBarInfo>
                <ProgressBarBackground>
                    <ProgressBarFiller width={getProgressBarFillPercentFunc()}>
                    </ProgressBarFiller>
                </ProgressBarBackground>
            </ProgressBarSet>
            <ProgressBarButtonCircle onClick ={() => navigate("/planning")}>
                    <ProgressBarButtonCrossLine rotate = {0}/>
                    <ProgressBarButtonCrossLine rotate = {90}/>
                </ProgressBarButtonCircle>
        </MobileProgressBar>
    )
}

ProgressBarMobile.propTypes = {
    currentWeekTasks: PropTypes.object,
    getProgressBarFillPercentFunc: PropTypes.func.isRequired
}