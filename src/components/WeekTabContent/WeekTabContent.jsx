import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import axios from 'axios';

import PropTypes from 'prop-types';

import { updateTaskStatus } from "../../ducks/userInfo/userInfoActions";

import TasksList from "../../components/TasksList/TasksList";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { ProgressBarMobile } from "../ProgressBarMobile/ProgressBarMobile";

import { CardBtnTypes } from "../../config/enums";

import { store } from "../../store"

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
    const dispatch = useDispatch()

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

    const formDateStr = () => {
        let year = selectedDate.getFullYear();
        let month = ( selectedDate.getMonth() + 1 ) < 10 ? `0${selectedDate.getMonth() + 1}` : selectedDate.getMonth() + 1;
        let date = ( selectedDate.getDate()) < 10 ? `0${selectedDate.getDate()}` : selectedDate.getDate();

        return `${year}-${month}-${date}`;
    }

    const switchTaskStatusRequest = (taskId) => {

        let dateStr = formDateStr();
        let token = store.getState().userInfo.token;

        axios
            .patch(`https://kidslike-v1-backend.goit.global/task/switch/${taskId}`,
            {
                date: dateStr
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })
            .then(res => {
                alert('request ok');
                dispatch(updateTaskStatus(res.data.updatedTask, res.data.updatedBalance));
            })
            .catch(error => {
                alert(error.response.data.message);
            });

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
                    <TasksList TasksList = {currentWeekTasks.tasks} status = {CardBtnTypes.TOGGLE} modifyBuyList = {switchTaskStatusRequest}/>
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