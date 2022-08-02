import { combineReducers } from "redux";

import { testStateReducer } from "./testState/testStateReducer";

const reducers = combineReducers ({
    testState: testStateReducer
});

export default reducers;