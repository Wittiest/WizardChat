import React from 'react';
import ToolbarContainer from './Toolbar';
import Searchbar from './Searchbar';
import ConversationFeed from './ConversationFeed';

class Sidebar extends React.Component {
  render () {
    return (
      <div className="sidebar">
        <ToolbarContainer />
        <Searchbar />
        <ConversationFeed />
      </div>
    );
  }
}

export default Sidebar;
