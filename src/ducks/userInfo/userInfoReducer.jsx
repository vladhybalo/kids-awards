import { USER_SIGN_UP, USER_SIGN_IN } from "./userInfoActions";

const userInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGN_UP:
            return {
                userData: action.payload.data.user,
                token: action.payload.data.token
            };
        case USER_SIGN_IN:
            return {
                ...state,
                userData: action.payload.data.user,
                userWeek: action.payload.data.week,
                token: action.payload.data.token
            };
        default:
            return state;
    }
}

export default userInfoReducer;