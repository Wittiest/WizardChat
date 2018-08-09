import React from 'react';

const MessageItem = (props) => (
  <div>
    <p>{props.author + ": " + props.body}</p>
  </div>
);

export default MessageItem;
