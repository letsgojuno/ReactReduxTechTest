import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './state/store/configureStore';
import Root from './components/root';

// From react material ui docs.
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// We can grab our persisted state from the server.
// For now I'm importing it from a local file.
import persistedState from './state/persistedState';


// The persisted state is passed to redux store, so we
// are creating the store with the initial state set.
const store = configureStore(persistedState);

window.store = store;

render(
  <Root store={store} />,
  document.getElementById('root')
);
