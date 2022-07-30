import { legacy_createStore, applyMiddleware } from "redux";
import localStorageMiddleware from "../middleware/localStorageMiddleWare";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from ".";

const getInitialStore = () => {
    return {
        testState: {}
    }
}

export const store = legacy_createStore(
    reducers,
    getInitialStore(),
    composeWithDevTools(applyMiddleware(localStorageMiddleware))
);

export default store;