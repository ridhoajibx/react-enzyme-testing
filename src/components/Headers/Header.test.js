import { shallow } from "enzyme";
import { setUp, findByTestAtrr } from "../../utils";

import Header from "./index";

const setUp = (props = {}) => {
    const component = shallow(<Header  {...props} />);
    return component;
}

describe('Header Component', () => {
    // const component = shallow(<Header />);

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('should be rendered header element without errors', () => {
        // const component = setUp();
        // console.log(component.debug());

        // find tag element
        const wrapper = component.find("header");
        expect(wrapper.length).toBe(1);
    });

    it('should be rendered property data-test header without errors', () => {
        // const wrapper = component.find(`[data-test="header"]`);
        // find from attribute data-test
        const wrapper = findByTestAtrr(component, "header-test")
        expect(wrapper.length).toBe(1);
    });

    it('should be rendered property data-test logo without errors', () => {
        const wrapper = findByTestAtrr(component, "logo-test")
        expect(wrapper.length).toBe(1);
    });
});