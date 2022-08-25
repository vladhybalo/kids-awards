import styled from "styled-components";

import {
    MAIN_BACKGROUND,
    DROP_SHADOW_TOGGLER,
    CHECKED_TOGGLER,
    UNCHECKED_TOGGLER
} from "../../assets/themes/colors"

export const TogglerBody = styled.div`
    position: relative;
    width: 40px;
    height: 18px;
    border-radius: 9px;
    padding-top: 2px;
    padding-bottom: 2px;
    background: ${props => props.selected ? CHECKED_TOGGLER : UNCHECKED_TOGGLER};
    cursor: pointer;
    transition: background 0.5s;
`;

export const TogglerSwitch = styled.div`
    position: absolute;
    background-color: ${MAIN_BACKGROUND};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    box-shadow: 0px 1px 1px ${DROP_SHADOW_TOGGLER};
    left: ${props => props.selected ? '23px': '3px'};
    transition: left 0.5s;
`;

export const TogglerCheckedIcon = styled.img`
    position: absolute;
    height: 8px;
    width: 10px;
    left: 7px;
    top: 50%;
    transform: translateY(-50%);
`;

export const TogglerUnheckedIcon = styled.img`
    position: absolute;
    height: 13px;
    width: 5px;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`;