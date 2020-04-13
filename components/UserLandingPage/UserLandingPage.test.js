import React from 'react';
import UserLandingPage from './UserLandingPage';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const activities = [{
    "id": 1,
    "activity": "Baseball",
    "date": "2020-04-08T16:57:12Z",
    "location": "Denver, CO",
    "forecast": "Overcast",
    "forecast_img": "cloudy"
    },
    {
    "id": 2,
    "activity": "Hiking",
    "date": "2020-04-18T12:00:00Z",
    "location": "Breckenridge, CO",
    "forecast": "Sunny",
    "forecast_img": "sunny"
    }]
  const landingPage = renderer.create(<UserLandingPage activities={ activities } />).toJSON();
  expect(landingPage).toMatchSnapshot();
});
