import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const middlewares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export const store = createStoreWithMiddleware(rootReducer);