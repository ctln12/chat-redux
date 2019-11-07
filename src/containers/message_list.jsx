import React from 'react';

import Message from '../components/message';

const MessageList = (props) => {
  return (
    <div className="message-list">
      {props.messages.map(message => <Message message={message} />)}
    </div>
  );
};

export default MessageList;
