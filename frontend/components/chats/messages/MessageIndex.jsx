import React from 'react';
import MessageFeed from './MessageFeed';
import MessageTextBoxContainer from './MessageTextBox';
import { connect } from 'react-redux';

class MessageIndex extends React.Component {

  render() {
    let messageFeed;
    if (!this.props.currentChatId) {
      return (<div></div>);
    }
    return (
      <div className="message-index">
        <h1>Title of current chat</h1>
        <MessageFeed />
        <MessageTextBoxContainer />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return (
    {
      currentChatId: state.currentChatData.id
    }
  );
};

export default connect(mapStateToProps, null)(MessageIndex);
