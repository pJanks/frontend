import React from 'react';
import WeatherWindow from './WeatherWindow';

import renderer from 'react-test-renderer';

jest.mock("react-skycons", () => {
  return function DummyWeatherIcon() {
    return (
      <div data-testid="skycon">
        mock skycon
      </div>
    );
  };
});

test('renders correctly', () => {

  const weatherWindowComponent = renderer.create(<WeatherWindow />).toJSON();

  expect(weatherWindowComponent).toMatchSnapshot();
});
