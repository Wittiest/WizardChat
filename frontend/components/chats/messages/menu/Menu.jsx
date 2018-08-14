import React from 'react';
import { connect } from 'react-redux';
import { updateChat } from '../../../../actions/chat_actions';
import GroupName from './GroupName';
import UserManager from './UserManager';
import Leave from './Leave';

class Menu extends React.Component {

  render() {
    return (
      <div className="menu-div">
          <GroupName />
          <UserManager />
          <Leave />
      </div>
    );
  }
}

export default Menu;
