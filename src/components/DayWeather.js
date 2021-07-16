import React from 'react';
import './forecastWeather.scss';
import { useSelector } from 'react-redux';

const DayWeather = ({ title, temp, icon, description, feelsLike }) => {
  const dayIcon = `images/weatherIcons/${icon}.png`;
  let isDarkMode = useSelector((state) => state.darkmodeReducer);
  let className = isDarkMode ? 'day-weather' : 'day-weather-dark-mode';
  return (
    <div className={`${className}`}>
      <div className={`${className}-title`}>{title}</div>
      <div className={`${className}-degrees`}>
        <p className={`${className}-temp`}>{`${temp.toFixed(1)}°`}</p>
      </div>
      <div className='img-wrapper'>
        <img className='weather-img' src={dayIcon} alt='icon' />
      </div>

      <div className={`${className}-description`}>{description}</div>
      <div className={`${className}-feels-like-wrapper`}>
        <p className={`${className}-feels-like`}>Feels like </p>
        <p className={`${className}-feels-like-value`}>
          {feelsLike.toFixed(1)}°
        </p>
      </div>
    </div>
  );
};

export default DayWeather;
