import axios from 'axios';
import store from "../store";

export const postNewTask = async (data) => {
    try {
        await axios
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
    } catch (error) {
        alert(error);
    }
}

export const patchDaysToTask = async (id, data) => {
    try {
        await axios
            .patch(`https://kidslike-v1-backend.goit.global/task/single-active/${id}`,
                {
                    days: data
                },
                {
                headers: {
                    'Authorization': store.getState().userInfo.token,
                    'Content-Type': 'application/json'
                }
            })
    } catch(error) {
        alert(error);
    }
}