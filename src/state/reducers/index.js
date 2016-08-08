import {combineReducers} from 'redux';
import app from './app';
import stocks from './stocks';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  app,
  stocks,
  form: formReducer
});

export default rootReducer;
