import { combineReducers } from "redux";

import { userInfoReducer } from "./userInfo";

const reducers = combineReducers ({
    userInfo: userInfoReducer
});

export default reducers;