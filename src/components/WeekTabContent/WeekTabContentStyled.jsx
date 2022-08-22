import styled from "styled-components";

import { GREY_TEXT_COLOR_MAIN } from "../../pages/Main/MainStyled";

export const WeekTabContentWrapper = styled.div`
    padding-top: 32px;
    padding-left: 107px;
    padding-right: 16px;
    
    @media (max-width: 768px){
        padding-top: 40px;
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (max-width: 400px){
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
    
`

export const WeekData = styled.span`
    display: block;
    font-weight: 400;
    font-size: 18px;

    @media (max-width: 768px){
        display: none;
    }

    @media (max-width: 400px){
        display: block;
        text-align: center;
        font-size: 14px;
    }
    
`

export const CurrentDateData = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const DayDataSet = styled.div`
    display: flex;
    gap: 20px;

    
    @media (max-width: 768px){
        justify-content: center;
    }

    @media (max-width: 400px){
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }
`

export const MyTasksText = styled.span`
    font-family: 'Montserrat-500';
    color: ${GREY_TEXT_COLOR_MAIN};
    display: block;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0.04em;

`

export const DayData = styled.span`
    font-family: 'Montserrat-700';
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0.2em;

`