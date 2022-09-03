import React from 'react';
import PropTypes from 'prop-types';

import { AddBtnContainer, VerticalLine, HorizontalLine } from "./AddBtn.style";

const AddBtn = ({addNewTaskFlag, addDayToTask, createTask}) => {
    return <AddBtnContainer addNewTaskFlag={addNewTaskFlag} onClick={addDayToTask || createTask}>
        <VerticalLine addNewTaskFlag={addNewTaskFlag} />
        <HorizontalLine addNewTaskFlag={addNewTaskFlag} />
    </AddBtnContainer>
}

AddBtn.propTypes = {
    addNewTaskFlag: PropTypes.bool,
    addDayToTask: PropTypes.func,
    createTask: PropTypes.func
}

export default AddBtn;