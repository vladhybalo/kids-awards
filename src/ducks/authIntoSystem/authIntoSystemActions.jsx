export const AUTH_SIGN_UP = "AUTH_SIGN_UP";
export const AUTH_LOGIN = "AUTH_LOGIN";

export const userSignUp = (data) => {
    return {
        type: AUTH_SIGN_UP,
        payload: data.data
    }
}

export const userLogin = (data) => {
    return {
        type: AUTH_LOGIN,
        payload: data.data
    }
}