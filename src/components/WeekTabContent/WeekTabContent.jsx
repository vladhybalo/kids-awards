import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import PropTypes from 'prop-types';

import TasksList from "../../components/TasksList/TasksList";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { ProgressBarMobile } from "../ProgressBarMobile/ProgressBarMobile";

import { CardBtnTypes } from "../../config/enums";

import { 
    WeekTabContentWrapper,
    WeekData,
    WeekInfoHeader,
    CurrentDateData,
    DayDataSet,
    MyTasksText,
    DayData,
    CurrentTasksArea,
    NoTasksScreen,
    NoTasksScreenText,
    NoTasksScreenPlanBtn } from "./WeekTabContentStyled";

export const WeekTabContent = ({weekDataString, selectedDay, selectedDate, currentWeekTasks}) => {

    const navigate = useNavigate();

    const getProgressBarFillPercent = () => {
        if (currentWeekTasks?.rewardsGained && currentWeekTasks?.rewardsPlanned) {
            return ( currentWeekTasks.rewardsGained / currentWeekTasks.rewardsPlanned  ) * 100;
        } else {
            return 0;
        }
    }     

    const isTasksAvailable = () => {
        return !!currentWeekTasks;
    }

    return(
        <>
        <WeekTabContentWrapper isTasksPresent = {isTasksAvailable()}>
            <WeekInfoHeader>
                <CurrentDateData>
                    <WeekData>
                        {weekDataString}
                    </WeekData>
                    <DayDataSet>
                        <MyTasksText>
                            My tasks:
                        </MyTasksText>
                        <DayData>
                            {selectedDay.toUpperCase()}, {selectedDate.getDate()}-{selectedDate.getMonth()+1}-{selectedDate.getFullYear()}
                        </DayData>
                    </DayDataSet>
                </CurrentDateData>
                <ProgressBar  currentWeekTasks = {currentWeekTasks} getProgressBarFillPercentFunc = {getProgressBarFillPercent}/>
            </WeekInfoHeader>
            <CurrentTasksArea>
                {
                    currentWeekTasks?.tasks &&
                    <TasksList TasksList = {currentWeekTasks.tasks} status = {CardBtnTypes.TOGGLE}/>
                }
            </CurrentTasksArea>
            {
                !currentWeekTasks && 
                <NoTasksScreen>
                    <NoTasksScreenText>
                        No tasks for this day
                    </NoTasksScreenText>
                    <NoTasksScreenPlanBtn onClick ={() => navigate("/planning")}>
                        Plan tasks
                    </NoTasksScreenPlanBtn>

                </NoTasksScreen>
            }

        </WeekTabContentWrapper>
        <ProgressBarMobile currentWeekTasks = {currentWeekTasks} getProgressBarFillPercentFunc = {getProgressBarFillPercent}/>
        </>
    )
}

export default WeekTabContent;

WeekTabContent.propTypes = {
    weekDataString: PropTypes.string.isRequired,
    selectedDate: PropTypes.object.isRequired,
    selectedDay: PropTypes.string.isRequired,
    currentWeekTasks: PropTypes.object
}