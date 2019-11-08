import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setMessages } from '../actions';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.setMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.setMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  setMessages = () => {
    this.props.setMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="messages-container">
        <p className="title">Channel #{this.props.selectedChannel}</p>
        <div className="messages-window" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message) => {
              return <Message message={message} key={message.id} />;
            })
          }
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
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
