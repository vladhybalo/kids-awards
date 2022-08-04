import { AUTH_SIGN_UP, AUTH_LOGIN } from "./authIntoSystemActions";

const authIntoSystemReducer = (state = {}, action) => {
    switch (action.type) {
        case AUTH_SIGN_UP:
            return {
                userData: action.payload.user
            };
        case AUTH_LOGIN:
            return {...state, userData: action.payload.user, userWeek: action.payload.week};
        default:
            return state;
    }
}

export default authIntoSystemReducer;