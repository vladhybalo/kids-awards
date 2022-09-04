import { USER_SIGN_IN, USER_SIGN_UP } from "../ducks/userInfo/userInfoActions";

export const localStorageMiddleware = (store) => (next) => (action) =>  {

    next(action);

    if (action.type === USER_SIGN_IN || action.type === USER_SIGN_UP) {
        const token = store.getState().userInfo.token;

        document.cookie = "token" + "=" + encodeURIComponent(token);

        sessionStorage.setItem("userInfo", JSON.stringify(store.getState().userInfo));
    }
};

export default localStorageMiddleware;