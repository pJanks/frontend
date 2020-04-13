import React from 'react';
import WeatherWindow from './WeatherWindow';

import renderer from 'react-test-renderer';

test('renders correctly', () => {

  const weatherWindowComponent = renderer.create(<WeatherWindow />).toJSON();

  expect(weatherWindowComponent).toMatchSnapshot();
});
