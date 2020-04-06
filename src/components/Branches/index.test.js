import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../../setupTests';

import Index from './index';

test('renders without crashing', () => {
  const wrapper = shallow(<Index />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  // expect(wrapper.html()).toMatch(/Popular/);
});