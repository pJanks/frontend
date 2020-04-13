import React from 'react';
import UserWelcome from './UserWelcome';

import renderer from 'react-test-renderer';

test('renders correctly', () => {

  const userWelcomePage = renderer.create(<UserWelcome />).toJSON();

  expect(userWelcomePage).toMatchSnapshot();
});
