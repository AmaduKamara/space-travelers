import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './Missions/missions';
import rocketsReducer, { fetchRockets } from './rockets/rockets';

const reducer = combineReducers({
  missionsData: missionsReducer,
  // rockets reducers here
  rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

const getRockets = async () => {
  // Fetch rockets here and dispatch displayRockets...
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  const data = await rockets.data;
  store.dispatch(fetchRockets(data));
};

getRockets();

export default store;
