import styled from "styled-components";

import {
    MAIN_LIGHT,
    MAIN_DARK,
    MAIN_BACKGROUND,
    ERROR,
    DROP_SHADOW,
    TITLES_TEXT_COLOR,
    INPUT_BACKGROUND,
    BUTTON_LIGHT_TEXT_COLOR
} from "../../assets/themes/colors";

export const AuthFormContainer = styled.article`
    width: 394px;
    height: 468px;
    padding: 40px;
    background: ${MAIN_BACKGROUND};
    box-shadow: 4px 6px 15px ${DROP_SHADOW};
    border-radius: 6px;

    @media (max-width: 412px) {
        box-shadow: none;
        padding: 0 20px;
        width: 100%;
        height: auto;
    }

    @media (max-width: 310px) {
        padding: 0 10px;
    }
`;

export const AuthMainContainer = styled.section`
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.04em;
`;

export const GoogleIcon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 10px;
`;

export const AuthText = styled.p`
    margin-bottom: 20px;
`;

export const InputLabel = styled.label`
    display: block;
    margin-bottom: 8px;
`;

export const Input = styled.input`
    margin-bottom: 2px;
    padding: 12px 8px;
    height: 42px;
    width: 100%;
    color: ${MAIN_DARK};
    background: ${INPUT_BACKGROUND};
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.15);
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;

    ::placeholder{
        color: ${TITLES_TEXT_COLOR};
    }
`;

export const ErrorStar = styled.span`
    display: ${props => props.valid && 'none'};
    color: ${props => !props.valid && ERROR};
`;

export const ErrorMsg = styled.p`
    visibility: ${props => props.valid && 'hidden'};
    color: ${props => !props.valid && ERROR};
    height: 12px;
    margin-bottom: 10px;
`;

export const AuthActionButtons = styled.div`
    display: flex;

    @media (max-width: 412px) {
        justify-content: center;
    }
`;

export const Button = styled.button`
    width: 153px;
    height: 48px;
    font-family: 'Montserrat-500';
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
    text-align: center;
    border-radius: 6px;
    color: ${BUTTON_LIGHT_TEXT_COLOR};
    background: ${MAIN_LIGHT};
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
    cursor: pointer;

    transition: 0.25s;

    &:not(:last-child) {
        margin-right: 8px;
    }

    &:hover {
        box-shadow:
            inset -6.5em 0 0 0 ${BUTTON_LIGHT_TEXT_COLOR},
            inset 6.5em 0 0 0 ${BUTTON_LIGHT_TEXT_COLOR};
        color: ${MAIN_LIGHT};
    }

    @media (max-width: 412px) {
        width: 135px;
        height: 48px;
    }
`;

export const AuthEnterWithGoogle = styled(Button)`
    margin-bottom: 20px;
    width: 150px;
    height: 42px;
    font-size: 14px;
    line-height: 17px;
    color: ${MAIN_DARK};
    background: ${INPUT_BACKGROUND};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        box-shadow:
            inset -6.5em 0 0 0 ${MAIN_LIGHT},
            inset 6.5em 0 0 0 ${MAIN_LIGHT};
        color: ${BUTTON_LIGHT_TEXT_COLOR};
    }
`;