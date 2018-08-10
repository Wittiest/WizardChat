import React from 'react';
import ConversationItem from './ConversationItem';
import { fetchChats } from '../../../actions/chat_actions';
import { connect } from 'react-redux';

const fakeMessage = {
  conversationName: "Troll Hunting Squad",
  lastMessageAuthor: "Harry",
  lastMessageBody: "Hey ron, let's go play with some trolls!",
};
const fakeMessage2 = {
  conversationName: "Death Eaters",
  lastMessageAuthor: "Malfoy",
  lastMessageBody: "I'm going to kill dumbledore!!",
};

class ConversationFeed extends React.Component {
  componentWillMount() {
    this.props.fetchChats();
  }
  render() {
    return (
      <ul className="conversation-feed">
        <ConversationItem message={fakeMessage} />
        <ConversationItem message={fakeMessage2} />
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchChats: () => dispatch(fetchChats()),
});

export default connect(null, mapDispatchToProps)(ConversationFeed);
