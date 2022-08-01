import styled from "styled-components";

export const AuthFormContainer = styled.article`
    width: 394px;
    height: 468px;
    padding: 40px;
    background: #fff;
    box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    color: #858598;
`;

export const AuthMainContainer = styled.section`
    font-family: 'Montserrat-400';
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
    margin: 0; //remove after pull reset.jsx
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
    box-sizing: border-box; //remove after pull reset.jsx
    border: none; //remove after pull reset.jsx
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
    margin: 0; //remove after pull reset.jsx
    margin-bottom: 10px;
    color: #EB5757;
`;

export const AuthActionButtons = styled.div`

`;

export const Button = styled.button`
    margin-right: 8px;
    width: 153px;
    height: 48px;
    font-family: 'Montserrat-500';
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
    border: none; //remove after merge reset.jsx
    border-radius: 6px;
    color: #FAFAFA;
    background: #FFBC33;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
    cursor: pointer;
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