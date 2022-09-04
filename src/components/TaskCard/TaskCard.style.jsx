import styled from "styled-components";

import {
    MAIN_LIGHT,
    MAIN_DARK,
    MAIN_BACKGROUND,
    AWARD_POINTS_BACKGROUND,
    DROP_SHADOW
} from "../../assets/themes/colors";

export const CardContainer = styled.article`
    height: 263px;
    width: 288px;
    border-radius: 6px;
    background: ${MAIN_BACKGROUND};
    filter: drop-shadow(4px 6px 15px ${DROP_SHADOW});

    @media (max-width: 656px) {
        width: 366px;
    }
`;

export const CardImageWrapper = styled.div`
    text-align: center;
    height: 194px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardBody = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    box-sizing: border-box;
    background-color: ${MAIN_LIGHT};
    border-radius: 0 0 6px 6px;
    height: 69px;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    letter-spacing: 0.04em;
    text-transform: uppercase;
`;

export const CardName = styled.h1`
    font-family: 'Montserrat-700';
    font-size: 12px;
    color: ${MAIN_DARK};
    margin-bottom: 4px;
`;

export const CardPoints = styled.p`
    padding: 3px 10px;
    width: fit-content;
    box-sizing: border-box;
    background: ${AWARD_POINTS_BACKGROUND};
    border-radius: 3px;
    font-family: 'Montserrat-500';
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: ${MAIN_BACKGROUND};
`;