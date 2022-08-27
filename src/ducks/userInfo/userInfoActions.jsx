import axios from 'axios';

export const USER_SIGN_UP = "USER_SIGN_UP";
export const USER_SIGN_IN = "USER_SIGN_IN";
export const USER_LOGOUT = "USER_LOGOUT";

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
export const userLogOut = () => {
    return {
        type: USER_LOGOUT,
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

export const fetchSignUpData = () => {
    return dispatch => {
        axios
            .post(`https://kidslike-v1-backend.goit.global/auth/register`, formData)
            .then(res => {
                alert('Successful signing up');
                dispatch(userSignUp(res));
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }
}

export const fetchLogOut = () => {
    return dispatch => {
        axios
            .post(`https://kidslike-v1-backend.goit.global/auth/logout`)
            .then(res => {
                dispatch(userLogOut(res));
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }
}