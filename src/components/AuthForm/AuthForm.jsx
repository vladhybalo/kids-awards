import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchSignInData, fetchSignUpData, fetchGoogleData } from "../../ducks/userInfo";

import Spinner from "../Spinner/Spinner";

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

const formData = { email: null, password: null };

const AuthForm = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.userInfo);

    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const [isLoading, setFetchLoading] = useState(false);
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
            setPasswordErrorMsg(translations['errors.invalidPasswordLength']);
            setValidPassword(false);
        }
    }

    const bluredEmailHandler = () => setBluredMail(true);

    const bluredPasswordHandler = () => setBluredPassword(true);

    const checkInputData = (authType) => {
        if (formData.email && formData.password) {
            setFetchLoading(true);
            authType === 'login' ? dispatch(fetchSignInData(formData)) : dispatch(fetchSignUpData(formData));
        }
        else {
            setValidMail(false);
            setValidPassword(false);
        }
    }

    const authByGoogle = () => {
        dispatch(fetchGoogleData());
    }

    useEffect(() => {
        setFetchLoading(false);
        if (userInfo.userData) {
            navigate('/home');
        }
    }, [userInfo])

    return (
        <AuthFormContainer>
            {isLoading ? <Spinner></Spinner> :
                <>
                    <AuthMainContainer>
                        <AuthText>
                            You can sign in with your Google Account:
                        </AuthText>
                        <AuthEnterWithGoogle onClick={() => authByGoogle()}>
                            <GoogleIcon src={GoogleSrc} alt="Google Icon" />
                            Google
                        </AuthEnterWithGoogle>
                        <AuthText>
                            Or sign in using e-mail and password after registering:
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
                            Password
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
                            Sign in
                        </Button>
                        <Button onClick={() => checkInputData('register')}>
                            Sign up
                        </Button>
                    </AuthActionButtons>
                </>}
        </AuthFormContainer>
    )
}

export default AuthForm;