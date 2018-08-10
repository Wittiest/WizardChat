import React from 'react';
import MessageItem from './MessageItem';
import Cable from 'actioncable';
import { connect } from 'react-redux';
import { receiveMessage, fetchChat } from '../../../actions/chat_actions';

class MessageFeed extends React.Component {

  constructor(props) {
    super(props);
  }

  createSocket() {
    let cable = Cable.createConsumer('http://localhost:3000/cable');
    this.chats = cable.subscriptions.create({
      channel: "MessagesChannel",
      chatId: this.props.currentChatId
    }, {
      connected: () => {
        console.log("CONNECTED!");
      },
      disconnected: () => {
        console.log("---DISCONNECTED---");
      },
      received: (data) => {
        data.chatId = this.props.currentChatId;
        this.props.receiveMessage(data);
        this.render();
      }
    });
  }

  componentWillMount() {
    this.props.fetchChat(this.props.currentChatId);
    this.createSocket();
  }

  render() {
    const messages = this.props.messages;
    return (
      <div className="message-feed">
        {
          Object.values(messages).map((message, idx)=>{
            return(<MessageItem key={idx} message={message} />);
          })
      };
      </div>
    );
  }
}


const mapStateToProps = (state, {currentChatId}) => {
  return (
    {
      currentChatId,
      messages: state.entities.messages
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchChat: (chatId) => dispatch(fetchChat(chatId)),
  receiveMessage: (message) => dispatch(receiveMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageFeed);
