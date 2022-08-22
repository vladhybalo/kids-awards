import axios from 'axios';

export const GET_GIFTS = "GET_GIFTS";
export const BUY_GIFTS = "BUY_GIFTS";
export const GIFTS_REQUEST_ERROR = "GIFTS_REQUEST_ERROR";

export const getGifts = (payload) => {
    return {
        type: GET_GIFTS,
        payload
    }
}

export const buyGifts = (payload) => {
    return {
        type: BUY_GIFTS,
        payload
    }
}

export const giftsErrorRequest = (data) => {
    return {
        type: GIFTS_REQUEST_ERROR,
        payload: data
    }
}

export const getGiftsData = (token) => {
    return dispatch => {
        axios
            .get(`https://kidslike-v1-backend.goit.global/gift`, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                dispatch(getGifts(res.data.ruGifts));
            })
            .catch(error => {
                alert(error.message);
                dispatch(giftsErrorRequest(error));
            });
    }
}

export const patchSelectedGifts = (token, data) => {
    return dispatch => {
        axios
            .patch(`https://kidslike-v1-backend.goit.global/gift`,
                {
                    giftIds: data
                },
                {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                dispatch(buyGifts(res.data));
            })
            .catch(error => {
                alert(error.message);
                dispatch(giftsErrorRequest(error));
            });
    }
}