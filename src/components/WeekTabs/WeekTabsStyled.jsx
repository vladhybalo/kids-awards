import styled from "styled-components";

import { ORANGE_COLOR_MAIN } from "../../pages/Main/MainStyled";

export const TabsBackground = styled.div`
    background-color: ${ORANGE_COLOR_MAIN};
    height: 100vh;
    width: 229px;

    @media (max-width: 768px){
        height: 70px;
        width: 100%;
    }

    @media (max-width: 400px){
        background-color: white;
        height: fit-content;
    }
`

export const TabsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;
    padding-top: 140px;

    @media (max-width: 768px){
        flex-direction: row;
        gap: 16px;
        align-items: center;
        padding-top: 20px;
        justify-content: center;
    }

    @media (max-width: 700px) {
        gap: 6px;
    }

    @media (max-width: 400px){
        gap: 4px;
    }
`

export const TabsListItem = styled.li`
    width: 181px;
    height: 42px;
    background: rgba(255, 255, 255, ${props => props.isSelected === true ? `1` : `.5`});
    border-radius: 6px 0px 0px 6px;
    cursor: pointer;
    font-family:'Montserrat-700';

    @media (max-width: 768px){
        width: 40px;
        height: 26px;
        border-radius: 4px;
    }

    @media (max-width: 400px){
        width: 35px;
        height: 24px;
        border-radius: 4px;
        background: rgba(255, 188, 51, ${props => props.isSelected === true ? `1` : `.5`});
    }

`
export const DayTitle = styled.span`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const WeekData = styled.span`
    
    display: none;
    padding-right: 5px;
    font-weight: 500;

    @media (max-width: 768px){
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-align: center;
        font-size: 14px;
    }

    @media (max-width: 400px){
        display: none;
    }
    
`
