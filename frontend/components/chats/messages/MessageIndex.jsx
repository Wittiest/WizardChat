import React from 'react';
import MessageFeed from './MessageFeed';
import MessageTextBoxContainer from './MessageTextBox';

class MessageIndex extends React.Component {

  render() {
    const currentChatId = this.props.currentChatId;
    return (
      <div className="message-index">
        <h1>Title of current chat</h1>
        <MessageFeed currentChatId={currentChatId} />
        <MessageTextBoxContainer currentChatId={currentChatId}/>
      </div>
    );
  }
}

export default MessageIndex;
