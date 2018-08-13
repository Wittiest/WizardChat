import React from 'react';
import { connect } from 'react-redux';
import { selectSearchResultUsers } from '../../../actions/selectors';
import { receiveChatUser } from '../../../actions/chat_user_actions';
import { safeNumberGenerator } from '../../../actions/generator';

class UserSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.addUserToGroup = this.addUserToGroup.bind(this);
  }

  addUserToGroup(user) {
    return ((e) => {
      e.preventDefault();
      const id = safeNumberGenerator(this.props.chatUsers);
      const selectedUserMarker = {
        chatId: -1,
        userId: user.id,
        id
      };
      this.props.receiveChatUser(selectedUserMarker);
    });
  }

  render() {
    const { loading, users } = this.props;

    return (
      <div className="user-search-results">
        {loading ? (
          <div className="loading-users">
            <i className="fa fa-magic fa-spin fa-2x fa-fw"></i>
            <h2 className="loading-h2">Searching...</h2>
          </div>
        ) : (
          <ul className="search-user-list">
            {
              users.map((user, idx)=>{
                return (
                  <li key={idx} >
                    <button
                      className="user-select"
                      onClick={this.addUserToGroup(user)}>
                      {`${user.firstName} ${user.lastName}`}
                    </button>
                  </li>
                );
              })
            }
          </ul>
        )}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  users: selectSearchResultUsers(
  state.entities.users, Object.values(state.entities.chatUsers)),
  loading: state.ui.loading,
  chatUsers: state.entities.chatUsers
});

const mapDispatchToProps = (dispatch) => ({
  receiveChatUser: (userMarker) => dispatch(receiveChatUser(userMarker))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchResults);
