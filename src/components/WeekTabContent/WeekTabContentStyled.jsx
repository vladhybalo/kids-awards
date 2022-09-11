import styled from "styled-components";

import { MAIN_PAGE_GREY_TEXT, MAIN_LIGHT } from "../../assets/themes/colors"

import kidsImg from "./assets/kids.png";

export const WeekTabContentWrapper = styled.div`
    padding-top: 32px;
    padding-left: 107px;
    padding-right: 16px;
    width: 100%;

    background-image: ${props => props.isTasksPresent ? `none` : `url(${kidsImg})`};
    background-repeat: no-repeat; 
    background-position: bottom;
    background-size: contain;
    
    @media (min-width: 1278px){
        background-size: contain;
    }

    @media (max-width: 768px){
        padding-top: 40px;
        padding-left: 32px;
        padding-right: 32px;
        flex-grow: 1;
    }

    @media (max-width: 400px){
        padding-top: 20px;
        padding-left: 0;
        padding-right: 0;
        background-size: contain;
    }
`

export const WeekInfoHeader = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1000px){
        flex-direction: column-reverse;
        gap: 20px;
    }

    @media (max-width: 768px){
        flex-direction: column-reverse;
        gap: 20px;
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

    @media (max-width: 1000px){
        align-items: center;
        gap: 15px;
    }
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
    color: ${MAIN_PAGE_GREY_TEXT};
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

    @media (max-width: 400px){
        padding-bottom: 20px;
    }
`

export const CurrentTasksArea = styled.div`
    padding-top: 40px;

    @media (max-width: 400px){
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 0;
    }
`

export const NoTasksScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const NoTasksScreenText = styled.span`
    padding-top: 90px;
    font-family: 'Montserrat-700';
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0.04em;
    text-align: center;

    @media (max-width: 400px){
        padding-top: 60px;
    }
`
export const NoTasksScreenPlanBtn = styled.button`
    margin-top: 20px;
    background-color: ${MAIN_LIGHT};
    color: white;
    width: 220px;
    height: 48px;
    border-radius: 6px;
    font-family: 'Montserrat-500';
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 3px 12px -6px rgba(0,0,0,0.51);
`