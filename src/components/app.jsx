import React from 'react';

import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="logo-container">
        <img className="logo" src="assets/images/logo.svg" alt="" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
