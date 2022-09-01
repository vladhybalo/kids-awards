import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./ducks";

import localStorageMiddleware from "./middlewares/localStorageMiddleware";

const getCookie = (cookieName) => {
    let cookie = {};

    document.cookie.split(';').forEach(item => {
        let [key, value] = item.split('=');
        cookie[key.trim()] = value;
    })

    return cookie[cookieName];
}

const getInitialStateUserInfo = () => {
    const userInfo = sessionStorage.getItem('userInfo');
    let userAuthorized;

    if (document.cookie.length !== 0) {
        userAuthorized = getCookie('token');
    }

    if (userInfo) {
        return JSON.parse(userInfo);
    }
    else {
        return {token: userAuthorized};
    }
}

const getInitialStore = () => {
    return {
        userInfo: getInitialStateUserInfo(),
        awards: {}
    }
}

export const store = legacy_createStore(
    reducers,
    getInitialStore(),
    composeWithDevTools(applyMiddleware(thunk, localStorageMiddleware))
);

export default store;