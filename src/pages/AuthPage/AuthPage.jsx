import React from "react";

import AuthForm from "../../components/AuthForm";

import FatherAndChildrenPNG from '../../assets/img/auth-three-people-image.png';
import FatherAndChildrenWEBP from '../../assets/img/auth-three-people-image.webp';
import FatherAndChildrenAVIF from '../../assets/img/auth-three-people-image.avif';
import GamesPNG from '../../assets/img/auth-games-image.png';
import GamesWEBP from '../../assets/img/auth-games-image.webp';
import GamesAVIF from '../../assets/img/auth-games-image.avif';
import RobotPNG from '../../assets/img/auth-robot-image.png';
import RobotWEBP from '../../assets/img/auth-robot-image.webp';
import RobotAVIF from '../../assets/img/auth-robot-image.avif';
import MotherAndDaughterPNG from '../../assets/img/auth-mother-daughter-image.png';
import MotherAndDaughterWEBP from '../../assets/img/auth-mother-daughter-image.webp';
import MotherAndDaughterAVIF from '../../assets/img/auth-mother-daughter-image.avif';
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
                        <picture>
                            <source srcSet={FatherAndChildrenWEBP} type="image/webp" />
                            <source srcSet={FatherAndChildrenAVIF} type="image/avif" />
                            <CollageImage src={FatherAndChildrenPNG} alt="Father and children"/>
                        </picture>
                    </CollageImageWrapperFamily>
                    <CollageImageWrapperGames>
                        <picture>
                            <source srcSet={GamesWEBP} type="image/webp" />
                            <source srcSet={GamesAVIF} type="image/avif" />
                            <CollageImage src={GamesPNG} alt="Headphones and joystick"/>
                        </picture>
                    </CollageImageWrapperGames>
                    <CollageImageWrapperRobot>
                        <picture>
                            <source srcSet={RobotWEBP} type="image/webp" />
                            <source srcSet={RobotAVIF} type="image/avif" />
                            <CollageImage src={RobotPNG} alt="Happy Robot"/>
                        </picture>
                    </CollageImageWrapperRobot>
                    <CollageImageWrapperGirls>
                        <picture>
                            <source srcSet={MotherAndDaughterWEBP} type="image/webp" />
                            <source srcSet={MotherAndDaughterAVIF} type="image/avif" />
                            <CollageImage src={MotherAndDaughterPNG} alt="Mother and daughter"/>
                        </picture>
                    </CollageImageWrapperGirls>
                </Collage>
                <AuthContent>
                    <AuthTitle>
                        Complete tasks and get cool prizes!
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
                    Making the life of parents and children easy :)
                </AuthFooterItem>
                <AuthFooterItem>
                    2020
                </AuthFooterItem>
            </AuthFooter>
        </Auth>
    )
}

export default AuthPage;