import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./ducks";

import localStorageMiddleware from "./middlewares/localStorageMiddleware";

const getInitialStateToken = () => {
    const userAccess = sessionStorage.getItem('token');

    if (userAccess) {
        return {token: userAccess};
    }
    else {
        return {};
    }
}

const getInitialStore = () => {
    return {
        userInfo: getInitialStateToken(),
        awards: {}
    }
}

export const store = legacy_createStore(
    reducers,
    getInitialStore(),
    composeWithDevTools(applyMiddleware(thunk, localStorageMiddleware))
);

export default store;