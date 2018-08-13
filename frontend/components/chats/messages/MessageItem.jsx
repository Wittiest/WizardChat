import React from 'react';
import { connect } from 'react-redux';

const MessageItem = ({users, message, currentUserId}) => {
  let side = "left";
  let color = "";
  let author;

  users.forEach((user)=>{
    if (message.authorId === user.id) {
      author = user.firstName + ": ";
    }
  });

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
  users: Object.values(state.entities.users)
});

export default connect(mapStateToProps, null)(MessageItem);
