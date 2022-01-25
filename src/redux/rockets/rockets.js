import axios from 'axios';

const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';
const DISPLAY_ROCKETS = 'rockets/DISPLAY_ROCKETS';

const initialState = {
  rockets: [],
  loading: false,
};

// ACTIONS
export const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const displayRockets = (payload) => ({
  type: DISPLAY_ROCKETS,
  payload,
});

// API ACTIONS

export const getRockets = () => async (dispatch) => {
  // Fetch rockets here and dispatch displayRockets...
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  const data = await rockets.data;
  // console.log('loaded data: ', data);
  dispatch(fetchRockets(data));
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rockets: action.payload };
    case DISPLAY_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
