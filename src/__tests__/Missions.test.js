import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../components/Missions/Missions';
import store from '../redux/configStore';

const renderer = require('react-test-renderer');

it('matches snapshot of Missons component', () => {
  const tree = renderer.create(<Provider store={store}><Missions /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders table headers', () => {
  render(<Provider store={store}><Missions /></Provider>);
  const element = screen.getByText(/Mission/i);
  expect(element).toBeInTheDocument();
});
