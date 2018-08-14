import React from 'react';
import { connect } from 'react-redux';

class Menu extends React.Component {

  render() {
    const { currentChat } = this.props;
    return (
      <div className="menu-div">
        <div className="menu-header">
          {currentChat.name}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentChat: state.entities.chats[state.currentChatData.id]
});

export default connect(mapStateToProps, null)(Menu);
