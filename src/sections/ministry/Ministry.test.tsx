
import * as React from 'react';
import { shallow } from "../../enzime.config";
import Ministry from "./Ministry.component";

describe('Program [component]', () => {

    test('check component did mount', () => {

        const props = {
            programListRaw: [],
            programByResult: [],
            getPrograms: jest.fn()
        } as any;
        const cmp = shallow(<Ministry {...props} />);
        expect(props.getPrograms).toHaveBeenCalled()
    });

});
