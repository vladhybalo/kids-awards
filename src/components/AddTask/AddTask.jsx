import React from "react";
import PropTypes from 'prop-types';

import { AddBtn, VerticalLine, HorizontalLine } from "./AddTask.style";

const AddTask = ({ addDayToTask }) => {
    return <AddBtn onClick={addDayToTask}>
        <VerticalLine></VerticalLine>
        <HorizontalLine></HorizontalLine>
    </AddBtn>
}

AddTask.propTypes = {
    addDayToTask: PropTypes.func.isRequired
}

export default AddTask;