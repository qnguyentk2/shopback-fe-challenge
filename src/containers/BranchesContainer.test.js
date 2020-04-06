import React from 'react';
import mockWrapper from '../components/common/mockWrapper';
// import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import '../setupTests';

import BranchesContainer from './BranchesContainer';

test('renders without crashing', () => {
  const wrapper = mockWrapper(<BranchesContainer />, true);
  expect(toJSON(wrapper)).toMatchSnapshot();
  // expect(wrapper.html()).toMatch(/Popular/);
});