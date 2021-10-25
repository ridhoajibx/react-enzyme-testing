import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils";
import { Button } from "./Button";

describe('Component Button', () => {
    describe('Checking proptypes', ()=> {
        it('Should not throw a warning', ()=> {
            const expectedProps = {
                buttontext: "Example button text",
                onSubmit: () => {

                }
            }

            const propsError = checkProps(Button, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders', ()=> {
        let wrapper;
        beforeEach(()=> {
            const props = {
                buttontext: "Example button text",
                onSubmit: () => {

                }
            }
            wrapper = shallow(<Button {...props} />);
        });

        it('Should render a button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1)
        })
    });
});