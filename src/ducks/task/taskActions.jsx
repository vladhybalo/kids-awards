import axios from 'axios';
import store from '../../store';

export const ADD_CUSTOM_TASK = "ADD_CUSTOM_TASK";
export const ADD_TASK_ERROR = "ADD_TASK_ERROR";

export const addCustomTask = (data) => {
    return {
        type: ADD_CUSTOM_TASK,
        payload: data
    }
}

export const userRequestError = (error) => {
    return {
        type: ADD_TASK_ERROR,
        payload: error.data
    }
}

export const postNewTask = (data) => {
    return dispatch => {
        axios
            .post(`https://kidslike-v1-backend.goit.global/task`,
                {
                    title: data.title,
                    reward: data.reward,
                    file: data.url
                },
                {
                headers: {
                    'Authorization': store.getState().userInfo.token,
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                dispatch(addCustomTask(res));
            })
            .catch(error => {
                alert(error.message);
                dispatch(userRequestError(error.message));
            });
    }
}