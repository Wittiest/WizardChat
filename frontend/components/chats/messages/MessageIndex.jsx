import React from 'react';
import MessageFeed from './MessageFeed';
import MessageTextBoxContainer from './MessageTextBox';
import UserSearchbar from './UserSearchbar';
import { connect } from 'react-redux';

class MessageIndex extends React.Component {

  render() {
    if (!this.props.currentChatId) {
      return (<div></div>);
    }
    let name = "";
    if (this.props.currentChat) {
      name = this.props.currentChat.name;
    }
    return (
      <div className="message-index">
        <div className="message-index-header">
          {
            (this.props.currentChatId === -1) ?
              <UserSearchbar /> : <h1>{name}</h1>
          }
        </div>
        <MessageFeed />
        <MessageTextBoxContainer />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return (
    {
      currentChatId: state.currentChatData.id,
      currentChat: state.entities.chats[state.currentChatData.id]
    }
  );
};

export default connect(mapStateToProps, null)(MessageIndex);
