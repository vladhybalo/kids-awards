import React from "react";

import checkedMark from "../../assets/check-mark.svg";
import uncheckedMark from "../../assets/uncheck-mark.svg";

import {
    TogglerBody,
    TogglerSwitch,
    TogglerCheckedIcon,
    TogglerUnheckedIcon
} from "./Toggler.style";

const Toggler = ({selected}) => {
    return <TogglerBody selected={selected}>
            <TogglerSwitch selected={selected} />
            {
                selected
                ? <TogglerCheckedIcon src={checkedMark} selected={!selected} />
                : <TogglerUnheckedIcon src={uncheckedMark} selected={selected} />
            }
        </TogglerBody>
}

export default Toggler;