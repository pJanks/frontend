import React from 'react';
import ActivityDetails from './ActivityDetails';

import renderer from 'react-test-renderer';

describe('ActivityDetails', () => {
  test('should load with props', () => {
    const mockRouteInputs = jest.fn().mockImplementation(() => {
      return {
        activityId: 1,
        userId: 1
      }
    })
    const mockNavigation = { navigate: jest.fn() };
    const mockRoute = {params: mockRouteInputs};
    const activityDetails = renderer.create(<ActivityDetails navigation={mockNavigation} route={mockRoute} />)
    expect(activityDetails).toMatchSnapshot();
  });
})
