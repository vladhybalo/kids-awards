import styled from "styled-components";

import { MAIN_LIGHT, MAIN_DARK } from "../../assets/themes/colors";

export const ModalContentWrapper = styled.article`
    padding: 131px 52px 40px;
    box-sizing: border-box;
    max-width: 608px;
`;

export const DesignImage = styled.img`
    position: absolute;
    left: 50%;
    top: -38%;
    transform: translateX(-50%);
`;

export const ModalTitle = styled.h1`
    font-family: 'Montserrat-600';
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: ${MAIN_DARK};
    margin-bottom: 32px;
`;

export const ModalAwardsList = styled.ul`
    display: flex;
`;

export const ModalAwardsItem = styled.li`
    width: 100px;
    margin: 0 auto;

    :not(:last-child){
        margin-right: 24px;
    }
`;

export const ModalAwardImageWrapper = styled.div`
    margin: 0 auto;
    width: 90px;
    height: 90px;
    border: 5px solid ${MAIN_LIGHT};
    border-radius: 50%;
    position: relative;
`;

export const ModalAwardImage = styled.img`
    margin: 0 auto;
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const ModalAwardName = styled.h2`
    font-family: 'Montserrat-700';
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${MAIN_DARK};
    margin-top: 16px;
`;