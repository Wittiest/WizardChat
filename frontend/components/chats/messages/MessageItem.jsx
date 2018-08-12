import React from 'react';
import { connect } from 'react-redux';

const MessageItem = ({message, currentUserId}) => {
  let side = "left";
  let color = "";
  let author = message.author + ": ";
  if (currentUserId === message.authorId) {
    side = "right";
    color = "my-color";
    author = "";
  }
  return (
    <li className={`message-item ${side}`}>
      <span className={` message-item-text ${color}`}>
        {author + message.body}
      </span>
    </li>
  );
};

const mapStateToProps = (state, {message}) => ({
  currentUserId: state.session.id,
  message
});

export default connect(mapStateToProps, null)(MessageItem);
