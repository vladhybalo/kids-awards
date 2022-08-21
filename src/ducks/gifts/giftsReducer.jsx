import { GET_GIFTS, BUY_GIFTS, GIFTS_ERROR_REQUEST } from "./giftsActions";

const giftsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_GIFTS:
            return {
                gifts: action.payload
            };
        case BUY_GIFTS:
            return {...state, purchasedGifts: action.payload};
        case GIFTS_ERROR_REQUEST:
            return {...state, errorMessage: action.payload.message};
        default:
            return state;
    }
}

export default giftsReducer;