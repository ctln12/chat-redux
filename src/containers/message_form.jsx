import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createMessage('general', 'Alice', this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <input type="text" className="form-control mb-2 mr-sm-2" id="message-form-input" placeholder="Write a message" value={this.state.value} onChange={this.handleChange} style={{ width: '94%' }} />
        <button type="submit" className="btn btn-danger mb-2">Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
