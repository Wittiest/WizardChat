import React from 'react';
import Sidebar from './sidebar/Sidebar';
import MessageIndex from './messages/MessageIndex';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentChat:  20};
  }

  render() {
    return (
      <div className="main-index">
        <Sidebar/>
        <MessageIndex currentChat={this.state.currentChat} />
      </div>
    );
  }
}
export default Index;
