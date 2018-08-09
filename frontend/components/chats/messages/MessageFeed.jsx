import React from 'react';
import MessageItem from './MessageItem';

const fakeMessage = {
  author: "Harry",
  body: "Hey ron, let's go play with some trolls!",
};
const fakeMessage2 = {
  author: "Malfoy",
  body: "I'm going to kill dumbledore!!",
};

const MessageFeed = () => (
  <div className="message-feed">
    <MessageItem message={fakeMessage} />
    <MessageItem message={fakeMessage2} />
  </div>
);

export default MessageFeed;
