import React from 'react';

import connect from 'react-redux';

import Message from '../components/message';

const MessageList = (props) => {
  return (
    <div className="message-list">
      {props.messages.map(message => <Message message={message} />)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);
