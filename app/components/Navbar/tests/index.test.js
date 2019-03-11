import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../index';

describe('<Navbar />', () => {
  it('should render a nav', () => {
    const renderedComponent = shallow(<Navbar />);
    expect(renderedComponent.length).toEqual(1);
  });
});
