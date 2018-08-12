import React from 'react';
import MessageFeed from './MessageFeed';
import MessageTextBoxContainer from './MessageTextBox';
import { connect } from 'react-redux';

class MessageIndex extends React.Component {

  render() {
    if (!this.props.currentChatId) {
      return (<div></div>);
    }
    return (
      <div className="message-index">
        <div className="message-index-header">
          <h1>{this.props.currentChat.name}</h1>
        </div>
        <MessageFeed />
        <MessageTextBoxContainer />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return (
    {
      currentChatId: state.currentChatData.id,
      currentChat: state.entities.chats[state.currentChatData.id]
    }
  );
};

export default connect(mapStateToProps, null)(MessageIndex);
