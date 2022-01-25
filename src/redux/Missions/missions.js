/* eslint-disable prefer-destructuring */
// import spacexApi from '../../Api/spacexApi';
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

// Local ACTIONS


// API ACTIONS
export const fetchMissions = () => (dispatch) => {
  dispatch({ type: GET_MISSIONS_START });
  axios.get(`${process.env.REACT_APP_SPACEX_BASE_API}missions`).then((response) => {
    dispatch({ type: GET_MISSIONS_SUCCESS, payload: response.data });
  }).catch((error) => { dispatch({ type: GET_MISSIONS_ERROR, payload: error }); });
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
    default:
      return state;
  }
};

export default reducer;
