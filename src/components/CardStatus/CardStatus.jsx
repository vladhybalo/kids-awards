import React from "react";

import checkedMark from "../../assets/check-mark.svg";
import uncheckedMark from "../../assets/uncheck-mark.svg";

import { Status, StatusIcon } from "./CardStatus.style";

const CardStatus = ({status}) => {
    return <Status status={status}>
        <StatusIcon src={status ? checkedMark : uncheckedMark} />
    </Status>
}

export default CardStatus;