import { ADD_CUSTOM_TASK, ADD_TASK_ERROR, ADD_DAYS_TO_TASK } from "./taskActions";

const taskReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CUSTOM_TASK:
            return state;
        case ADD_DAYS_TO_TASK:
            return state;
        case ADD_TASK_ERROR:
            return state;
        default:
            return state;
    }
}

export default taskReducer;