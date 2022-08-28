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

const Toggler = ({handleToggler, checkedToggler}) => {
    return <TogglerBody onClick={handleToggler} selected={checkedToggler}>
            <TogglerSwitch selected={checkedToggler} />
            {
                checkedToggler
                ? <TogglerCheckedIcon src={checkedMark} selected={!checkedToggler} />
                : <TogglerUnheckedIcon src={uncheckedMark} selected={checkedToggler} />
            }
        </TogglerBody>
}

Toggler.propTypes = {
    handleToggler: PropTypes.func.isRequired,
    checkedToggler: PropTypes.bool.isRequired
}

export default Toggler;