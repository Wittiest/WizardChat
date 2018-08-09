import React from 'react';

/*
  Displays messages from authors w/ author pic and body of message
*/
const MessageItem = (props) => (
  <div>
    <p>{props.author + ": " + props.body}</p>
  </div>
);

export default MessageItem;
