import React from "react";
import PropTypes from 'prop-types';

import Toggler from "../Toggler/Toggler"
import CardStatus from "../CardStatus/CardStatus";
import ChooseDayBtn from "../ChooseDayBtn/ChooseDayBtn";

import { CardStatuses } from "../../config/enums";

const CardDefiner = ({status, handleToggler, addDayToTask, checkedToggler, isDone}) => {

    if (status === CardStatuses.ChooseDayBtn) {
        return <span onClick={addDayToTask}>
                <ChooseDayBtn />
            </span>
    }
    else if (status === CardStatuses.Toggle) {
        return <span onClick={handleToggler}>
                <Toggler checkedToggler={checkedToggler} />
            </span>
    }
    else if (status === CardStatuses.TaskStatus) {
        return <CardStatus isDone={isDone} />
    }
}

CardDefiner.propTypes = {
    status: PropTypes.oneOf(['toggle', 'chooseDayBtn', 'taskStatus']).isRequired,
    handleToggler: PropTypes.func,
    addDayToTask: PropTypes.func,
    checkedToggler: PropTypes.bool,
    isDone: PropTypes.bool
}

export default CardDefiner;