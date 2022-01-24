// CONSTANTS
const initialState = [];
const SOMETHING = 'Missions/SOMETHING';

// LOCAL ACTIONS
export const missionAction = (payload) => (
  {
    type: SOMETHING,
    payload,
  }
);
// API ACTIONS

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.payload) {
    case SOMETHING:
      return true;
    default:
      return state;
  }
};

export default reducer;
