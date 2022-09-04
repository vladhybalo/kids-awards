import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { downloadAllUserInfo } from "../../ducks/userInfo";

import { CardBtnTypes } from "../../config/enums";

import AddBtn from "../../components/AddBtn/AddBtn";
import BaseModal from "../../components/BaseModal/BaseModal";
import PlanningAddTaskModal from "../../components/PlanningAddTaskModal/PlanningAddTaskModal";
import TasksList from "../../components/TasksList/TasksList";

import withLoader from "../../hocs/withLoader/withLoader";

import {
    PlanningContainer,
    TitleBlock,
    CurrentWeek,
    CurrentWeekTitle,
    CurrentWeekDate,
    PlannedPoints,
    PlannedPointsNumber,
    CreateNewTaskContainer,
    CreateNewTaskText
} from "./Planning.style";

const Planning = () => {
    const dispatch = useDispatch();
    const userWeekInfo = useSelector(state => state.userInfo.userWeek);

    const [modalVisibility, setModalVisibility] = useState(false);

    const createTask = () => {
        setModalVisibility(true);
    };

    const defineWeek = () => {
        const startWeekDay = userWeekInfo.startWeekDate.split('-');
        const endWeekDay = userWeekInfo.endWeekDate.split('-');

        if (startWeekDay[1] !== endWeekDay[1]) {
            return startWeekDay.reverse().join('.') + ' - ' + endWeekDay.reverse().join('.');
        } else {
            return startWeekDay[2] + ' - ' + endWeekDay.reverse().join('.');
        }
    }

    useEffect(() => {
        dispatch(downloadAllUserInfo());
    }, [])

    return <PlanningContainer>
        <TitleBlock>
            <CurrentWeek>
                <CurrentWeekTitle>
                    Plan for the week:
                </CurrentWeekTitle>
                <CurrentWeekDate>
                    { userWeekInfo && defineWeek() }
                </CurrentWeekDate>
            </CurrentWeek>
            <PlannedPoints>
                Defined tasks for
                <PlannedPointsNumber>
                    { userWeekInfo && userWeekInfo.rewardsPlanned }
                </PlannedPointsNumber>
                points
            </PlannedPoints>
            <CreateNewTaskContainer>
                <CreateNewTaskText>
                    If you want to get more prizes - add tasks :)
                </CreateNewTaskText>
                <AddBtn addNewTaskFlag createTask={createTask} />
            </CreateNewTaskContainer>
            { modalVisibility &&
                <BaseModal setModalVisibility={setModalVisibility}>
                    <PlanningAddTaskModal setModalVisibility={setModalVisibility}/>
                </BaseModal>
            }
        </TitleBlock>
        { userWeekInfo &&
            <TasksList TasksList={userWeekInfo.tasks} status={CardBtnTypes.ADD} />
        }
        </PlanningContainer>
}

export default withLoader(Planning);