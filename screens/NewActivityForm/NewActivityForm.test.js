import React from 'react';
import NewActivityForm from './NewActivityForm';

import renderer from 'react-test-renderer';

describe('NewActivityForm', () => {
  test('should load with props', () => {
    const mockRouteInputs = jest.fn().mockImplementation(() => {
      return {
        id: 1,
        firstName: 'John',
        lastName: 'Smith'
      }
    })
    const mockNavigation = { navigate: jest.fn() };
    const mockRoute = {params: mockRouteInputs};
    const newActivityForm = renderer.create(<NewActivityForm navigation={mockNavigation} route={mockRoute} />)
    expect(newActivityForm).toMatchSnapshot();
  });
})
