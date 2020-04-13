import React from 'react';
import ActivityCard from './ActivityCard';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const mockData = {
      "id": 1,
      "date": "2020-04-06",
      "location": "Denver, CO",
      "forecast": "Overcast",
      "forecast_img": "cloudy",
      "activity": {
          "id": 1,
          "name": "Hiking",
          "muscle_groups": [
              {
                  "id": 1,
                  "name": "Biceps",
                  "exercise_set": [
                      {
                          "id": 1,
                          "name": "Pull Ups",
                          "description": "Pull yourself up ya dingus",
                          "img_url": "fake_img"
                      }
                  ]
              },
              {
                  "id": 2,
                  "name": "Forearms",
                  "exercise_set": [
                      {
                          "id": 3,
                          "name": "Push Ups",
                          "description": "Push yo' self",
                          "img_url": "some_img"
                      },
                      {
                          "id": 4,
                          "name": "Small Arm Circles",
                          "description": "Feel the burn",
                          "img_url": "some_img"
                      },
                  ]
              }
          ]
      },
      "user": {
          "id": 1,
          "first_name": "user",
          "last_name": "name"
      },
      "created_at": "2020-04-06T03:23:26.122544Z",
      "updated_at": "2020-04-06T03:23:26.122555Z"
  };

  const activityCard = renderer.create(<ActivityCard
  date={ mockData.date }
  location={ mockData.location }
  activity={ mockData.activity.name }
  forecast={ mockData.forecast }
  activityId={ mockData.id }
  />).toJSON();
  
  expect(activityCard).toMatchSnapshot();
});
