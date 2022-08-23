import React, {useState} from "react";
import PropTypes from 'prop-types';

import CardDefiner from "../CardBtnDefiner/CardBtnDefiner";

import {
    CardContainer,
    CardImageWrapper,
    CardBody,
    CardContent,
    CardName,
    CardPoints
} from "./Card.style";

const Card = ({imageUrl, title, points, status}) => {
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
                <CardDefiner
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

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    status: PropTypes.oneOf(['toggle', 'chooseDayBtn', 'taskStatus']).isRequired
}

export default Card;