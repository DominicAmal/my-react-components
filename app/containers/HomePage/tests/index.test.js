import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.length).toEqual(1);
  });
});
