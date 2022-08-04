import React from "react";

import AuthForm from "../../components/AuthForm";

import Img1 from '../../assets/auth-three-people-image.svg';
import Img2 from '../../assets/auth-games-image.svg';
import Img3 from '../../assets/auth-robot-image.svg';
import Img4 from '../../assets/auth-mother-daughter-image.svg';
import LogoSrc from '../../assets/Logo.svg';

import {
    Auth, AuthBody, Collage, CollageImageWrapper, CollageImage,
    AuthContent, AuthTitle, AuthFooter, AuthFooterItem, Logo
} from "./AuthPage.style";

const AuthPage = () => {
    const fetchData = (formData, authType) => {
        console.log(formData);
        console.log(authType);
    }

    return (
        <Auth>
            <AuthBody>
                <Collage>
                    <CollageImageWrapper>
                        <CollageImage src={Img1} alt="Father and children"/>
                    </CollageImageWrapper>
                    <CollageImageWrapper>
                        <CollageImage src={Img2} alt="Headphones and joystick"/>
                    </CollageImageWrapper>
                    <CollageImageWrapper>
                        <CollageImage src={Img3} alt="Happy Robot"/>
                    </CollageImageWrapper>
                    <CollageImageWrapper>
                        <CollageImage src={Img4} alt="MOther and daughter"/>
                    </CollageImageWrapper>
                </Collage>
                <AuthContent>
                    <AuthTitle>
                        Выполняй задания, получи классные призы!
                    </AuthTitle>
                    <AuthForm fetchData={fetchData} />
                </AuthContent>
            </AuthBody>
            <AuthFooter>
                <AuthFooterItem>
                    KidsLike
                    <Logo src={LogoSrc} alt="Father and children"/>
                </AuthFooterItem>
                <AuthFooterItem>
                    Делаем жизнь родителей и детей изи :)
                </AuthFooterItem>
                <AuthFooterItem>
                    2020
                </AuthFooterItem>
            </AuthFooter>
        </Auth>
    )
}

export default AuthPage;