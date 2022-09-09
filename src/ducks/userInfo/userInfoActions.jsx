import axios from 'axios';

export const USER_SIGN_UP = "USER_SIGN_UP";
export const USER_SIGN_IN = "USER_SIGN_IN";
export const USER_REQUEST_ERROR = "USER_REQUEST_ERROR";
export const USER_GOOGLE_SIGN_IN = "USER_GOOGLE_SIGN_IN";
export const USER_LOGOUT = "USER_LOGOUT";

export const userSignUp = (data) => {
    return {
        type: USER_SIGN_UP,
        payload: data
    }
}

export const userSignIn = (data) => {
    return {
        type: USER_SIGN_IN,
        payload: data
    }
}

export const userRequestError = (error) => {
    return {
        type: USER_REQUEST_ERROR,
        payload: error.data
    }
}

export const userGoogleSignIn = (data) => {
    return {
        type: USER_GOOGLE_SIGN_IN,
        payload: data.data
    }
}

export const userLogout = () => {
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
                dispatch(userRequestError(error.response));
            });
    }
}

export const fetchSignUpData = (formData) => {
    return dispatch => {
        axios
            .post(`https://kidslike-v1-backend.goit.global/auth/register`, formData)
            .then(res => {
                alert('Successful signing up');
                dispatch(userSignUp(res));
            })
            .catch(error => {
                alert(error.response.data.message);
                dispatch(userRequestError(error.response));
            });
    }
}

export const fetchGoogleData = () => {
    return dispatch => {
        axios
            .get(`https://kidslike-v1-backend.goit.global/auth/google`, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(res => {
                alert('Successful signing in');
                dispatch(userGoogleSignIn(res.data));
            })
            .catch(error => {
                alert(error.message);
            });
    }
}

export const fetchLogout = () => {
    return dispatch => {
        axios
            .post(`https://kidslike-v1-backend.goit.global/auth/logout`)
            .then(res => {
                dispatch(userLogout(res));
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }
}