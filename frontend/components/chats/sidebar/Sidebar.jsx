import React from 'react';
import ToolbarContainer from './Toolbar';
import ChatSearchbar from './ChatSearchbar';
import ChatFeed from './ChatFeed';

const Sidebar = () => (
  <div className="sidebar">
    <ToolbarContainer />
    <ChatSearchbar />
    <ChatFeed />
  </div>
);

export default Sidebar;
