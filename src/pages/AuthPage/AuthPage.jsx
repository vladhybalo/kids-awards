import React from "react";
import { useStore, useDispatch } from "react-redux";
import axios from 'axios';

import { userSignUp, userLogin } from "../../ducks/authIntoSystem";

import AuthForm from "../../components/AuthForm";

import Img1 from '../../assets/auth-three-people-image.svg';
import Img2 from '../../assets/auth-games-image.svg';
import Img3 from '../../assets/auth-robot-image.svg';
import Img4 from '../../assets/auth-mother-daughter-image.svg';
import LogoSrc from '../../assets/logo.svg';

import {
    Auth, AuthBody, Collage, CollageImageWrapper, CollageImage,
    AuthContent, AuthTitle, AuthFooter, AuthFooterItem, Logo
} from "./AuthPage.style";

const AuthPage = () => {
    const store = useStore();
    const dispatch = useDispatch();

    const fetchData = (formData, authType) => {
        switch (authType) {
            case "login":
                return axios.post(`https://kidslike-v1-backend.goit.global/auth/login`, formData)
                .then(res => {
                    dispatch(userLogin(res));
                })
            case "register":
                return axios.post(`https://kidslike-v1-backend.goit.global/auth/register`, formData)
                .then(res => {
                    dispatch(userSignUp(res));
                })
            default:
                return;
        }
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
                        <CollageImage src={Img4} alt="Mother and daughter"/>
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