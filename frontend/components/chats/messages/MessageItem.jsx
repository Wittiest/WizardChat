import React from 'react';
import { connect } from 'react-redux';

const MessageItem = ({message, currentUserId}) => {
  let side = "left";
  let color = "";
  if (currentUserId === message.authorId) {
    side = "right";
    color = "my-color";
  }
  return (
    <li className={`message-item ${side}`}>
      <span className={` message-item-text ${color}`}>
        {message.author + ": " + message.body}
      </span>
    </li>
  );
};

const mapStateToProps = (state, {message}) => ({
  currentUserId: state.session.id,
  message
});

export default connect(mapStateToProps, null)(MessageItem);
