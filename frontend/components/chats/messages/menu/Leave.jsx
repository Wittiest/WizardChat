import React from 'react';
import { connect } from 'react-redux';
import { deleteChatUser } from '../../../../actions/chat_user_actions';
import { receiveCurrentChatId  } from '../../../../actions/chat_actions';
import {
  selectChatUser,
  selectNewCurrentChat
} from '../../../../actions/selectors';
import { closeChatMenu } from '../../../../actions/ui_actions';

class Leave extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.closeChatMenu();
    const newChatId = receiveCurrentChatId(this.props.chats,
      this.props.currentChatId);
    this.props.deleteChatUser(this.props.chatUserId);
    this.props.receiveCurrentChatId(newChatId);
  }

  render() {
    return (
      <div className="leave-group-div">
        <button
          className="leave-group-button"
          onClick={this.onSubmit}>
          Leave Group Chat
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({session, entities, currentChatData}) => {
  const chatUser = selectChatUser(Object.values(entities.chatUsers),
  session.id, currentChatData.id);
  const chatUserId = chatUser ? chatUser.id : null;
  return ({
    chatUserId,
    currentChatId: currentChatData.id,
    chats: entities.chats
  });
};

const mapDispatchToProps = (dispatch) => ({
  closeChatMenu: () => dispatch(closeChatMenu()),
  deleteChatUser: (chatUserId) => dispatch(deleteChatUser(chatUserId)),
  receiveCurrentChatId: (chatId) => dispatch(receiveCurrentChatId(chatId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Leave);
