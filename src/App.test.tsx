
import React from 'react';
import { shallow } from "enzyme";
import App from './App';

test('renders learn react link', () => {
  const container = shallow(<App/>);
  expect(container).toBeDefined();
});
