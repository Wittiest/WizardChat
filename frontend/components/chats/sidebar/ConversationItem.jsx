import React from 'react';

const ConversationItem = ({message}) => (
  /*
    Conversation Item will contain:
      - preview of last message w/ user,
      - be clickable to switch to conversation
  */
  <li className="conversation-item">
    <h1>{message.conversationName}</h1>
    <p>{message.lastMessageAuthor + ": " + message.lastMessageBody}</p>
  </li>
);

export default ConversationItem;
