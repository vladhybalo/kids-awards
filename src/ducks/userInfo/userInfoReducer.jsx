import { 
    USER_SIGN_UP,
    USER_SIGN_IN,
    USER_GOOGLE_SIGN_IN,
    USER_REQUEST_ERROR,
    USER_TASK_UPDATED,
    USER_GET_INFO
 } from "./userInfoActions";

const userInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGN_UP:
            return {
                userEmail: action.payload.data.user.email,
                userData: action.payload.data.user,
                token: action.payload.data.token
            };
        case USER_SIGN_IN:
            return {
                userEmail: action.payload.data.user.email,
                userData: action.payload.data.user,
                userWeek: action.payload.data.week,
                token: action.payload.data.token
            };
        case USER_GOOGLE_SIGN_IN:
            return {
                userEmail: action.payload.data.user.email,
                userData: action.payload.user,
                userWeek: action.payload.week,
                token: action.payload.data.token
            };
        case USER_REQUEST_ERROR:
            return {errorMessage: action.payload.message};
        case USER_TASK_UPDATED: 
            
            const userWeek = {...state.userWeek};
            const userData = {...state.userData};

            userData.balance = action.payload.updatedBalance;
            userWeek.rewardsGained = action.payload.updatedBalance;
            
            userWeek.tasks.forEach((task) => {
                if (task._id === action.payload.updatedTask.id) {
                    userWeek.tasks[userWeek.tasks.indexOf(task)].days = action.payload.updatedTask.days;
                }
            })

            return {
                ...state,
                userWeek: userWeek,
                userData: userData
            }

        case USER_GET_INFO:
            return {
                ...state,
                userData: action.payload.user,
                userWeek: action.payload.week
            };
            default:
            return state;
    }
}

export default userInfoReducer;