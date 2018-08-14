import React from 'react';
import { connect } from 'react-redux';
import { updateChat } from '../../../../actions/chat_actions';
import GroupName from './GroupName';

class Menu extends React.Component {

  render() {
    return (
      <div className="menu-div">
        <div className="menu-header">
          <GroupName />
        </div>
      </div>
    );
  }
}

export default Menu;
