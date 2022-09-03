import React, {useState} from "react";

import AddBtn from "../../components/AddBtn/AddBtn";
import BaseModal from "../../components/BaseModal/BaseModal";
import PlanningAddTaskModal from "../../components/PlanningAddTaskModal/PlanningAddTaskModal";

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
    const [modalVisibility, setModalVisibility] = useState(false);

    const createTask = () => {
        setModalVisibility(true);
    };

    return <PlanningContainer>
        <TitleBlock>
            <CurrentWeek>
                <CurrentWeekTitle>
                    Plan for the week:
                </CurrentWeekTitle>
                <CurrentWeekDate>
                    02.09.2022
                </CurrentWeekDate>
            </CurrentWeek>
            <PlannedPoints>
                {/* change points */}
                Defined tasks for
                <PlannedPointsNumber>
                    16
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
        </PlanningContainer>
}

export default withLoader(Planning);