import React, {useState} from "react";
import PropTypes from 'prop-types';

import CardBtn from "../CardBtn/CardBtn";
import CheckboxList from "../CheckboxList/CheckboxList";

import { CardBtnTypes } from "../../config/enums";

import {
    CardContainer,
    CardImageWrapper,
    CardBody,
    CardContent,
    CardName,
    CardPoints
} from "./TaskCard.style";

const TaskCard = ({id, imageUrl, title, points, status, modifyBuyList}) => {
    const [checkedToggler, setCheckedToggler] = useState(false);
    const [openDaysList, setOpenDaysList] = useState(false);
    const [taskOpenedDaysList, setTaskOpenedDaysList] = useState(false);
    const isDone = false;

    const handleToggler = () => {
        setCheckedToggler(!checkedToggler);
        modifyBuyList(id);
    };

    const addDayToTask = () => {
        setOpenDaysList(!openDaysList);
        setTaskOpenedDaysList(!taskOpenedDaysList);
    };

    return (
        <CardContainer>
            {
                openDaysList && <CheckboxList />
            }
            <CardImageWrapper>
                <img src={imageUrl} />
            </CardImageWrapper>
            <CardBody>
                <CardContent>
                    <CardName>
                        {title}
                    </CardName>
                    <CardPoints>
                        {points} баллов
                    </CardPoints>
                </CardContent>
                <CardBtn
                    status={status}
                    handleToggler={handleToggler}
                    addDayToTask={addDayToTask}
                    taskOpenedDaysList={taskOpenedDaysList}
                    checkedToggler={checkedToggler}
                    isDone={isDone}
                />
            </CardBody>
        </CardContainer>
    );
}

TaskCard.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    status: PropTypes.oneOf([CardBtnTypes.ADD, CardBtnTypes.TOGGLE, CardBtnTypes.TASK_EXPIRED]).isRequired,
    modifyBuyList: PropTypes.func
}

export default TaskCard;