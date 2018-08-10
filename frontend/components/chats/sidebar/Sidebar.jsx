import React from 'react';
import ToolbarContainer from './Toolbar';
import Searchbar from './Searchbar';
import ChatFeed from './ChatFeed';

class Sidebar extends React.Component {
  render () {
    return (
      <div className="sidebar">
        <ToolbarContainer />
        <Searchbar />
        <ChatFeed />
      </div>
    );
  }
}

export default Sidebar;
