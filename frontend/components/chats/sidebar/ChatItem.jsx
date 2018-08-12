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
    let highlightCurrentChat = "";
    if (firstMessage.authorId === this.props.currentUserid) {
      authorDisplay = "You: ";
    } else if (this.props.chat.is_group_chat) {
      authorDisplay = firstMessage.author + ": ";
    }
    if (this.props.currentChatId === this.props.chat.id) {
      highlightCurrentChat = "selected-chat-item";
    }
    return (
      <li className={`chat-item ${highlightCurrentChat}`}>
        <button className="chat-item-button" onClick={this.updateCurrentChat}>
            <h2 className="auth-h2">{this.props.chat.name}</h2>
            {authorDisplay + firstMessage.body}
        </button>
      </li>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return ({
    chat: ownProps.chat,
    currentChatId: state.currentChatData.id,
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
