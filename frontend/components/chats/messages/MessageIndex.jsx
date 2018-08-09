import React from 'react';
import MessageFeed from './MessageFeed';
import MessageTextBox from './MessageTextBox';

const MessageIndex = ({currentConversation}) => (
  <div className="message-index">
    <h1>Title of current conversation</h1>
    <MessageFeed />
    <MessageTextBox />
  </div>
);

export default MessageIndex;
