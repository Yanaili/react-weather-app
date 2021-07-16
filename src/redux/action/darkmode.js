import { UPDATE_DARKMODE } from './actionTypes';
export const updateDarkmode = (isDarkMode) => async (dispatch) => {
  dispatch({
    type: UPDATE_DARKMODE,
    payload: isDarkMode,
  });
};
