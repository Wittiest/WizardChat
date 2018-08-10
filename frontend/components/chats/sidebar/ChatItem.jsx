import React from 'react';
import { connect } from 'react-redux';
import { firstMessageSelector } from '../../../actions/selectors';

const ChatItem = ({chat, firstMessage}) => {
  return (
    <li className="chat-item">
      <h1>{chat.name}</h1>
      <p>{firstMessage.author + ": " + firstMessage.body}</p>
    </li>
  );
};



const mapStateToProps = (state, ownProps) => {
  return ({
    chat: ownProps.chat,
    firstMessage: firstMessageSelector(state.entities.messages,
        ownProps.chat.firstMessageId)
  });
};


export default connect(mapStateToProps, null)(ChatItem);
