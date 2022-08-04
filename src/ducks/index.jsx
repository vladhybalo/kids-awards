import { combineReducers } from "redux";

import { authIntoSystemReducer } from "./authIntoSystem";

const reducers = combineReducers ({
    userInfo: authIntoSystemReducer
});

export default reducers;