import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './Missions/missions';

const reducer = combineReducers({
  missionsData: missionsReducer,
  // rockets reducers here
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
