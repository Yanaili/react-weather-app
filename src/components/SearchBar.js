import React, { useState, useEffect } from 'react';
import { getCurrentWeather, getDailyForecast } from '../apis/openWeatherApi';
import { useDispatch } from 'react-redux';
import { updateForecast, updateWeather } from '../redux/action/weather';
import './searchBar.scss';
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({
    temp: 0,
    location: '',
    description: '',
    feelsLike: 0,
    icon: '',
  });
  let isDarkMode = useSelector((state) => state.darkmodeReducer);
  const isCelsius = useSelector((state) => state.degreesFormatReducer);
  let f = useSelector((state) => state.forecastReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateForecast(f));
  }, [dispatch, f]);

  useEffect(() => {
    dispatch(updateWeather(weather));
  }, [dispatch, weather]);

  useEffect(() => {
    onSearchClicked();
  }, [isCelsius]);

  const onInputChange = (e) => setLocation(e.target.value);

  const onSearchClicked = (e) => {
    e && e.preventDefault();
    Promise.all([
      getCurrentWeather(location, isCelsius),
      getDailyForecast(location, isCelsius),
    ]).then((res) => {
      const data1 = res[0] && res[0].data;
      const data2 = res[1] && res[1].data;
      if (data1) {
        setWeather({
          ...weather,
          temp: data1.main.temp,
          location: location,
          description: data1.weather[0].description,
          feelsLike: data1.main.feels_like,
          icon: data1.weather[0].icon,
        });

        dispatch(updateWeather(weather));
      }

      if (data2) {
        const forecast = data2.list.filter((day, index) => index % 8 === 0);
        dispatch(updateForecast(forecast));
      }
    });
  };

  let className = isDarkMode ? 'search-bar' : 'search-bar-dark-mode';

  return (
    <div className='search-bar'>
      <form
        className={`${className}-form`}
        onSubmit={(e) => onSearchClicked(e)}
      >
        <input
          className='search-bar-input'
          onChange={(e) => onInputChange(e)}
        ></input>
        <button
          className={`${className}-button`}
          type='submit'
          onClick={(e) => onSearchClicked(e)}
        >
          <i className={`fas fa-search ${className}-icon`}></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
