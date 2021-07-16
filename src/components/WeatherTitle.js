import React from 'react';
import { useSelector } from 'react-redux';

const WeatherTitle = () => {
  let isDarkMode = useSelector((state) => state.darkmodeReducer);

  return (
    <div className='title-wrapper'>
      <p className={isDarkMode ? 'App-title' : 'App-title-dark-mode'}>
        Weather App
      </p>
    </div>
  );
};

export default WeatherTitle;
