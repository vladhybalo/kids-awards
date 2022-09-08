import styled from "styled-components";

import { MAIN_LIGHT, MAIN_DARK } from "../../assets/themes/colors";

export const ModalContentWrapper = styled.article`
    padding: 131px 52px 40px;
    box-sizing: border-box;
    max-width: 608px;
    padding-top: ${props => props.modalHeight ? '59px': '131px' };

    @media (max-width: 610px) {
        padding-left: 28px;
        padding-right: 28px;
        padding-top: 59px;
    }
`;

export const DesignImage = styled.img`
    position: absolute;
    left: 50%;
    top: ${props => props.modalHeight ? '-23%': '-30%'};
    transform: translateX(-50%);
    width: ${props => props.modalHeight && '132px'};
    height: ${props => props.modalHeight && '152px'};

    @media (max-width: 610px) {
        width: 132px;
        height: 152px;
    }

`;

export const ModalTitle = styled.h1`
    font-family: 'Montserrat-600';
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: ${MAIN_DARK};
    margin-bottom: 32px;

    @media (max-width: 610px) {
        font-size: 18px;
        margin-bottom: 24px;
    }

    @media (max-width: 510px) {
        margin-bottom: 10px;
        line-height: normal;
    }
`;

export const ModalAwardsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

export const ModalAwardsItem = styled.li`
    max-width: 100px;
    margin: 0 auto;

    :not(:last-child){
        margin-right: 24px;
    }

    @media (max-width: 510px) {
        margin: 0 auto;

        :not(:last-child){
            margin-right: auto;
        }
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