import React from 'react';

import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <p>React Chat</p>
      <MessageList />
    </div>
  );
};

export default App;
