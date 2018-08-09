import React from 'react';
import Sidebar from './sidebar/Sidebar';
import MessageIndex from './messages/MessageIndex';

class Index extends React.Component {

  render() {
    return (
      <div className="main-index">
        <Sidebar/>
        <MessageIndex />
      </div>
    );
  }
}
export default Index;
