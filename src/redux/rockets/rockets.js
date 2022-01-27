const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';

const ROCKET_BOOKING = 'rockets/ROCKET_BOOKING';

const initialState = {
  rockets: [],
};

// ACTIONS
export const fetchRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const rocketBooking = (payload) => ({
  type: ROCKET_BOOKING,
  payload,
});

// API ACTIONS

export const toggleBooking = (state, payload) => {
  const newState = state.map((rocket) => {
    if (rocket.id !== payload) return rocket;
    return { ...rocket, reserved: !rocket.reserved };
  });
  return newState;
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rockets: action.payload };
    case ROCKET_BOOKING:
      return { rockets: toggleBooking(state.rockets, action.payload) };
    default:
      return state;
  }
};

export default reducer;
