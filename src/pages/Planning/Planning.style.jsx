import styled from "styled-components";

import {
    MAIN_DARK,
    MAIN_BACKGROUND,
    TITLES_TEXT_COLOR,
    CHECKED_TOGGLER,
    MOBILE_BOTTOM_PANEL_BACKGROUND
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

    @media (max-width: 990px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 420px) {
        margin-bottom: 32px;
    }
`;

export const CurrentWeek = styled.section`
    display: flex;
    align-items: center;
    color: ${MAIN_DARK};

    @media (max-width: 990px) {
        margin-bottom: 20px;
    }

    @media (max-width: 420px) {
        flex-direction: column;
        margin-bottom: 0;
    }
`;

export const CurrentWeekTitle = styled.p`
    font-family: 'Montserrat-Regular';
    font-size: 18px;
    line-height: 22px;
    margin-right: 10px;

    @media (max-width: 420px) {
        margin-bottom: 8px;
    }
`;

export const CurrentWeekDate = styled.div`
    font-family: 'Montserrat-700';
    letter-spacing: 0.2em;
`;

export const PlannedPoints = styled.p`
    display: flex;
    align-items: center;

    @media (max-width: 990px) {
        margin-bottom: 20px;
    }

    @media (max-width: 420px) {
        display: none;
    }
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

    @media (max-width: 420px) {
        display: none;
    }
`;

export const CreateNewTaskText = styled.p`
    margin-right: 20px;
`;

export const MobileBottomPanel = styled.article`
    display: none;
    height: 58px;
    margin-top: 53px;
    background-color: ${MOBILE_BOTTOM_PANEL_BACKGROUND};
    position: relative;

    @media (max-width: 420px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const PlannedPointsMobile = styled(PlannedPoints)`
    display: flex;
    font-family: 'Montserrat-500';
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${TITLES_TEXT_COLOR};
    margin-bottom: 0;
`;

export const PlannedPointsNumberMobile = styled(PlannedPointsNumber)`
    margin-right: 8px;
    margin-left: 0;
`;

export const CreateNewTaskContainerMobile = styled.div`
    position: absolute;
    top: -13px;
    right: 20px;
    bottom: 17px;
`;