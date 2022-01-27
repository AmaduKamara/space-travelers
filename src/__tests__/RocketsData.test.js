import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import RocketsData from '../components/Rockets/RocketsData';
import store from '../redux/configStore';

const renderer = require('react-test-renderer');

it('should render the parent component', () => {
  const id = 1;
  const rocketName = 'Test Rocket';
  const rocketImage = 'img';
  const description = 'Test';
  const reserved = false;
  const handleToggleClick = () => true;
  const tree = renderer.create(
    <Provider store={store}>
      <RocketsData>
        id=
        {id}
        rocket_name=
        {rocketName}
        rocket_image=
        {rocketImage}
        description=
        {description}
        reserved=
        {reserved}
        handleToggleClick=
        {handleToggleClick}
      </RocketsData>
      {' '}

    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
