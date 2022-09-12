import styled, {css} from "styled-components";

import { MAIN_BACKGROUND, DROP_SHADOW_ADD_TASK, CHECKED_TOGGLER } from "../../assets/themes/colors";

export const AddBtnContainer = styled.div`
    position: relative;
    width: ${props => props.addNewTaskFlag ? '54px' : '30px'};
    height: ${props => props.addNewTaskFlag ? '54px' : '30px'};
    border-radius: 50%;
    background: ${props => props.addNewTaskFlag ? 'linear-gradient(180deg, #FFB532 0%, #FFD521 100%)' : MAIN_BACKGROUND};
    filter: drop-shadow(0px 1px 2px ${DROP_SHADOW_ADD_TASK});
    cursor: pointer;
`;

const Line = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.addNewTaskFlag ? MAIN_BACKGROUND : CHECKED_TOGGLER};
    border-radius: 2px;
`;

export const VerticalLine = styled.span`
    transform: rotate(-90deg);
    ${Line};
    height: ${props => props.addNewTaskFlag ? '18px' : '10px'};
    width: ${props => props.addNewTaskFlag ? '4px' : '2px'};
`;

export const HorizontalLine = styled.span`
    ${Line};
    height: ${props => props.addNewTaskFlag ? '4px' : '2px'};
    width: ${props => props.addNewTaskFlag ? '18px' : '10px'};
`;

export const SubmitDaysBtn = styled.p`
    display: block;
    position: absolute;
    font-family: 'Montserrat-700';
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.04em;
    text-align: center;
    text-transform: uppercase;
    color: ${CHECKED_TOGGLER};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;