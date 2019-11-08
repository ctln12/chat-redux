import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels, setSelectedChannel } from '../actions';

class ChannelList extends Component {
  componentWillMount() {
    this.props.setChannels(this.props.channels);
    this.props.setSelectedChannel();
  }

  render() {
    let active = '';
    console.log(this.props.selectedChannel);
    return (
      <div className="channel-list">
        <p className="title">Redux Chat</p>
        {this.props.channels.map((channel) => {
          if (channel === this.props.selectedChannel) {
            active += 'selected';
          }
          return <p className={active}>{`#${channel}`}</p>;
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setChannels, setSelectedChannel },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
