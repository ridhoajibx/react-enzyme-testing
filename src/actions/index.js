import { types } from './types';
import axios from 'axios';

export const getPosts = () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    return async (dispatch) => {
        try {
            const res = await axios.get(url)
            const { data, status } = res;
            if (status === 200) {
                await dispatch({ type: types.GET_POSTS, payload: data });
            }
        } catch (error) {
            console.log(error.response)
        }
    };
}