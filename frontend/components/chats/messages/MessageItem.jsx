import React from 'react';

/*
  Displays messages from authors w/ author pic and body of message
*/
const MessageItem = ({message}) => (
  <li className="message-item">{message.author + ": " + message.body}</li>
);

export default MessageItem;
