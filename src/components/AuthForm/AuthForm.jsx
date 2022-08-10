import React, { useRef, useState } from "react";

import GoogleSrc from '../../assets/google-symbol.svg';

import {
    AuthFormContainer,
    AuthMainContainer,
    AuthEnterWithGoogle,
    GoogleIcon,
    AuthText,
    InputLabel,
    ErrorStar,
    Input,
    ErrorMsg,
    AuthActionButtons,
    Button
} from "./AuthForm.style";

let formData = {email: null, password: null};

const AuthForm = ({fetchData}) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [validMail, setValidMail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState("");


    const checkEmail = () => {
        const email = emailRef.current.value;

        if (email.length === 0) {
            setEmailErrorMsg("это обязательное поле");
            setValidMail(false);
        }
        else if (email.length > 3) {
            if (!email.match(/[-.\w]+@([\w-]+\.)+[\w-]+/g)) {
                setEmailErrorMsg("неверный формат почты");
                setValidMail(false);
            } else {
                setValidMail(true);
                formData.email = email;
            }
        }
        else {
            setEmailErrorMsg("введите не менее 3 символов");
            setValidMail(false);
        }
    }

    const checkPassword = () => {
        const password = passwordRef.current.value;

        if (password.length === 0) {
            setPasswordErrorMsg("это обязательное поле");
            setValidPassword(false);
        }
        else if (password.length > 8) {
            setValidPassword(true);
            formData.password = password;
        }
        else {
            setPasswordErrorMsg("введите не менее 8 символов");
            setValidPassword(false);
        }
    }

    const checkInputData = (authType) => {
        if (formData.email && formData.password) {
            fetchData(formData, authType);
        }
        else {
            setValidMail(false);
            setValidPassword(false);
        }
    }

    return (
        <AuthFormContainer>
            <AuthMainContainer>
                <AuthText>
                    Вы можете авторизоваться с помощью Google Account:
                </AuthText>
                <AuthEnterWithGoogle>
                    <GoogleIcon src={GoogleSrc} alt="Google Icon" />
                    Google
                </AuthEnterWithGoogle>
                <AuthText>
                    Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
                </AuthText>
                <InputLabel htmlFor="email">
                    <ErrorStar valid={validMail}> * </ErrorStar>
                    E-mail
                </InputLabel>
                <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    ref={emailRef}
                    // onChange={checkEmail}
                    onBlur={checkEmail}
                />
                <ErrorMsg valid={validMail}>
                    {emailErrorMsg}
                </ErrorMsg>
                <InputLabel htmlFor="password">
                    <ErrorStar valid={validPassword}> * </ErrorStar>
                    Пароль
                </InputLabel>
                <Input
                    id="password"
                    type="password"
                    ref={passwordRef}
                    // onChange={checkPassword}
                    onBlur={checkPassword}
                />
                <ErrorMsg valid={validPassword}>
                    {passwordErrorMsg}
                </ErrorMsg>
            </AuthMainContainer>
            <AuthActionButtons>
                <Button onClick={() => checkInputData('login')}>
                    Войти
                </Button>
                <Button onClick={() => checkInputData('register')}>
                    Зарегистрироваться
                </Button>
            </AuthActionButtons>
        </AuthFormContainer>
    )
}

export default AuthForm;