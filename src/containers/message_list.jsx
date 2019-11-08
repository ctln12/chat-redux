import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.props.setMessages();
  }

  render() {
    return (
      <div className="message-list">
        <p className="title">Channel</p>
        <div className="messages-window">
          {this.props.messages.map(message => <Message message={message} key={message.created_at} />)}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
