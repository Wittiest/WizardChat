import React from 'react';
import ConversationItem from './ConversationItem';

/*
  Contains ConversationItems in order of most recent message
*/

const fakeMessage = {
  conversationName: "Troll Hunting Squad",
  lastMessageAuthor: "Harry",
  lastMessageBody: "Hey ron, let's go play with some trolls!",
};
const fakeMessage2 = {
  conversationName: "Death Eaters",
  lastMessageAuthor: "Malfoy",
  lastMessageBody: "I'm going to kill dumbledore!!",
};

const ConversationFeed = () => (
  <ul className="conversation-feed">
    <ConversationItem message={fakeMessage} />
    <ConversationItem message={fakeMessage2} />
  </ul>
);

export default ConversationFeed;
