import styled from "styled-components";

import {
    MAIN_LIGHT,
    MAIN_DARK,
    MAIN_BACKGROUND
} from "../../assets/themes/colors";

export const AddCustomTaskModal = styled.article`
    position: relative;
    z-index: 1;
`;

export const AddImageWrapper = styled.div`
    height: 131px;
    position: relative;
`;

export const AddImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.uploadedImage
        ? `url(${props.uploadedImage}) no-repeat center`
        : `url(${props.defaultTaskImage}) no-repeat center`};
    background-size: contain;
`;

export const AddImageLabel = styled.label`
    background: ${props => `url(${props.addImgIcon}) no-repeat`};
    width: 20px;
    height: 20px;
    position: absolute;
    right: 16px;
    bottom: 16px;
    cursor: pointer;
`;

export const AddInfoContainer = styled.div`
    height: 100%;
    background-color: ${MAIN_LIGHT};
    padding: 20px 27px 32px;
    box-sizing: border-box;
    border-radius: 0px 0px 6px 6px;
`;

export const AddTaskForm = styled.article`
    display: flex;
    flex-direction: column;
`;

export const AddTaskInputWrapper = styled.div`
    border-bottom: 1px solid ${MAIN_BACKGROUND};
    padding: 7px 0;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

export const AddTaskInputIcon = styled.img`
    margin-right: 3px;
`;

export const AddTaskInput = styled.input`
    font-family: 'Montserrat-Italic';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${MAIN_BACKGROUND};
    width: 100%;
`;

export const SubmitBtn = styled.div`
    width: 60px;
    margin: 0 auto;
    margin-top: 10px;
    padding: 6px 10px;
    font-family: 'Montserrat-700';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${MAIN_DARK};
    text-align: center;
    background: ${MAIN_BACKGROUND};
    border-radius: 4px;
    cursor: pointer;
`;