import { USER_SIGN_UP, USER_LOG_IN } from "./userInfoActions";

const userInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGN_UP:
            return {
                userData: action.payload.user
            };
        case USER_LOG_IN:
            return {...state, userData: action.payload.user, userWeek: action.payload.week};
        default:
            return state;
    }
}

export default userInfoReducer;