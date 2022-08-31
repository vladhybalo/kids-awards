import styled from "styled-components";

import { ORANGE_COLOR_MAIN } from "../../pages/Main/MainStyled";

export const TabsBackground = styled.div`
    background-color: ${ORANGE_COLOR_MAIN};
    height: 100vh;
    min-width: 229px;
    position: sticky;
    top: 0;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: 768px){
        height: 70px;
        width: 100%;
        position: static;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 650px) {
        height: fit-content;
        padding-bottom: 20px;
    }

    @media (max-width: 400px){
        background-color: white;
        height: fit-content;
        padding-bottom: 0;
    }
`

export const TabsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 768px){
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    @media (max-width: 650px) {
        padding-top: 20px;
        flex-direction: column;
        padding-bottom: 0;
    }
`

export const DaysWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: row;
        gap: 16px;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 700px) {
        
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

export const FullDayTitle = styled.span`
    display: block;
    @media (max-width: 768px){
        display: none;
    }
    
`

export const ShortDayTitle = styled.span`
    display: none;
    @media (max-width: 768px){
        display: block;
    }
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
