import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth_actions';
import {
  receiveCurrentChatId,
  receiveNullChat
} from '../../../actions/chat_actions';
import { withRouter } from 'react-router';

class Toolbar extends React.Component {

  constructor(props) {
    super(props);
    this.gearSubmitHandler = this.gearSubmitHandler.bind(this);
    this.newChatHandler = this.newChatHandler.bind(this);
  }

  newChatHandler(e) {
    e.preventDefault();
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
    this.props.history.push('/');
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


const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  receiveCurrentChatId: (id) => dispatch(receiveCurrentChatId(id)),
  receiveNullChat: (chat) => dispatch(receiveNullChat(chat))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Toolbar));
