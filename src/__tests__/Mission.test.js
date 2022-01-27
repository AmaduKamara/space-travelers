import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Mission from '../components/Missions/Mission';

const renderer = require('react-test-renderer');

it('renders the button toggle true state correctly', () => {
  const toggleMission = () => true;
  const { getByTestId } = render(<Mission
    toggleMission={toggleMission}
    id="2"
    description="Render Description"
    missionName="Render Missiom"
    reserved
  />);
  expect(getByTestId('mission-btn')).toHaveTextContent('Leave Mission');
});

it('renders the button toggle false state correctly', () => {
  const toggleMission = () => false;
  const { getByTestId } = render(<Mission
    toggleMission={toggleMission}
    id="2"
    description="Render Description"
    missionName="Render Missiom"
    reserved={false}
  />);
  expect(getByTestId('mission-btn')).toHaveTextContent('Join Mission');
});

it('matches snapshot of Misson component', () => {
  const toggleMission = () => true;
  const id = '1';
  const description = 'test';
  const missionName = 'test mission';
  const reserved = true;
  const tree = renderer.create(<Mission
    toggleMission={toggleMission}
    id={id}
    description={description}
    missionName={missionName}
    reserved={reserved}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
