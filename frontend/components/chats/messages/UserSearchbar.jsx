import React from 'react';
import { connect } from 'react-redux';
import {
  searchUsers,
  purgeSearch,
} from '../../../actions/user_actions';
import { removeChatUser } from '../../../actions/chat_user_actions';
import UserSearchResults from './UserSearchResults';
import {
  usersInChat,
  selectNullChatMembershipId
} from '../../../actions/selectors';

class UserSearchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: '', chosenUserIds: []};
    this.updateHandler = this.updateHandler.bind(this);
    this.removeAssociation = this.removeAssociation.bind(this);
  }

  updateHandler(fieldName) {
    return ((e) => {
      e.preventDefault();
      this.setState({ [fieldName]: e.target.value });
      this.props.purgeSearch();
      this.props.searchUsers(e.target.value);
    });
  }

  removeAssociation(userId) {
    return ((e) => {
      e.preventDefault();
      const assocId = selectNullChatMembershipId(userId, this.props.chatUsers);
      this.props.removeChatUser(assocId);
    });
  }

  componentWillReceiveProps(newProps) {
    const oldSelected = this.props.currentlySelectedUsers;
    const newSelected = newProps.currentlySelectedUsers;
    let equal = oldSelected.length === newSelected.length;
    if (equal) {
      for (let i = 0; i < oldSelected.length; i++) {
        if (oldSelected[i].id !== newSelected[i].id) {
          equal = false;
          break;
        }
      }
    }
    if (!equal) {
      this.setState({ search: '' });
    }
  }

  render() {
    let searchResults;
    let selectedUsers = (
        <ul className="selected-users">
          {
            this.props.currentlySelectedUsers.map(
              (user)=>(
                <button
                  key ={user.id}
                  className="selected-user"
                  onClick={this.removeAssociation(user.id)}>
                  {user.firstName}
                </button>
              )
            )
          }
        </ul>
      );
    if (this.state.search.length > 0) {
      searchResults = <UserSearchResults />;
    }
    return (
      <div className='user-search-div'>
        <form
          autoComplete = "off"
          className="user-search-form"
          onSubmit={e=>e.preventDefault()}>
          <label>To:</label>
          {selectedUsers}
          <input
            id="user-search-input"
            type="text"
            onChange={this.updateHandler('search')}
            placeholder="Type the name of a wizard..."
            value={this.state.search}>
          </input>
        </form>
        {searchResults}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentlySelectedUsers: usersInChat(
    -1,
    Object.values(state.entities.chatUsers),
    state.entities.users),
  chatUsers: state.entities.chatUsers
});

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => dispatch(searchUsers(query)),
  purgeSearch: () => dispatch(purgeSearch()),
  removeChatUser: (chatUserId) => dispatch(removeChatUser(chatUserId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchbar);
