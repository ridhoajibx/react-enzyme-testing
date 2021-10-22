import { shallow } from "enzyme";
import App from "./App";

describe("App Component", () => {
    it('App has one component', () => {
        const component = shallow(<App />);
        const wrapper = component.find(".App");
        expect(wrapper.length).toBe(1);
    });
});