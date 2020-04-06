import React from 'react';
import mockWrapper from '../../common/mockWrapper';
// import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../../../setupTests';

import Index from './index';

test('renders without crashing', () => {
  const wrapper = mockWrapper(<Index />, true);
  expect(toJSON(wrapper)).toMatchSnapshot();
  // expect(wrapper.html()).toMatch(/Popular/);
});