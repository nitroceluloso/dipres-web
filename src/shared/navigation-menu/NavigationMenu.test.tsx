
import * as React from 'react';
import { shallow } from "enzyme";
import NavigationMenu from "./NavigationMenu.component";

describe('Navigation menu [component]', () => {

    test('render', () => {
        const props = {
            redirect: () => {}
        }
        const cmp = shallow(<NavigationMenu {...props} />);
        expect(cmp).toBeDefined();
    });

});