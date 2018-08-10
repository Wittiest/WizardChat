import React from 'react';
import ChatItem from './ChatItem';
import {
  fetchChats,
  receiveCurrentChatId
} from '../../../actions/chat_actions';
import { connect } from 'react-redux';
import { selectChatsInOrder } from '../../../actions/selectors';
class ChatFeed extends React.Component {
  componentWillMount() {
    this.props.fetchChats();
  }

  componentDidUpdate() {
    const orderedChats = this.props.orderedChats;
    console.log("ORDERED_CHATS", orderedChats);
    if (orderedChats.length > 0) {
      console.log("SETTING", orderedChats[0].id);
      this.props.receiveCurrentChatId(orderedChats[0].id);
    }
  }
  render() {
    const orderedChats = this.props.orderedChats;
    return (
      <ul className="chat-feed">
        {
          Object.values(orderedChats).map((chat)=>{
            return(<ChatItem key={chat.id} chat={chat} />);
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  orderedChats: selectChatsInOrder(state.entities.chats)
});

const mapDispatchToProps = (dispatch) => ({
  fetchChats: () => dispatch(fetchChats()),
  receiveCurrentChatId: (chatId) => dispatch(receiveCurrentChatId(chatId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatFeed);
