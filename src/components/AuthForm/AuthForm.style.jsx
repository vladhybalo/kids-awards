import styled from "styled-components";

export const AuthFormContainer = styled.article`
    width: 394px;
    height: 468px;
    padding: 40px;
    background: #fff;
    box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
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
    color: #000;
    background: #F6F7FB;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.15);
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;

    ::placeholder{
        color: #A6ABB9;
    }
`;

export const ErrorStar = styled.span`
    color: #EB5757;
`;

export const Error = styled.p`
    margin-bottom: 10px;
    color: #EB5757;
    height: 12px;
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
    color: #FAFAFA;
    background: #FFBC33;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 8px;
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
    color: #000;
    background: #F6F7FB;
    display: flex;
    align-items: center;
    justify-content: center;
`;