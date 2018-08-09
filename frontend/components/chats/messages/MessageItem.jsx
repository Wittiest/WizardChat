import React from 'react';

/*
  Displays messages from authors w/ author pic and body of message
*/
const MessageItem = ({message}) => (
  <p className="message-item">{message.author + ": " + message.body}</p>
);

export default MessageItem;
