// CONSTANTS
const INITIAL_STATE = {
  missions: [],
};
const FETCH_MISSIONS = 'Missions/FETCH_MISSIONS';
const TOGGLE_MISSION = 'Missions/TOGGLE_MISSION';

// Local ACTIONS
export const fetchMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

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
    case FETCH_MISSIONS:
      return { ...state, missions: action.payload };
    case TOGGLE_MISSION:
      return { missions: toggleMission(state.missions, action.payload) };
    default:
      return state;
  }
};

export default reducer;
