import App from './App';
import { shallow, mount } from "enzyme";
import { findByTestAtrr, testStore } from "./utils";

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    // use mount
    const wrapper = mount(<App store={store} />);
    // const wrapper = shallow(<App store={store} />).childAt(0).dive();
    console.log(wrapper.debug());
    return wrapper;
}

describe('App component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [
                {
                    title: "Example title 1",
                    body: "Some text"
                },
                {
                    title: "Example title 2",
                    body: "Some text"
                },
                {
                    title: "Example title 3",
                    body: "Some text"
                }
            ]
        }
        wrapper = setUp(initialState);
    });

    it('should render without error', () => {
        const component = findByTestAtrr(wrapper, "appComponent");
        expect(component.length).toBe(1);
    });

    // it('handleHideBtn method should updated a state as expected', () => {
    //     // const classInstance = wrapper.instance();
    //     // classInstance.handleHideBtn();
    //     // const newState = classInstance.state.isHide;
    //     // expect(newState).toBe(true);
    // });
    
});