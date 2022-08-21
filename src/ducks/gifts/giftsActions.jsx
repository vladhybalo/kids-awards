import axios from 'axios';

export const GET_GIFTS = "GET_GIFTS";
export const BUY_GIFTS = "BUY_GIFTS";
export const GIFTS_ERROR_REQUEST = "GIFTS_ERROR_REQUEST";

export const getGifts = (data) => {
    return {
        type: GET_GIFTS,
        payload: data.ruGifts
    }
}

export const buyGifts = (data) => {
    return {
        type: BUY_GIFTS,
        payload: data
    }
}

export const giftsErrorRequest = (data) => {
    return {
        type: GIFTS_ERROR_REQUEST,
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
                dispatch(getGifts(res.data));
            })
            .catch(error => {
                alert(error.message);
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