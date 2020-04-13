import React from 'react';
import HomeScreen from './HomeScreen';

import renderer from 'react-test-renderer';

test('testing suite runs', () => {
  expect(true).toEqual(true)
})

// test('renders correctly', () => {
//
//   const HomeScreen = renderer.create(<HomeScreen />).toJSON();
//
//   expect(HomeScreen).toMatchSnapshot();
// });
