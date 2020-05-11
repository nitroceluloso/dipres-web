
import React from 'react';
import { shallow } from "./enzime.config";
import App from './App';

test('renders learn react link', () => {
  const container = shallow(<App/>);
  expect(container).toBeDefined();
});
