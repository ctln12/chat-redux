/* eslint no-alert: off */
// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import MessagesReducer from './reducers/messages_reducer';
import ChannelsReducer from './reducers/channels_reducer';
import SelectedChannelReducer from './reducers/selected_channel_reducer';
import CurrentUsernameReducer from './reducers/current_username_reducer';

const initialState = {
  // TODO
  messages: [],
  channels: ['general', 'react', 'paris'],
  selectedChannel: 'general',
  currentUsername: prompt('What is your username?') || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};
const reducers = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  selectedChannel: SelectedChannelReducer,
  currentUsername: CurrentUsernameReducer
});
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
