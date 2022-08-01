import React from "react";

import GoogleSrc from '../../assets/google-symbol.svg';

import {
    AuthFormContainer, AuthMainContainer, AuthEnterWithGoogle, GoogleIcon, AuthText,
    InputLabel, ErrorStar, Input, Error, AuthActionButtons, Button
} from "./AuthForm.style";

const AuthForm = () => {
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
                    <ErrorStar>*</ErrorStar>
                    E-mail
                </InputLabel>
                <Input type="email" placeholder="your@email.com">

                </Input>
                <Error>
                    это обязательное поле
                </Error>
                <InputLabel>
                    <ErrorStar>*</ErrorStar>
                    Пароль
                </InputLabel>
                <Input type="password">

                </Input>
                <Error>
                    это обязательное поле
                </Error>
            </AuthMainContainer>
            <AuthActionButtons>
                <Button>
                    Войти
                </Button>
                <Button>
                    Зарегистрироваться
                </Button>
            </AuthActionButtons>
        </AuthFormContainer>
    )
}

export default AuthForm;