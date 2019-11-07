/* eslint no-alert: off */
// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const initialState = {
  // TODO
  messages: [],
  channels: ['general', 'react', 'paris'],
  selectedChannel: 'general',
  currentUsername: prompt('What is your username?') || `anonymus${Math.floor(10 + (Math.random() * 90))}`
};
const reducers = combineReducers({
  changeMe: (state = null, action) => state
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
