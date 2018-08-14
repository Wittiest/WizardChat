import React from 'react';
import { connect } from 'react-redux';
import { updateChat } from '../../../../actions/chat_actions';
import GroupName from './GroupName';
import UserNickname from './UserNickname';

class Menu extends React.Component {

  render() {
    return (
      <div className="menu-div">
          <GroupName />
          <UserNickname />
      </div>
    );
  }
}

export default Menu;
