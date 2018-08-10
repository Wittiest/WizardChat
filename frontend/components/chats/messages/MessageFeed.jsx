import React from 'react';
import MessageItem from './MessageItem';
import Cable from 'actioncable';
import { connect } from 'react-redux';
import { receiveMessage, fetchChat } from '../../../actions/chat_actions';
import {
  selectChatMessages,
  selectChatIdsFromChats
} from '../../../actions/selectors';

class MessageFeed extends React.Component {

  createSocket(currentChatId) {
    let cable;
    if (process.env.NODE_ENV !== 'production') {
      cable = Cable.createConsumer('http://localhost:3000/cable');
    } else {
      cable = Cable.createConsumer('wss://wizard-chat.herokuapp.com/cable');
    }
    this.chats = cable.subscriptions.create({
      channel: "MessagesChannel",
      chatId: currentChatId
    }, {
      connected: () => {
        console.log("CONNECTED!");
      },
      disconnected: () => {
        console.log("---DISCONNECTED---");
      },
      received: (data) => {
        console.log("DATA:", data);
        this.props.receiveMessage(data);
      }
    });
  }

  componentDidMount() {
      this.props.chatIds.forEach((id)=>{
        this.props.fetchChat(id);
        this.createSocket(id);
      });
  }

  render() {
    const messages = this.props.messages;
    return (
      <div className="message-feed">
        {
          messages.map((message, idx)=>{
            return(<MessageItem key={idx} message={message} />);
          })
      };
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return (
    {
      currentChatId: state.currentChatData.id,
      chatIds: selectChatIdsFromChats(Object.values(state.entities.chats)),
      messages: selectChatMessages(state.currentChatData.id, state.entities.messages)
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchChat: (chatId) => dispatch(fetchChat(chatId)),
  receiveMessage: (message) => dispatch(receiveMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageFeed);
