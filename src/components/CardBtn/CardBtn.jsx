import React from "react";
// import PropTypes from 'prop-types';

import Toggler from "../Toggler/Toggler"
import CardStatus from "../CardStatus/CardStatus";
import AddTask from "../AddTask/AddTask";

import { CardBtnTypes } from "../../config/enums";

const CardBtn = ({ status, handleToggler, addDayToTask, checkedToggler, isDone }) => {

    if (status === CardBtnTypes.ADD) {
        return <AddTask addDayToTask={addDayToTask} />
    }
    else if (status === CardBtnTypes.TOGGLE) {
        return <Toggler handleToggler={handleToggler} checkedToggler={checkedToggler} />
    }
    else if (status === CardBtnTypes.TASK_EXPIRED) {
        return <CardStatus isDone={isDone} />
    }
}

CardBtn.propTypes = {
    // status: PropTypes.oneOf([CardBtnTypes.ADD, CardBtnTypes.TOGGLE, CardBtnTypes.TASK_EXPIRED]).isRequired,
    // handleToggler: PropTypes.func.isRequired,
    // addDayToTask: PropTypes.func.isRequired,
    // checkedToggler: PropTypes.bool,
    // isDone: PropTypes.bool
}

export default CardBtn;