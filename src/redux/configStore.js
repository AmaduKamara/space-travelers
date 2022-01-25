import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './Missions/missions';

const reducer = combineReducers({
  missionsReducer,
  // rockets reducers here
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
