import { UPDATE_WEATHER, UPDATE_FORECAST, UPDATE_FORMAT } from './actionTypes';
export const updateWeather = (weather) => async (dispatch) => {
  dispatch({
    type: UPDATE_WEATHER,
    payload: weather,
  });
};

export const updateForecast = (daysList) => async (dispatch) => {
  dispatch({
    type: UPDATE_FORECAST,
    payload: daysList,
  });
};

export const updateFormat = (isCelsius) => async (dispatch) => {
  dispatch({
    type: UPDATE_FORMAT,
    payload: isCelsius,
  });
};
