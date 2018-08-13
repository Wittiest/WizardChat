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
import { usersInChat, userIsInDM} from '../../../actions/selectors';

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
    let chatId = this.props.currentChatId;
    if (this.props.currentChatId === -1) {
      let groupChat = !(this.props.currentChatUsers.length === 1);
      let oldChatId = (groupChat) ||
      (userIsInDM(this.props.chats,
        Object.values(this.props.chatUsers),
        this.props.currentChatUsers[0].id));
      if (!groupChat && oldChatId) {
        this.props.receiveCurrentChatId(oldChatId);
        chatId = oldChatId;
      } else {
        console.log("Create new group chat");
        // CREATE CHAT WITH IS_GROUP_CHAT TRUE
        // CHANGE CURRENT CHAT ID
        // ADD USER ASSOCIATIONS TO DB AND REDUX STATE
      }
      this.props.removeChat(-1);
      this.props.removeNullChatUsers(this.props.chatUsers);
    }
    this.props.createMessage({
      body: this.state.body,
      chatId
    });
    this.setState({body: ''});
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
  removeNullChatUsers: (chatUsers) => dispatch(removeNullChatUsers(chatUsers))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageTextBox);
