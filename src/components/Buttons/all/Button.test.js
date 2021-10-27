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
        let mockFunc;
        beforeEach(()=> {
            mockFunc = jest.fn();
            const props = {
                buttontext: "Example button text",
                onSubmit: mockFunc
            }
            wrapper = shallow(<Button {...props} />);
        });

        it('Should render a button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1)
        });

        it('should emit callback on click even', ()=>{
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;

            console.log(callback)
            expect(callback).toBe(1);
        })
    });
});