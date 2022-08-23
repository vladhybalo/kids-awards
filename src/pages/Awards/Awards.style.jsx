import styled from "styled-components";

import Button from "../../components/Button/Button";

import { MAIN_LIGHT, BUTTON_LIGHT_TEXT_COLOR } from "../../assets/themes/colors";

export const AwardsContainer = styled.article`
    margin-left: 16px;
    margin-right: 16px;
`;

export const AwardsCardsContainer = styled.ul`
    margin-top: 40px;
    margin-bottom: 60px;
`;

export const ImproviseCard = styled.li`
`;

export const SubmitButton = styled(Button)`
    width: 220px;
    height: 48px;
    display: block;
    margin: 0 auto;
    margin-bottom: 13px;

    &:hover {
        box-shadow:
            inset -9.2em 0 0 0 ${BUTTON_LIGHT_TEXT_COLOR},
            inset 9.2em 0 0 0 ${BUTTON_LIGHT_TEXT_COLOR};
        color: ${MAIN_LIGHT};
    }
`;

export const Checkbox = styled.a`
    cursor: pointer;
    margin: 0;
`;