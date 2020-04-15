import React from 'react';
import WeatherWindow from './WeatherWindow';

import renderer from 'react-test-renderer';

test('renders correctly', () => {

  const activity = {
    "id": 4,
    "status": "bad",
    "date": "2020-04-21T00:00:00Z",
    "location": "Breckenridge, CO",
    "forecast": "Foggy until afternoon, starting again overnight.",
    "forecast_img": "rain",
    "temperature": "45.03",
    "temp_hi": "46.61",
    "temp_low": "28.48",
    "precip_probability": "0.46",
  }

  const weatherWindowComponent = renderer.create(<WeatherWindow activity={ activity } />).toJSON();

  expect(weatherWindowComponent).toMatchSnapshot();
});
