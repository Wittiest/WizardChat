import React from 'react';
import { connect } from 'react-redux';
import { getUserNickname } from '../../../actions/selectors';

const MessageItem = ({users, message, currentUserId, chatUsers, chat,
                      messageAuthor}) => {
  let side = "left";
  let color = "";
  let author="";
  let leftImg;
  if (messageAuthor) {
    leftImg = <img className="message-avatar" src={messageAuthor.imageUrl}/>;
  }
  if (chat && chat.isGroupChat) {
    author = getUserNickname(chatUsers, message.authorId, message.chatId);
  }

  let rightImg;
  if (currentUserId === message.authorId) {
    side = "right";
    color = "my-color";
    author = "";
    leftImg = null;
    rightImg = <img className="message-avatar" src={messageAuthor.imageUrl}/>;
  }

  return (
    <li className={`li-message-item ${side}`}>
      {leftImg}
      <div className='message-item'>
        <span className="message-item-author-text">{author}</span>
        <span className={`message-item-text ${color}`}>
          {/*TODO Display message send time when hover on message*/}
          {message.body}
        </span>
      </div>
      {rightImg}
    </li>
  );
};

const mapStateToProps = (state, {message}) => ({
  currentUserId: state.session.id,
  messageAuthor: state.entities.users[message.authorId],
  message,
  users: Object.values(state.entities.users),
  chatUsers: Object.values(state.entities.chatUsers),
  chat: state.entities.chats[state.currentChatData.id]
});

export default connect(mapStateToProps, null)(MessageItem);
