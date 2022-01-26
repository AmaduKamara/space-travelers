/* eslint-disable camelcase */
import axios from 'axios';

// CONSTANTS
const INITIAL_STATE = {
  missions: [],
  message: '',
  isLoading: false,
};
const GET_MISSIONS_START = 'Missions/GET_MISSIONS_START';
const GET_MISSIONS_SUCCESS = 'Missions/GET_MISSIONS_SUCCESS';
const GET_MISSIONS_ERROR = 'Missions/GET_MISSIONS_ERROR';
const TOGGLE_MISSION = 'Missions/TOGGLE_MISSION';

// Local ACTIONS

// API ACTIONS
export const fetchMissions = () => (dispatch) => {
  dispatch({ type: GET_MISSIONS_START });
  axios.get(`${process.env.REACT_APP_SPACEX_BASE_API}missions`).then((response) => {
    dispatch({ type: GET_MISSIONS_SUCCESS, payload: response.data });
  }).catch((error) => { dispatch({ type: GET_MISSIONS_ERROR, payload: error }); });
};

export const joinMission = (payload) => ({
  type: TOGGLE_MISSION,
  payload,
});

export const toggleMission = (state, payload) => {
  const newState = state.map((missions) => {
    if (missions.mission_id !== payload) return missions;
    return { ...missions, reserved: !missions.reserved };
  });
  return newState;
};

// REDUCER
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MISSIONS_START:
      return { ...state, isLoading: true, message: '' };
    case GET_MISSIONS_SUCCESS:
      return { ...state, missions: action.payload, isLoading: false };
    case GET_MISSIONS_ERROR:
      return { ...state, message: action.payload, isLoading: false };
    case TOGGLE_MISSION:
      return { missions: toggleMission(state.missions, action.payload) };
    default:
      return state;
  }
};

export default reducer;
