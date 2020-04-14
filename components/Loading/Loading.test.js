import React from 'react';
import Loading from './Loading';

import renderer from 'react-test-renderer';

test('renders correctly', () => {

  const loadingPage = renderer.create(<Loading />).toJSON();

  expect(loadingPage).toMatchSnapshot();
});
