import axios from 'axios';

export const USER_SIGN_UP = "USER_SIGN_UP";
export const USER_SIGN_IN = "USER_SIGN_IN";

export const userSignUp = (data) => {
    return {
        type: USER_SIGN_UP,
        payload: data.data
    }
}

export const userSignIn = (data) => {
    return {
        type: USER_SIGN_IN,
        payload: data.data
    }
}

export const fetchSignInData = (formData) => {
    return dispatch => {
        axios
            .post(`https://kidslike-v1-backend.goit.global/auth/login`, formData)
            .then(res => {
                alert('Successful logging in');
                dispatch(userSignIn(res));
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }
}

export const fetchSignUpData = (formData) => {
    return dispatch => {
        axios
            .post(`https://kidslike-v1-backend.goit.global/auth/register`, formData)
            .then(res => {
                alert('Successful signing up');
                dispatch(userSignIn(res));
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }
}