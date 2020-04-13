import React from 'react';
import LoginScreen from './LoginScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const loginScreen = renderer.create(<LoginScreen />).toJSON();
  expect(loginScreen).toMatchSnapshot();
});
