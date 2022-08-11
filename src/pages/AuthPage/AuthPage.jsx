import React from "react";

import AuthForm from "../../components/AuthForm";

import FatherAndChildren from '../../assets/img/auth-three-people-image.png';
import Games from '../../assets/img/auth-games-image.png';
import Robot from '../../assets/img/auth-robot-image.png';
import MotherAndDaughter from '../../assets/img/auth-mother-daughter-image.png';
import LogoSrc from '../../assets/logo.svg';

import {
    Auth,
    AuthBody,
    Collage,
    CollageImageWrapperFamily,
    CollageImageWrapperGames,
    CollageImageWrapperRobot,
    CollageImageWrapperGirls,
    CollageImage,
    AuthContent,
    AuthTitle,
    AuthFooter,
    AuthFooterItem,
    Logo
} from "./AuthPage.style";

const AuthPage = () => {
    return (
        <Auth>
            <AuthBody>
                <Collage>
                    <CollageImageWrapperFamily>
                        <CollageImage src={FatherAndChildren} alt="Father and children"/>
                    </CollageImageWrapperFamily>
                    <CollageImageWrapperGames>
                        <CollageImage src={Games} alt="Headphones and joystick"/>
                    </CollageImageWrapperGames>
                    <CollageImageWrapperRobot>
                        <CollageImage src={Robot} alt="Happy Robot"/>
                    </CollageImageWrapperRobot>
                    <CollageImageWrapperGirls>
                        <CollageImage src={MotherAndDaughter} alt="Mother and daughter"/>
                    </CollageImageWrapperGirls>
                </Collage>
                <AuthContent>
                    <AuthTitle>
                        Выполняй задания, получи классные призы!
                    </AuthTitle>
                    <AuthForm />
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