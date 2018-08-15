import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth_actions';
import {
  receiveCurrentChatId,
  receiveNullChat
} from '../../../actions/chat_actions';
import { closeChatMenu } from '../../../actions/ui_actions';
class Toolbar extends React.Component {

  constructor(props) {
    super(props);
    this.gearSubmitHandler = this.gearSubmitHandler.bind(this);
    this.newChatHandler = this.newChatHandler.bind(this);
  }

  newChatHandler(e) {
    e.preventDefault();
    this.props.closeChatMenu();
    const newMessageChat = {
      id: -1,
      firstMessageId: Number.MAX_SAFE_INTEGER,
      isGroupChat: false,
      name: "New Message"
    };
    this.props.receiveNullChat(newMessageChat);
    this.props.receiveCurrentChatId(newMessageChat.id);
  }

  gearSubmitHandler(e) {
    e.preventDefault();
    this.props.logout();
  }

  render () {
    return (
      <div className="toolbar">
        <button className="fa-button" onClick={this.gearSubmitHandler}>
          <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
        </button>
        <h1>WizardChat</h1>
        <button className="fa-button" onClick={this.newChatHandler}>
          <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  closeChatMenu: () => dispatch(closeChatMenu()),
  receiveCurrentChatId: (id) => dispatch(receiveCurrentChatId(id)),
  receiveNullChat: (chat) => dispatch(receiveNullChat(chat))
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
