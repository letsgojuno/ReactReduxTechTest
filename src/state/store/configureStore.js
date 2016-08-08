import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [
  thunk
];

export default function configureStore(persistedState) {
  return createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  );
}
