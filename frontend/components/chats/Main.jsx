import React from 'react';
import Sidebar from './sidebar/Sidebar';
import MessageIndex from './messages/MessageIndex';

const Main = () => (
  <div className="main-index">
    <Sidebar/>
    <MessageIndex />
  </div>
);

export default Main;
