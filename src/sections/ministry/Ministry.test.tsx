
import * as React from 'react';
import { shallow } from "enzyme";
import Ministry from "./Ministry.component";

describe('Program [component]', () => {

    test('check component did mount', () => {

        const props = {
            programListRaw: [],
            programByResult: [],
            getMinistry: jest.fn()
        } as any;
        const cmp = shallow(<Ministry {...props} />);
        expect(props.getMinistry).toHaveBeenCalled()
    });

});
