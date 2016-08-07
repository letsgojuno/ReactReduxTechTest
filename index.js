import React from 'react';
import {render} from 'react-dom';
import configureStore from './state/store/configureStore';
import Root from './components/root';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import persistedState from './state/persistedState';

const store = configureStore(persistedState);

// Add store to window for debugging.
window.store = store;

render(
  <Root store={store} />,
  document.getElementById('root')
);
