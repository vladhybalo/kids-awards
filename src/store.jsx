import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./ducks";

import localStorageMiddleware from "./middlewares/localStorageMiddleware";

const getInitialStateUserInfo = () => {
    const userInfo = sessionStorage.getItem('userInfo');

    if (userInfo) {
        return JSON.parse(userInfo);
    }
    else {
        return {};
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