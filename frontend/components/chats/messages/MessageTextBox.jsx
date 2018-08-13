import React from 'react';
import { connect } from 'react-redux';
import {
  createMessage,
  createChat,
  receiveCurrentChatId,
  removeChat
} from '../../../actions/chat_actions';
import {
  receiveChatUser,
  removeNullChatUsers
} from '../../../actions/chat_user_actions';
import {
  usersInChat,
  userIsInDM,
  selectSelectedGroupMemberIds
} from '../../../actions/selectors';

class MessageTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: ''};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  updateHandler(fieldName) {
    return (
      e => {
        if (this.props.currentChatId !== -1 ||
          (this.props.currentChatUsers.length > 0)) {
          this.setState({ [fieldName]: e.target.value });
        }
      }
    );
  }

  submitHandler(e) {
    e.preventDefault();
    if (this.state.body.length === 0) {
      return ;
    }
    if (this.props.currentChatId === -1) {
      let groupChat = !(this.props.currentChatUsers.length === 1);
      let oldChatId = (groupChat) ||
      (userIsInDM(this.props.chats,
        Object.values(this.props.chatUsers),
        this.props.currentChatUsers[0].id));
      if (!groupChat && oldChatId) {
        this.props.receiveCurrentChatId(oldChatId);
        this.props.createMessage({
          body: this.state.body,
          chatId: oldChatId
        });
        this.setState({body: ''});
      } else {
        this.props.createChat(
          {
            chat: {
              is_group_chat: groupChat,
            },
            message: {
              body: this.state.body
            },
            chatUserIds:
            selectSelectedGroupMemberIds(Object.values(this.props.chatUsers))
          }
      );
      }
      this.props.removeChat(-1);
      this.props.removeNullChatUsers(this.props.chatUsers);
    } else {
      this.props.createMessage({
        body: this.state.body,
        chatId: this.props.currentChatId
      });
      this.setState({body: ''});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentChatId !== nextProps.currentChatId) {
      this.setState({body: ''});
    }
  }

  render() {
    return (
      <form className="message-text-box" onSubmit={this.submitHandler}>
        <input
          type="text"
          className="message-input"
          onChange={this.updateHandler('body')}
          placeholder="Type a message..."
          value={this.state.body}
          ref = {(input) => {this.messageInput = input; }}>
        </input>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currentChatId: state.currentChatData.id,
  currentChatUsers: usersInChat(state.currentChatData.id,
    Object.values(state.entities.chatUsers), state.entities.users),
  chatUsers: state.entities.chatUsers,
  chats: state.entities.chats
});

const mapDispatchToProps = (dispatch) => ({
  createMessage: (message) => dispatch(createMessage(message)),
  receiveCurrentChatId: (chatId) => dispatch(receiveCurrentChatId(chatId)),
  removeChat: (chatId) => dispatch(removeChat(chatId)),
  removeNullChatUsers: (chatUsers) => dispatch(removeNullChatUsers(chatUsers)),
  createChat: (chatData) => dispatch(createChat(chatData))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageTextBox);
