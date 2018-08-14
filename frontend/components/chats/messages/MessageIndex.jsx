import React from 'react';
import MessageFeed from './MessageFeed';
import MessageTextBoxContainer from './MessageTextBox';
import UserSearchbar from './UserSearchbar';
import { connect } from 'react-redux';
import {
  closeChatMenu,
  openChatMenu
} from '../../../actions/chat_menu_actions';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.menuHandler = this.menuHandler.bind(this);
  }

  menuHandler() {
    if (this.props.menuOpen) {
      this.props.closeChatMenu();
    } else {
      this.props.openChatMenu();
    }
  }

  render() {
    const {currentChatId, currentChat, menuOpen} = this.props;
    if (!currentChatId) {
      return (<div></div>);
    }
    let name = "";
    if (currentChat) {
      name = currentChat.name;
    }
    let menuDiv;
    if (menuOpen) {
      menuDiv = <div className="menu-div"></div>;
    }
    return (
      <div className="message-index">
        <div className="message-index-header">
          {
            (currentChatId === -1) ?
              <UserSearchbar />
              :
              <div className="header-section-div">
                <div className="header-section-h1">
                    <h1>{name}</h1>
                </div>
                <div className="header-section-button">
                  <button
                    className="group-info-button"
                    onClick={this.menuHandler}>
                    <i
                      className="fa fa-info-circle fa-3x"
                      aria-hidden="true">
                    </i>
                  </button>
                </div>
              </div>
          }
        </div>
          <div className="message-index-main-holder">
            <div className="message-index-main">
              <MessageFeed />
              <MessageTextBoxContainer />
            </div>
            {menuDiv}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentChatId: state.currentChatData.id,
  currentChat: state.entities.chats[state.currentChatData.id],
  menuOpen: state.ui.chatMenuOpen
});

const mapDispatchToProps = (dispatch) => ({
  closeChatMenu: () => dispatch(closeChatMenu()),
  openChatMenu: () => dispatch(openChatMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);
