import React from 'react';
import HomeScreen from './HomeScreen';

import renderer from 'react-test-renderer';

describe('HomeScreen', () => {
  test('should load with props', () => {
    const mockNavigation = { navigate: jest.fn() };
    const homeScreen = renderer.create(<HomeScreen navigation={mockNavigation} />)
    expect(homeScreen).toMatchSnapshot();
  });
})