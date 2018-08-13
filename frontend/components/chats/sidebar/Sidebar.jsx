import React from 'react';
import ToolbarContainer from './Toolbar';
import ChatSearchBar from './ChatSearchBar';
import ChatFeed from './ChatFeed';

const Sidebar = () => (
  <div className="sidebar">
    <ToolbarContainer />
    <ChatSearchBar />
    <ChatFeed />
  </div>
);

export default Sidebar;
