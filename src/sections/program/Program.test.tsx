
import * as React from 'react';
import { shallow } from "../../enzime.config";
import Program from "./Program.component";

describe('Program [component]', () => {

    test('check component did mount', () => {

        const props = {
            programListRaw: [],
            programByResult: [],
            getPrograms: jest.fn()
        } as any;
        const cmp = shallow(<Program {...props} />);
        expect(props.getPrograms).toHaveBeenCalled()
    });

});
