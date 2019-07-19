import { SET_MOVIES } from '../actions/ActionTypes';

const initialState = {
  all: [],
  pagination: {}
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload.data, pagination: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
