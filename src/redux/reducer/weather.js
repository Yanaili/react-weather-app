import {
  UPDATE_WEATHER,
  UPDATE_FORECAST,
  UPDATE_FORMAT,
} from '../action/actionTypes';
const initialState = {
  temp: 0,
  location: '',
  description: '',
  feelsLike: 0,
  icon: '',
};
export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WEATHER:
      return action.payload;
    default:
      return state;
  }
};

export const forecastReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_FORECAST:
      return action.payload;
    default:
      return state;
  }
};

export const degreesFormatReducer = (state = true, action) => {
  switch (action.type) {
    case UPDATE_FORMAT:
      return action.payload;
    default:
      return state;
  }
};
