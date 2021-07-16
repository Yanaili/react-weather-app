import { UPDATE_DARKMODE } from '../action/actionTypes';
const initialState = JSON.parse(localStorage.getItem('DARK_MODE'));
export const darkmodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DARKMODE:
      return action.payload;
    default:
      return state;
  }
};
