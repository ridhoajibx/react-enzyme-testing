import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import { middlewares } from "../createStore";
import rootReducer from '../reducers';

const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test="${attr}"]`);
    return wrapper;
}

const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, "props", component.name);
    return propsErr;
}

const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

export { findByTestAtrr, checkProps, testStore }