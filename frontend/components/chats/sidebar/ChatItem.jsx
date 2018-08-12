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
    let authorDisplay = "";
    if (firstMessage.authorId === this.props.currentUserid) {
      console.log("HERE");
      authorDisplay = "You: ";
    } else if (this.props.chat.is_group_chat) {
      console.log("HERE2");
      authorDisplay = firstMessage.author + ": ";
    }
    return (
      <li className="chat-item">
        <button
          className="chat-item-button"
          onClick={this.updateCurrentChat}
          >
          <h1>{this.props.chat.name}</h1>
          {authorDisplay + firstMessage.body}
        </button>
      </li>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return ({
    chat: ownProps.chat,
    firstMessage: firstMessageSelector(state.entities.messages,
        ownProps.chat.firstMessageId),
    currentUserid: state.session.id
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveCurrentChatId: (id) => dispatch(receiveCurrentChatId(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);
