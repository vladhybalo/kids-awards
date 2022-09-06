import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./ducks";

import localStorageMiddleware from "./middlewares/localStorageMiddleware";

import getCookie from "./utils/getCookie";

const getInitialStateUserInfo = () => {
    const userInfo = sessionStorage.getItem('userInfo');
    let userToken;

    if (document.cookie.length !== 0) {
        userToken = getCookie('token');
    }

    if (userInfo) {
        return JSON.parse(userInfo);
    }
    else {
        return { token: userToken };
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