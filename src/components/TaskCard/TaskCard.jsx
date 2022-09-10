import React, {useState} from "react";

import PropTypes from 'prop-types';

import { patchDaysToTask } from "../../utils/customTaskRequests";

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

const TaskCard = ({id, imageUrl, title, points, status, modifyBuyList, userBalance}) => {

    const [checkedToggler, setCheckedToggler] = useState(false);
    const [openDaysList, setOpenDaysList] = useState(false);
    const [taskOpenedDaysList, setTaskOpenedDaysList] = useState(false);
    const [checkedDays, setCheckedDays] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]);
    const isDone = false;

    const handleToggler = () => {
        if (userBalance || userBalance === 0) {
            points > userBalance ? setCheckedToggler(false) : setCheckedToggler(true);
        } else {
            setCheckedToggler(!checkedToggler);
        }
        modifyBuyList(id);
    };

    const addDayToTask = () => {
        setOpenDaysList(!openDaysList);
        setTaskOpenedDaysList(!taskOpenedDaysList);

        if (taskOpenedDaysList) {
            patchDaysToTask(id, checkedDays);
        }
    };

    return (
        <CardContainer>
            {
                openDaysList && <CheckboxList setCheckedDays={setCheckedDays} checkedDays={checkedDays} />
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
    modifyBuyList: PropTypes.func,
    userBalance: PropTypes.number
}

export default TaskCard;