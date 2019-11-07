import React from 'react';

import { connect } from 'react-redux';

import Message from '../components/message';

const MessageList = (props) => {
  return (
    <div className="message-list">
      <p className="title">Channel</p>
      {props.messages.map(message => <Message message={message} key={message.created_at} />)}
    </div>
  );
};

function mapStateToProps() {
  return {
    messages: [
      {
        author: "anonymous92",
        content: "Hello world!",
        created_at: "2017-09-26T23:03:16.365Z"
      },
      {
        author: "anonymous77",
        content: "My name is anonymous77",
        created_at: "2017-09-26T23:03:21.194Z"
      }
    ]
  };
}

export default connect(mapStateToProps, null)(MessageList);
