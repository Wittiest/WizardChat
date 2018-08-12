import React from 'react';
import { connect } from 'react-redux';

class UserSearchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: '', chosenUserIds: []};
    this.updateHandler = this.updateHandler.bind(this);
  }

  updateHandler(fieldName) {
    // Edit to do live search queries
    return (e => this.setState({ [fieldName]: e.target.value }));
  }

  render() {
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
      </div>
    );
  }
}

export default connect(null, null)(UserSearchbar);
