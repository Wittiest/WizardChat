import React from 'react';
import { connect } from 'react-redux';
import { getUserNickname } from '../../../actions/selectors';

const MessageItem = ({users, message, currentUserId, chatUsers}) => {
  let side = "left";
  let color = "";
  let author;

  author = getUserNickname(chatUsers, message.authorId, message.chatId) + ": ";

  if (currentUserId === message.authorId) {
    side = "right";
    color = "my-color";
    author = "";
  }

  return (
    <li className={`message-item ${side}`}>
      <span className={`message-item-text ${color}`}>
        {author + message.body}
      </span>
    </li>
  );
};

const mapStateToProps = (state, {message}) => ({
  currentUserId: state.session.id,
  message,
  users: Object.values(state.entities.users),
  chatUsers: Object.values(state.entities.chatUsers)
});

export default connect(mapStateToProps, null)(MessageItem);
