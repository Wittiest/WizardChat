import React from 'react';
import { connect } from 'react-redux';
import { firstMessageSelector } from '../../../actions/selectors';
import { receiveCurrentChatId } from '../../../actions/chat_actions';

class ChatItem extends React.Component {
  constructor(props) {
    super(props);

    this.updateCurrentChat = this.updateCurrentChat.bind(this);
  }

  updateCurrentChat(e) {
    e.preventDefault();
    this.props.receiveCurrentChatId(this.props.chat.id);
  }

  render() {
    const firstMessage = this.props.firstMessage;

    return (
      <li className="chat-item">
        <button
          className="chat-item-button"
          onClick={this.updateCurrentChat}
          >
          {firstMessage.author + ": " + firstMessage.body}
        </button>
      </li>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return ({
    chat: ownProps.chat, // USE FOR CHAT NAME
    firstMessage: firstMessageSelector(state.entities.messages,
        ownProps.chat.firstMessageId)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveCurrentChatId: (id) => dispatch(receiveCurrentChatId(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);
