import styled from "styled-components";

import Button from "../../components/Button/Button";

import { MAIN_LIGHT, BUTTON_LIGHT_TEXT_COLOR } from "../../assets/themes/colors";

export const SubmitButton = styled(Button)`
    width: 220px;
    height: 48px;

    &:hover {
        box-shadow:
            inset -9.2em 0 0 0 ${BUTTON_LIGHT_TEXT_COLOR},
            inset 9.2em 0 0 0 ${BUTTON_LIGHT_TEXT_COLOR};
        color: ${MAIN_LIGHT};
    }
`;