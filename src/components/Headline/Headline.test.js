import { shallow } from "enzyme";
import { findByTestAtrr } from "../../utils";

import Headline from "./index";

const setUp = (props = {}) => {
    const component = shallow(<Headline  {...props} />);
    return component;
}

describe('Headline Component', () => {
    // const component = shallow(<Headline />);

    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                title: "Test header",
                desc: "Test Description"
            }
            component = setUp(props);
        });

        it('should be rendered property data-test Headline without errors', () => {
            // const wrapper = component.find(`[data-test="Headline"]`);
            // find from attribute data-test
            const wrapper = findByTestAtrr(component, "headline-test")
            expect(wrapper.length).toBe(1);
        });

        it("should be rendered property a title", () => {
            const title = findByTestAtrr(component, "title")
            expect(title.length).toBe(1)
        });

        it("should be rendered property a description", () => {
            const desc = findByTestAtrr(component, "desc")
            expect(desc.length).toBe(1)
        });
    });

    describe("Have no props", () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('should not render', () => {
            // const wrapper = component.find(`[data-test="Headline"]`);
            // find from attribute data-test
            const wrapper = findByTestAtrr(component, "headline-test")
            expect(wrapper.length).toBe(1);
        });
    });

});