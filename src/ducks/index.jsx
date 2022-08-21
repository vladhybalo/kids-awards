import { combineReducers } from "redux";

import { userInfoReducer } from "./userInfo";
import { giftsReducer } from "./gifts";

const reducers = combineReducers ({
    userInfo: userInfoReducer,
    gifts: giftsReducer
});

export default reducers;