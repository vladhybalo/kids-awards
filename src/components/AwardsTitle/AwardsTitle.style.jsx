import styled from "styled-components";

import { MAIN_DARK } from "../../assets/themes/colors";

export const AwardsTitleContainer = styled.article`
    display: flex;
`;

export const AwardsIcon = styled.img`
    width: 26px;
    height: 26px;
    margin-right: 14px;
`;

export const AwardsHeader = styled.h1`
    font-family: 'Montserrat-700';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${MAIN_DARK};
    align-self: end;
`;