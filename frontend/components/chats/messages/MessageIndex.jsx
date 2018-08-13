import React from 'react';
import MessageFeed from './MessageFeed';
import MessageTextBoxContainer from './MessageTextBox';
import UserSearchbar from './UserSearchbar';
import { connect } from 'react-redux';

const MessageIndex = ({currentChatId, currentChat}) => {
  if (!currentChatId) {
    return (<div></div>);
  }
  let name = "";
  if (currentChat) {
    name = currentChat.name;
  }
  return (
    <div className="message-index">
      <div className="message-index-header">
        {
          (currentChatId === -1) ?
            <UserSearchbar /> : <h1>{name}</h1>
        }
      </div>
      <MessageFeed />
      <MessageTextBoxContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentChatId: state.currentChatData.id,
  currentChat: state.entities.chats[state.currentChatData.id]
});

export default connect(mapStateToProps, null)(MessageIndex);
