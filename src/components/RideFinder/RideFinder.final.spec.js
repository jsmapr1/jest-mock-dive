import React from 'react';
import { shallow } from 'enzyme';
import RideFinder from './RideFinder';
import renderMap from 'streetMap';

describe('RideFinder', () => {
  it('should render ride finder', () => {
    const wrapper = shallow(<RideFinder />);
    expect(wrapper).toMatchSnapshot();
    expect(renderMap).toBeCalled();
  })
})
