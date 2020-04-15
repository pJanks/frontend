import React from 'react';
import UserWelcome from './UserWelcome';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const mockUserInfo = {
    "id": 1,
    "first_name": "John",
    "last_name": "Smith",
  }

  const userWelcomePage = renderer.create(<UserWelcome userInfo={mockUserInfo} />).toJSON();

  expect(userWelcomePage).toMatchSnapshot();
});
