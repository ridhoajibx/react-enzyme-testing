import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../utils";
import ListItem from "./index";

describe('Component List items', () => {
    describe('Checking proptypes', ()=> {
        it('Should not throw a warning', ()=> {
            const expectedProps = {
                title: "Example title",
                desc: "Example description",
            }

            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders', ()=> {
        let wrapper;
        beforeEach(()=> {
            const props = {
                title: "Example title",
                desc: "Example description",
            }
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Should render a List items', () => {
            const list = findByTestAtrr(wrapper, 'listItemsComponent');
            expect(list.length).toBe(1)
        });

        it('Should render a title', () => {
            const title = findByTestAtrr(wrapper, 'titleComponent');
            expect(title.length).toBe(1)
        });

        it('Should render a description', () => {
            const desc = findByTestAtrr(wrapper, 'descComponent');
            expect(desc.length).toBe(1)
        });
    });

    describe('should NOT render', ()=> {
        let wrapper;
        beforeEach(()=> {
            const props = {
                desc: "Example description",
            }
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Component is not render', ()=> {
            const component = findByTestAtrr(wrapper, "listItemsComponent");
            expect(component.length).toBe(0);
        })
    });
});