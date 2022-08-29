import React from "react";
import PropTypes from 'prop-types';

import TaskCard from "../TaskCard/TaskCard";

import { CardBtnTypes } from "../../config/enums";

import { CardsContainer } from "./TasksList.style";

const TasksList = ({TasksList, status}) => {
    return <CardsContainer>
        {
            TasksList.map(item => {
                return <TaskCard
                    key={Math.random()}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    points={item.price || item.reward}
                    status={status}
                />
            })
        }
    </CardsContainer>
}

TaskCard.TasksList = {
    TasksList: PropTypes.array.isRequired,
    status: PropTypes.oneOf([CardBtnTypes.ADD, CardBtnTypes.TOGGLE, CardBtnTypes.TASK_EXPIRED]).isRequired
}

export default TasksList;