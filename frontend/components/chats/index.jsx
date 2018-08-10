import React from 'react';
import Sidebar from './sidebar/Sidebar';
import MessageIndex from './messages/MessageIndex';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentChatId:  20};
  }

  render() {
    return (
      <div className="main-index">
        <Sidebar/>
        <MessageIndex currentChatId={this.state.currentChatId} />
      </div>
    );
  }
}
export default Index;
