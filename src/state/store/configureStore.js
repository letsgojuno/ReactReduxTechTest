import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index.js';

const middlewares = [];

export default function configureStore(persistedState) {
  return createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  );
}
