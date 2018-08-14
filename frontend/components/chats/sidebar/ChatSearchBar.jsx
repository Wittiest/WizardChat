import React from 'react';
import { connect } from 'react-redux';
import { receiveSearchQuery } from '../../../actions/ui_actions';

class ChatSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(e) {
    e.preventDefault();
    this.props.receiveSearchQuery(e.target.value);
  }

  render() {
    const { searchQuery } = this.props;
    return (
      <div className="searchbar-holder">
        <label className="searchbar-label">
          <i className="fa fa-search icon-shift" aria-hidden="true"></i>
          <input
            className="searchbar"
            type="text"
            placeholder="Search WizardChat"
            onChange={this.onUpdate}
            value={searchQuery}>
          </input>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchQuery: state.ui.searchQuery
});

const mapDispatchToProps = (dispatch) => ({
  receiveSearchQuery: (searchQuery) => dispatch(receiveSearchQuery(searchQuery))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatSearchBar);
