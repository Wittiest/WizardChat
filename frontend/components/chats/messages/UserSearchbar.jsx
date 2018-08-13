import React from 'react';
import { connect } from 'react-redux';
import { searchUsers, purgeSearch } from '../../../actions/user_actions';
import UserSearchResults from './UserSearchResults';

class UserSearchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: '', chosenUserIds: []};
    this.updateHandler = this.updateHandler.bind(this);
  }

  updateHandler(fieldName) {
    return ((e) => {
      this.setState({ [fieldName]: e.target.value });
      this.props.purgeSearch();
      this.props.searchUsers(e.target.value);
    });
  }

  render() {
    let searchResults;
    if (this.state.search.length > 0) {
      searchResults = <UserSearchResults />;
    }
    return (
      <div className='user-search-div'>
        <form className="user-search-form">
          <label>To:
          </label>
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

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => dispatch(searchUsers(query)),
  purgeSearch: () => dispatch(purgeSearch())
});

export default connect(null, mapDispatchToProps)(UserSearchbar);
