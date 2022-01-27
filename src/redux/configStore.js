import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import missionsReducer, { fetchMissions } from './Missions/missions';
import rocketsReducer, { fetchRockets } from './rockets/rockets';

const reducer = combineReducers({
  missionsReducer,
  rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

// Fetch Rockets
const getRockets = async () => {
  // Fetch rockets here and dispatch displayRockets...
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  const data = await rockets.data;
  store.dispatch(fetchRockets(data));
};
getRockets();

// Fetch Missions
const getMissions = async () => {
  const missions = await axios.get('https://api.spacexdata.com/v3/missions');
  const data = await missions.data;
  store.dispatch(fetchMissions(data));
};
getMissions();

export default store;
