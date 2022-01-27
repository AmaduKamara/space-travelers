import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../test.utils';
import MyProfile from '../pages/MyProfile';
import store from '../redux/configStore';
import { rocketBooking, fetchRockets } from '../redux/rockets/rockets';
import { joinMission, fetchMissions } from '../redux/Missions/missions';

it('renders react link', () => {
  render(<MyProfile />);
  const textElement = screen.getByText(/My Missions/i);
  expect(textElement).toBeInTheDocument();
});

it('tests the store and My Profile dşsplay', () => {
  const mission = [{ mission_id: '1', mission_name: 'Mission 1', description: 'Misiion 1 Description' }];
  store.dispatch(fetchMissions(mission));
  const rocket = [{
    id: 1,
    rocket_name: 'Rocket 1',
    description: 'Description',
    flickr_images: 'img1',
  }];
  store.dispatch(fetchRockets(rocket));
  // Reserve Here
  store.dispatch(joinMission('1'));
  store.dispatch(rocketBooking(1));
  render(<MyProfile />);
  let textElement = screen.getByText(/Rocket 1/i);
  expect(textElement).toBeInTheDocument();
  textElement = screen.getByText(/Mission 1/i);
  expect(textElement).toBeInTheDocument();
});
