import { ADD_TEST_VALUE, INIT_TEST_STATE } from "./testStateActions";

export const testStateReducer = (state = {}, action) => {
    
    switch (action.type) {
        case INIT_TEST_STATE:
            console.log("INIT_TEST_STATE");
            return {
                testValue: action.payload
            };
        case ADD_TEST_VALUE:
            console.log("ADD_TEST_VALUE");
            return {...state, testValue: state.testValue.concat(action.payload)};
        default:
            return state;
    }
}

export default testStateReducer;
