import React from 'react';
import { useSelector } from 'react-redux';
import './currentWeather.scss';

const CurrentWeather = () => {
  let weatherData = useSelector((state) => state.weatherReducer);
  let isDarkMode = useSelector((state) => state.darkmodeReducer);
  let className = !isDarkMode ? 'current-weather-dark-mode' : 'current-weather';
  //const icon = `http://openweathermap.org/img/wn/${weatherData.icon}@4x.png`;
  const icon = `images/weatherIcons/${weatherData.icon}.png`;
  if (weatherData.description)
    return (
      <div className={className}>
        <div className={`${className}-content`}>
          <div>
            <div className={`${className}-degrees`}>
              <p className={`${className}-temp`}>{`${weatherData.temp.toFixed(
                1
              )}°`}</p>
            </div>
            <div>
              <img className='weather-img' src={icon} alt='icon' />
              <p className={`${className}-description`}>
                {`${weatherData.description[0].toUpperCase()}${weatherData.description.substring(
                  1
                )}`}
              </p>
            </div>
            <div className={`${className}-feels-like-wrapper`}>
              <p className={`${className}-feels-like`}>Feels like </p>
              <p className={`${className}-feels-like-value`}>
                {weatherData.feelsLike.toFixed(1)}°
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  return <div></div>;
};

export default CurrentWeather;
