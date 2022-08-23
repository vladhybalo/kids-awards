import styled, {css} from "styled-components";

import { MAIN_BACKGROUND, DROP_SHADOW_ADD_CARD, CHECKED_TOGGLER } from "../../assets/themes/colors";

export const AddBtn = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${MAIN_BACKGROUND};
    filter: drop-shadow(0px 1px 2px ${DROP_SHADOW_ADD_CARD});
    cursor: pointer;
`;

const Line = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${CHECKED_TOGGLER};
    border-radius: 2px;
`;

export const VerticalLine = styled.span`
    transform: rotate(-90deg);
    ${Line};
    height: 10px;
    width: 2px;
`;

export const HorizontalLine = styled.span`
    ${Line};
    height: 2px;
    width: 10px;
`;