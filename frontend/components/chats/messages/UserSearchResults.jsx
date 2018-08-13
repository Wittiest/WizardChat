import React from 'react';
import { connect } from 'react-redux';


const UserSearchResults = ({ loading, users }) => {
  let loadCircle;
  // if (loading) {
    loadCircle = (
      <div className="loading-users">
        <i className="fa fa-magic fa-spin fa-2x fa-fw"></i>
        <h2 className="loading-h2">Searching...</h2>
      </div>
    );
  // }
  return (
    <div className="user-search-results">
      {loadCircle}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.entities.users,
  loading: state.ui.loading
});

export default connect(mapStateToProps, null)(UserSearchResults);
