import { combineReducers } from "redux";

import { userInfoReducer } from "./userInfo";
import { giftsReducer } from "./gifts";

const reducers = combineReducers ({
    userInfo: userInfoReducer,
    awards: giftsReducer
});

export default reducers;