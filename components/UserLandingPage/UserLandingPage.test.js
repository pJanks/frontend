import React from 'react';
import UserLandingPage from './UserLandingPage';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const userInfo = { id: 1 }
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
    const previousActivities = [{
      "id": 1,
      "activity": "Baseball",
      "date": "2020-04-08T16:57:12Z",
      "location": "Denver, CO",
      "forecast": "Overcast",
      "forecast_img": "cloudy"
      }]
    const currentActivities = [{
        "id": 2,
        "activity": "Hiking",
        "date": "2020-07-18T12:00:00Z",
        "location": "Breckenridge, CO",
        "forecast": "Sunny",
        "forecast_img": "sunny"
        }]
  const landingPage = renderer.create(<UserLandingPage currentActivities={currentActivities} previousActivities={previousActivities} activities={ activities } userInfo={ userInfo } />).toJSON();
  expect(landingPage).toMatchSnapshot();
});
