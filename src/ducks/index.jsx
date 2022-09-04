import { combineReducers } from "redux";

import { userInfoReducer } from "./userInfo";
import { giftsReducer } from "./gifts";
import { taskReducer } from "./task";

const reducers = combineReducers ({
    userInfo: userInfoReducer,
    awards: giftsReducer,
    task: taskReducer
});

export default reducers;