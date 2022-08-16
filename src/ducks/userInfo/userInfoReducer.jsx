import { USER_SIGN_UP, USER_SIGN_IN, USER_GOOGLE_SIGN_IN } from "./userInfoActions";

const userInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGN_UP:
            return {
                userData: action.payload.user
            };
        case USER_SIGN_IN:
            return {...state, userData: action.payload.user, userWeek: action.payload.week};
        case USER_GOOGLE_SIGN_IN:
            return {...state, userData: action.payload.user, userWeek: action.payload.week};
        default:
            return state;
    }
}

export default userInfoReducer;