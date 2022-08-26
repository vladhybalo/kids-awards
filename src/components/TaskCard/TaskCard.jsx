import React, {useState} from "react";
import PropTypes from 'prop-types';

import CardBtn from "../CardBtn/CardBtn";

import { CardBtnTypes } from "../../config/enums";

import {
    CardContainer,
    CardImageWrapper,
    CardBody,
    CardContent,
    CardName,
    CardPoints
} from "./TaskCard.style";

const TaskCard = ({imageUrl, title, points, status}) => {
    /* rows 17 - 22 for change or remove */
    const [checkedToggler, setCheckedToggler] = useState(false);
    const isDone = false;

    const handleToggler = () => setCheckedToggler(!checkedToggler);

    const addDayToTask = () => {};

    return (
        <CardContainer>
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
                    checkedToggler={checkedToggler}
                    isDone={isDone}
                />
            </CardBody>
        </CardContainer>
    );
}

TaskCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    status: PropTypes.oneOf([CardBtnTypes.ADD, CardBtnTypes.TOGGLE, CardBtnTypes.TASK_EXPIRED]).isRequired
}

export default TaskCard;