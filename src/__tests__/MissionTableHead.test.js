import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import MissionTableHead from '../components/Missions/MissionTableHead';

const renderer = require('react-test-renderer');

it('matches snapshot of MissonTableHead component', () => {
  const tree = renderer.create(<MissionTableHead />).toJSON();
  expect(tree).toMatchSnapshot();
});
