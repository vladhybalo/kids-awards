import React from "react";
import PropTypes from 'prop-types';

import checkedMark from "../../assets/check-mark.svg";
import uncheckedMark from "../../assets/uncheck-mark.svg";

import { Status, StatusIcon } from "./CardStatus.style";

const CardStatus = ({ isDone }) => {
    return <Status isDone={isDone}>
        <StatusIcon src={isDone ? checkedMark : uncheckedMark} />
    </Status>
}

CardStatus.propTypes = {
    isDone: PropTypes.bool.isRequired
}

export default CardStatus;