import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import './setupTests';

import App from './App';

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});