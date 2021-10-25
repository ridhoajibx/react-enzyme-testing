import { types } from './types';
import axios from 'axios';

export const getPosts = (type) => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    if (type !== types.GET_POSTS) {
        throw new Error('Wrong API call!');
    }
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