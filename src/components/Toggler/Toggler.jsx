import React from "react";
import PropTypes from 'prop-types';

import checkedMark from "../../assets/check-mark.svg";
import uncheckedMark from "../../assets/uncheck-mark.svg";

import {
    TogglerBody,
    TogglerSwitch,
    TogglerCheckedIcon,
    TogglerUnheckedIcon
} from "./Toggler.style";

const Toggler = ({checkedToggler}) => {
    return <TogglerBody selected={checkedToggler}>
            <TogglerSwitch selected={checkedToggler} />
            {
                checkedToggler
                ? <TogglerCheckedIcon src={checkedMark} selected={!checkedToggler} />
                : <TogglerUnheckedIcon src={uncheckedMark} selected={checkedToggler} />
            }
        </TogglerBody>
}

Toggler.propTypes = {
    checkedToggler: PropTypes.bool.isRequired
}

export default Toggler;