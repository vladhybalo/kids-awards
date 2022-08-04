import React, { useState } from "react";

import GoogleSrc from '../../assets/google-symbol.svg';

import {
    AuthFormContainer, AuthMainContainer, AuthEnterWithGoogle, GoogleIcon,
    AuthText, InputLabel, ErrorStar, Input, ErrorMsg, AuthActionButtons, Button
} from "./AuthForm.style";

const AuthForm = ({fetchData}) => {
    let formData = {email: null, password: null};

    const [validMail, setValidMail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    const checkEmail = (e) => {
        const email = e.target.value;

        if (email.length > 3) {
            if (!email.match(/[-.\w]+@([\w-]+\.)+[\w-]+/g)) {
                setValidMail(false);
            } else {
                setValidMail(true);
                formData.email = email;
            }
        } else {
            setValidMail(false);
        }
    }

    const checkPassword = (e) => {
        const password = e.target.value;

        if (password.length > 8) {
            setValidPassword(true);
            formData.password = password;
        } else {
            setValidPassword(false);
        }
    }

    const checkInputData = (authType) => {
        if (formData.email !== null && formData.password !== null) {
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
                <InputLabel>
                    <ErrorStar valid={validMail}> * </ErrorStar>
                    E-mail
                </InputLabel>
                <Input type="email" placeholder="your@email.com" onBlur={checkEmail} />
                <ErrorMsg valid={validMail}>
                    это обязательное поле
                </ErrorMsg>
                <InputLabel>
                    <ErrorStar valid={validPassword}> * </ErrorStar>
                    Пароль
                </InputLabel>
                <Input type="password" onBlur={checkPassword} />
                <ErrorMsg valid={validPassword}>
                    это обязательное поле
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