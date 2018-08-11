import React from 'react';
import MessageFeed from './MessageFeed';
import MessageTextBoxContainer from './MessageTextBox';
import { connect } from 'react-redux';

class MessageIndex extends React.Component {

  render() {
    let messageFeed;
    let name = "Direct Message";
    if (this.props.currentChat && this.props.currentChat.name) {
      name = this.props.currentChat.name;
    }
    if (!this.props.currentChatId) {
      return (<div></div>);
    }
    return (
      <div className="message-index">
        <div className="message-index-header">
          <h1>{name}</h1>
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
