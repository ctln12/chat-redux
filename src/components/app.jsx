import React from 'react';

import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="logo"><p className="title">LOGO</p></div>
      <div className="channel-list"><p className="title">Redux Chat</p></div>
      <MessageList />
    </div>
  );
};

export default App;
