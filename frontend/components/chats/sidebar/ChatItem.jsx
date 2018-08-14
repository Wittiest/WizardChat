import React from 'react';
import { connect } from 'react-redux';
import {
  firstMessageSelector,
  getUserNickname
} from '../../../actions/selectors';
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
    const {firstMessage, chatUsers, currentChatId, chat} = this.props;
    let authorDisplay = "";
    let highlightCurrentChat = "";

    if (firstMessage.authorId === this.props.currentUserid) {
      authorDisplay = "You: ";
    } else if (chat.isGroupChat) {
      let author;
      this.props.users.forEach((user)=>{
        if (firstMessage.authorId === user.id) {
          author = user;
        }
      });
      authorDisplay = getUserNickname(chatUsers, author.id, chat.id)+ ": ";
    }
    if (currentChatId === chat.id) {
      highlightCurrentChat = "selected-chat-item";
    }

    return (
      <li className={`chat-item ${highlightCurrentChat}`}>
        <button className="chat-item-button" onClick={this.updateCurrentChat}>
            <h2 className="auth-h2 chat-item-align">{this.props.chat.name}</h2>
            <h3 className="chat-item-align">{authorDisplay + firstMessage.body}</h3>
        </button>
      </li>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
    chat: ownProps.chat,
    currentChatId: state.currentChatData.id,
    firstMessage: firstMessageSelector(state.entities.messages,
        ownProps.chat.firstMessageId),
    currentUserid: state.session.id,
    users: Object.values(state.entities.users),
    chatUsers: Object.values(state.entities.chatUsers)
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentChatId: (id) => dispatch(receiveCurrentChatId(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);
