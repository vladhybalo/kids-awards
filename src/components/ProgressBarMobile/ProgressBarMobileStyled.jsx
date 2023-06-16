import styled from "styled-components";

import { MAIN_PAGE_GREY_TEXT } from "../../assets/themes/colors";

export const ProgressBarSet = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 400px){
        display: ${props => props.isMobile ? "flex" : "none"};
    }
`
export const ProgressBarInfo = styled.div`
    padding-right: 20px;
`
export const InfoTasksDone = styled.span`
    color: black;
    font-family: 'Montserrat-700';
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
`
export const InfoTasksPlanned = styled.span`
    color: black;
    font-family: 'Montserrat-300';
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
`
export const ProgressBarBackground = styled.div`
    background-color: rgba(224, 224, 224, 1);
    width: 280px;
    height: 6px;
    border-radius: 10px;
    position: relative;

    @media (max-width: 768px){
        width: 265px;
    }

    @media (max-width: 400px){
        width: 148px;
    }
`
export const ProgressBarFiller = styled.div`
    background-color: rgba(158, 203, 68, 1);
    height: 6px;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.width}%;
`

export const MobileProgressBar = styled.div`
    height: 58px;
    width: 100%;
    display: none;
    flex-direction: column;
    gap: 5px;
    background-color: rgba(241, 241, 241, 1);
    padding-top: 12px;
    padding-left: 20px;
    position: relative;

    @media (max-width: 400px){
        display: flex;
    }
`
export const MobileProgressBarTitle = styled.span`
    display: block;
    font-family: 'Montserrat-500';
    color: ${MAIN_PAGE_GREY_TEXT};
    display: block;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0.04em;
    
`
export const ProgressBarButtonCircle = styled.div`
    position: absolute;
    height: 54px;
    width: 54px;
    background: linear-gradient(180deg, #FFB532 0%, #FFD521 100%);
    border-radius: 50%;
    top: -13px;
    right: 20px;
    cursor: pointer;
`

export const ProgressBarButtonCrossLine = styled.div`
    position: absolute;
    top: 25px;
    left: 15px;
    width: 24px;
    border: 2px white solid;
    border-radius: 4px;
    transform: rotate(${props => props.rotate}deg);
`