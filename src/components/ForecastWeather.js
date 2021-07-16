import React from 'react';
import { useSelector } from 'react-redux';
import DayWeather from './DayWeather';
import './forecastWeather.scss';

const ForecastWeather = () => {
  let forecastData = useSelector((state) => state.forecastReducer);

  return (
    <div className='forecast-weather'>
      <div className='forecast-days'>
        {forecastData.map((day, i) => {
          return (
            <DayWeather
              title={day.dt_txt.split(' ')[0]}
              temp={day.main.temp}
              icon={day.weather[0].icon}
              description={day.weather[0].description}
              feelsLike={day.main.feels_like}
              key={`day-${i}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ForecastWeather;
