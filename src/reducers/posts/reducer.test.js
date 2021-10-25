import { types } from "../../actions/types";
import postReducer from "./reducer"

describe("Post reducer", () => {
    it('should return state', () => {
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should return new state if receiving new types', () => {
        const posts = [{ title: "post 1" }, { title: "post 2" }, { title: "post 3" }]
        const newState = postReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });
});