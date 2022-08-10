import axios from 'axios';

export const USER_SIGN_UP = "USER_SIGN_UP";
export const USER_LOG_IN = "USER_LOG_IN";

export const userSignUp = (data) => {
    return {
        type: USER_SIGN_UP,
        payload: data.data
    }
}

export const userLogIn = (data) => {
    return {
        type: USER_LOG_IN,
        payload: data.data
    }
}

export const fetchLoginData = (formData) => {
    return dispatch => {
        axios
            .post(`https://kidslike-v1-backend.goit.global/auth/login`, formData)
            .then(res => {
                alert('Successful logging in');
                dispatch(userLogIn(res));
            });
    }
}

export const fetchSignUpData = (formData) => {
    return dispatch => {
        axios
            .post(`https://kidslike-v1-backend.goit.global/auth/register`, formData)
            .then(res => {
                alert('Successful signing up');
                dispatch(userLogIn(res));
            });
    }
}