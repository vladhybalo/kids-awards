export const INIT_TEST_STATE = "INIT_TEST_STATE";
export const ADD_TEST_VALUE = "ADD_TEST_VALUE"

export const initStateValue = (initState) => {
    return {
        type: INIT_TEST_STATE,
        payload: [initState]
    }
}

export const addStateValue = (value) => {
    return {
        type: ADD_TEST_VALUE,
        payload: value
    }
}