import './App.scss';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import './fonts/Weathertop.ttf';
import DarkModeToggle from './components/DarkModeToggle';
import WeatherTitle from './components/WeatherTitle';
import ForecastWeather from './components/ForecastWeather';
import TempFormatToggle from './components/TempFormatToggle';

const App = () => {
  return (
    <div className='App'>
      <div className='App-top-bar'>
        <TempFormatToggle />
        <DarkModeToggle />
      </div>
      <header className='App-header'>
        <WeatherTitle />
        <SearchBar />
        <CurrentWeather />
        <ForecastWeather />
      </header>
      <p className='logo'>Yanai.Dev</p>
    </div>
  );
};

export default App;
