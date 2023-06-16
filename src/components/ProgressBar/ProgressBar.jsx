import React from "react";

import PropTypes from 'prop-types';

import {
    WeekTasksData,
    WeekTasksTextElemSet,
    ElemSetTitle,
    ElemSetValue,
    ProgressBarSet,
    ProgressBarInfo,
    InfoTasksDone,
    InfoTasksPlanned,
    ProgressBarBackground,
    ProgressBarFiller,
} from "./ProgressBarStyled"

export const ProgressBar = ({currentWeekTasks, getProgressBarFillPercentFunc}) => {

    return (
        <WeekTasksData>
            <WeekTasksTextElemSet>
                <ElemSetTitle>
                    Points gained this week:
                </ElemSetTitle>
                <ElemSetValue>
                    {currentWeekTasks?.rewardsGained || 0}
                </ElemSetValue>
            </WeekTasksTextElemSet>
            <WeekTasksTextElemSet>
                <ElemSetTitle>
                    Points planned for this week:
                </ElemSetTitle>
                <ElemSetValue>
                    {currentWeekTasks?.rewardsPlanned || 0}
                </ElemSetValue>
            </WeekTasksTextElemSet>
            <ProgressBarSet>
                <ProgressBarInfo>
                    <InfoTasksDone>
                        {currentWeekTasks?.rewardsGained || 0}&nbsp;
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
        </WeekTasksData>
    )

}

ProgressBar.propTypes = {
    currentWeekTasks: PropTypes.object,
    getProgressBarFillPercentFunc: PropTypes.func.isRequired
}