import styled from "styled-components";

import {
    MAIN_BACKGROUND,
    DAYS_CHECKLIST_BACKGROUND
} from "../../assets/themes/colors";

export const ChooseDayList = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 28px;
    width: 114px;
    height: 208px;
    background: ${DAYS_CHECKLIST_BACKGROUND};
    border-radius: 6px;
    position: absolute;
    top: -14px;
    right: 0;
    font-family: 'Montserrat-700';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: ${MAIN_BACKGROUND};
`;

export const ChooseDayItemLabel = styled.label`
    display: flex;
    align-items: center;

    :not(:last-child){
        margin-bottom: 12px;
    }
`;

export const ChooseDayItem = styled.input`
    width: 14px;
    height: 14px;
    border: 1px solid ${MAIN_BACKGROUND};
    border-radius: 2px;
    margin-right: 10px;
    content: ${props => (props.isCheckedBox && "url('src/assets/checkbox-check-mark.svg')")};
    background: ${props => (props.isCheckedBox && MAIN_BACKGROUND)};

    :checked {
        content: url('src/assets/checkbox-check-mark.svg');
        background-color: ${MAIN_BACKGROUND};
        padding: 2px 1px;
        box-sizing: border-box;
    }
`;