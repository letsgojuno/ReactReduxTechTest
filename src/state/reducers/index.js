import {combineReducers} from 'redux';
import app from './app';
import stocks from './stocks';

const rootReducer = combineReducers({
  app,
  stocks,
});

export default rootReducer;
