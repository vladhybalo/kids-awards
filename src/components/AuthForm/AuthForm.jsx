import React, { useRef, useState } from "react";
import { useStore, useDispatch } from "react-redux";

import { fetchSignInData, fetchSignUpData } from "../../ducks/userInfo";

import translations from "../../config/translations/translations";
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

const formData = {email: null, password: null};

const AuthForm = () => {
    const store = useStore();
    const dispatch = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();

    const [validMail, setValidMail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [bluredMail, setBluredMail] = useState(false);
    const [bluredPassword, setBluredPassword] = useState(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

    const checkEmail = () => {
        const email = emailRef.current.value;

        if (email.length === 0) {
            setEmailErrorMsg(translations['errors.requiredField']);
            setValidMail(false);
        }
        else if (email.length >= 3) {
            if (!email.match(/[-.\w]+@([\w-]+\.)+[\w-]+/g)) {
                setEmailErrorMsg(translations['errors.invalidEmailFormat']);
                setValidMail(false);
            } else {
                setValidMail(true);
                formData.email = email;
            }
        }
        else {
            setEmailErrorMsg(translations['errors.invalidEmailLength']);
            setValidMail(false);
        }
    }

    const checkPassword = () => {
        const password = passwordRef.current.value;

        if (password.length === 0) {
            setPasswordErrorMsg(translations['errors.requiredField']);
            setValidPassword(false);
        }
        else if (password.length >= 8) {
            setValidPassword(true);
            formData.password = password;
        }
        else {
            setPasswordErrorMsg(translations['errors.invalidPaaswordLength']);
            setValidPassword(false);
        }
    }

    const bluredEmailHandler = () => setBluredMail(true);

    const bluredPasswordHandler = () => setBluredPassword(true);

    const checkInputData = (authType) => {
        if (formData.email && formData.password) {
            authType === 'login'? dispatch(fetchSignInData(formData)) : dispatch(fetchSignUpData(formData));
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
                    <ErrorStar valid={validMail}>
                        {bluredMail && '*'}
                    </ErrorStar>
                    E-mail
                </InputLabel>
                <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    ref={emailRef}
                    onChange={checkEmail}
                    onBlur={bluredEmailHandler}
                />
                <ErrorMsg valid={validMail}>
                    {bluredMail && emailErrorMsg}
                </ErrorMsg>
                <InputLabel htmlFor="password">
                    <ErrorStar valid={validPassword}>
                        {bluredPassword && '*'}
                    </ErrorStar>
                    Пароль
                </InputLabel>
                <Input
                    id="password"
                    type="password"
                    ref={passwordRef}
                    onChange={checkPassword}
                    onBlur={bluredPasswordHandler}
                />
                <ErrorMsg valid={validPassword}>
                    {bluredPassword && passwordErrorMsg}
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