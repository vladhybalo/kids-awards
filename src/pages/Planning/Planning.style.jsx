import styled from "styled-components";

import {
    MAIN_DARK,
    MAIN_BACKGROUND,
    TITLES_TEXT_COLOR,
    CHECKED_TOGGLER
} from "../../assets/themes/colors";

export const PlanningContainer = styled.article`
    padding-left: 16px;
    padding-right: 16px;
`;

export const TitleBlock = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Montserrat-500';
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.04em;
    color: ${TITLES_TEXT_COLOR};
    margin-bottom: 40px;
`;

export const CurrentWeek = styled.section`
    display: flex;
    align-items: center;
    color: ${MAIN_DARK};
`;

export const CurrentWeekTitle = styled.p`
    font-family: 'Montserrat-Regular';
    font-size: 18px;
    line-height: 22px;
    margin-right: 10px;
`;

export const CurrentWeekDate = styled.div`
    font-family: 'Montserrat-700';
    letter-spacing: 0.2em;
`;

export const PlannedPoints = styled.p`
    display: flex;
    align-items: center;
`;

export const PlannedPointsNumber = styled.span`
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: ${CHECKED_TOGGLER};
    border-radius: 50%;
    margin-right: 5px;
    margin-left: 5px;
    text-align: center;
    padding-top: 6px;

    font-family: 'Montserrat-700';
    font-size: 14px;
    line-height: 17px;
    color: ${MAIN_BACKGROUND};
`;

export const CreateNewTaskContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const CreateNewTaskText = styled.p`
    margin-right: 20px;
`;