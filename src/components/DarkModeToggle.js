import React, { useState } from 'react';
import '../App.scss';
import { useDispatch } from 'react-redux';
import { updateDarkmode } from '../redux/action/darkmode';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('DARK_MODE'))
  );
  const dispatch = useDispatch();
  if (JSON.parse(localStorage.getItem('DARK_MODE')) === true) {
    document.body.classList.add('dark-mode');
  }

  const handleModeChange = () => {
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    setDarkMode(!darkMode);
    localStorage.setItem('DARK_MODE', !darkMode);
    dispatch(updateDarkmode(!darkMode));
  };

  return (
    <div className='toggle-wrapper'>
      <input
        id='toggle'
        className='toggle'
        type='checkbox'
        onClick={() => handleModeChange()}
        defaultChecked={!darkMode}
      />
    </div>
  );
};

export default DarkModeToggle;
