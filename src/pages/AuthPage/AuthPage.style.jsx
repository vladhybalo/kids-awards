import styled from "styled-components";

import {
    MAIN_BLACK,
    DROP_SHADOW,
    BORDER,
    AUTH_TEXT_COLOR
} from "../../assets/themes/colors";

export const Auth = styled.article`
    color: ${AUTH_TEXT_COLOR};
    font-family: 'Montserrat-Regular';
    position: relative;
`;

export const AuthBody = styled.article`
    display: flex;
    justify-content: space-between;
    margin: 20px 123px 21px 16px;

    @media (max-width: 1150px) {
        margin-right: 50px;
    }

    @media (max-width: 1060px) {
        margin-right: 16px;
    }

    @media (max-width: 800px) {
        flex-direction: column-reverse;
        margin-left: 0;
        margin-right: 0;
    }

    @media (max-width: 320px) {
        margin-bottom: 0;
    }
`;

export const Collage = styled.div`
    position: relative;
    width: 580px;
    height: 745px;

    @media (max-width: 800px) {
        width: 100%;
        height: 239px;
    }
`;

export const CollageImageWrapper = styled.div`
    position: absolute;
    filter: drop-shadow(4px 6px 15px ${DROP_SHADOW});
`;

export const CollageImageWrapperFamily = styled(CollageImageWrapper)`
    width: 372px;
    height: 306px;

    @media (max-width: 800px) {
        width: 301px;
        height: 247px;
        left: 0;
        top: 79px;
    }

    @media (max-width: 412px) {
        width: 301px;
        height: 247px;
        left: 0;
        top: 0;
    }

    @media (max-width: 320px) {
        display: none;
    }
`;

export const CollageImageWrapperGames = styled(CollageImageWrapper)`
    width: 279px;
    height: 264px;
    top: 170px;
    right: 80px;

    @media (max-width: 800px) {
        width: 213px;
        height: 202px;
        top: 43px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }

    @media (max-width: 412px) {
        width: 213px;
        height: 202px;
        left: auto;
        top: auto;
        bottom: 0;
        right: 0;
        transform: translateX(0);
    }

    @media (max-width: 320px) {
        width: 100%;
        height: 100%;
        overflow: hidden;
        top: 0;
    }
`;

export const CollageImageWrapperRobot = styled(CollageImageWrapper)`
    width: 276px;
    height: 219px;
    top: 326px;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const CollageImageWrapperGirls = styled(CollageImageWrapper)`
    width: 359px;
    height: 290px;
    bottom: 0;
    right: 0;

    @media (max-width: 800px) {
        width: 297px;
            height: 239px;
            top: 0;
            right: 0;
    }

    @media (max-width: 412px) {
        display: none;
    }
`;

export const CollageImage = styled.img`
    width: 100%;

    @media (max-width: 320px) {
        transform: scale(1.1);
    }
`;

export const AuthContent = styled.section`
    @media (max-width: 1060px) {
        margin-left: 10px;
    }

    @media (max-width: 800px) {
        margin-bottom: 102px;
        align-self: center;
    }

    @media (max-width: 412px) {
        margin-left: 0;
    }

    @media (max-width: 412px) {
        margin-bottom: 60px;
    }
`;

export const AuthTitle = styled.h1`
    max-width: 403px;
    font-family: 'Montserrat-600';
    font-size: 30px;
    line-height: 37px;
    color: ${MAIN_BLACK};
    margin-top: 40px;
    margin-bottom: 32px;

    @media (max-width: 800px) {
        text-align: center;
        font-size: 28px;
        line-height: 34px;
    }

    @media (max-width: 412px) {
        max-width: 281px;
        margin-left: auto;
        margin-right: auto;
        font-size: 18px;
        line-height: 22px;
    }
`;

export const AuthFooter = styled.ul`
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.08em;
    display: flex;
    position: absolute;
    right: 16px;
    bottom: 40px;
    height: 12px;

    @media (max-width: 800px) {
        justify-content: center;
        width: 100%;
        top: 662px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (max-width: 412px) {
        display: none;
    }
`;

export const AuthFooterItem = styled.li`
    box-sizing: border-box;
    display: flex;

    :not(:first-child) {
        padding-left: 8px;
        border-left: 1px solid ${BORDER};
        margin-left: 8px;
    }
`;

export const Logo = styled.img`
    margin-left: 4px;
    width: 12px;
    height: 12px;
`;