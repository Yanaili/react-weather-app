import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
  weatherReducer,
  forecastReducer,
  degreesFormatReducer,
} from './reducer/weather';
import { darkmodeReducer } from './reducer/darkmode';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  weatherReducer,
  forecastReducer,
  darkmodeReducer,
  degreesFormatReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
