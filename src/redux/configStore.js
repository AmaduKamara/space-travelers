import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './Missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  missionsReducer,
  // rockets reducers here
  rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
