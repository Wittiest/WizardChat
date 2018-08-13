import React from 'react';
import ChatItem from './ChatItem';
import { fetchChats } from '../../../actions/chat_actions';
import { connect } from 'react-redux';
import { selectChatsInOrder } from '../../../actions/selectors';

class ChatFeed extends React.Component {
  componentWillMount() {
    this.props.fetchChats();
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

const mapStateToProps = (state) => {
  return ({
    orderedChats: selectChatsInOrder(state.entities.chats)
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchChats: () => dispatch(fetchChats())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatFeed);
