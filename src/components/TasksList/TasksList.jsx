import React from "react";
import PropTypes from 'prop-types';

import TaskCard from "../TaskCard/TaskCard";

import { CardBtnTypes } from "../../config/enums";

import { CardsContainer } from "./TasksList.style";

const TasksList = ({TasksList, status, modifyBuyList}) => {
    return <CardsContainer>
        {
            TasksList.map(item => {
                return <TaskCard
                    key={item.id || item._id}
                    id={item.id || item._id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    points={item.price || item.reward}
                    status={status}
                    modifyBuyList={modifyBuyList}
                />
            })
        }
    </CardsContainer>
}

TaskCard.TasksList = {
    TasksList: PropTypes.array.isRequired,
    status: PropTypes.oneOf([CardBtnTypes.ADD, CardBtnTypes.TOGGLE, CardBtnTypes.TASK_EXPIRED]).isRequired,
    modifyBuyList: PropTypes.func
}

export default TasksList;