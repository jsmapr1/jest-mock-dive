import React from 'react';
import { shallow } from 'enzyme';
import RideFinder from './RideFinder';

describe.skip('RideFinder', () => {
  it('should render ride finder', () => {
    const wrapper = shallow(<RideFinder />);
    expect(wrapper).toMatchSnapshot();
  })
})
