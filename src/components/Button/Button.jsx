import styled from "styled-components";

import { MAIN_LIGHT, BUTTON_LIGHT_TEXT_COLOR } from "../../assets/themes/colors";

const Button = styled.button`
    font-family: 'Montserrat-500';
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
    text-align: center;
    border-radius: 6px;
    color: ${BUTTON_LIGHT_TEXT_COLOR};
    background: ${MAIN_LIGHT};
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        box-shadow:
            inset -6.5em 0 0 0 ${BUTTON_LIGHT_TEXT_COLOR},
            inset 6.5em 0 0 0 ${BUTTON_LIGHT_TEXT_COLOR};
        color: ${MAIN_LIGHT};
    }
`;

export default Button;