import axios from 'axios';

export const getCurrentWeather = (location, isCelsius) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${
        isCelsius ? 'metric' : 'imperial'
      }&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
    )
    .catch(function (error) {
      if (error.response) {
        console.log('Error', error.message);
      }
    });
};

export const getDailyForecast = (location, isCelsius) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${
        isCelsius ? 'metric' : 'imperial'
      }&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
    )
    .catch(function (error) {
      if (error.response) {
        console.log('Error', error.message);
      }
    });
};
