import React from "react";

import AuthForm from "../../components/AuthForm";

import { Auth, Collage, AuthContent, AuthTitle, AuthFormWrapper } from "./AuthPage.style";

const AuthPage = () => {
    return (
        <Auth>
            <Collage>

            </Collage>
            <AuthContent>
                <AuthTitle>
                    Выполняй задания, получи классные призы!
                </AuthTitle>
                <AuthFormWrapper>
                    <AuthForm/>
                </AuthFormWrapper>
            </AuthContent>
        </Auth>
    )
}

export default AuthPage;