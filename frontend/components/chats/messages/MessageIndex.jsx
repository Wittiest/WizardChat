import React from 'react';
import MessageFeed from './MessageFeed';
import MessageTextBoxContainer from './MessageTextBox';

// class MessageIndex extends React.Component {
//
// }

const MessageIndex = ({currentChat}) => (
  <div className="message-index">
    <h1>Title of current conversation</h1>
    <MessageFeed currentChat={currentChat} />
    <MessageTextBoxContainer currentChat={currentChat}/>
  </div>
);

export default MessageIndex;
