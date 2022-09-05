import React from 'react';
import PropTypes from 'prop-types';

import { AddBtnContainer, VerticalLine, HorizontalLine, SubmitDaysBtn } from "./AddBtn.style";

const AddBtn = ({addNewTaskFlag, addDayToTask, taskOpenedDaysList, createTask}) => {
    return <AddBtnContainer addNewTaskFlag={addNewTaskFlag} onClick={addDayToTask || createTask}>
        {
            !taskOpenedDaysList
            ? <>
                <VerticalLine addNewTaskFlag={addNewTaskFlag} />
                <HorizontalLine addNewTaskFlag={addNewTaskFlag} />
            </>
            : <SubmitDaysBtn> Ok </SubmitDaysBtn>
        }
    </AddBtnContainer>
}

AddBtn.propTypes = {
    addNewTaskFlag: PropTypes.bool,
    addDayToTask: PropTypes.func,
    taskOpenedDaysList: PropTypes.bool,
    createTask: PropTypes.func
}

export default AddBtn;