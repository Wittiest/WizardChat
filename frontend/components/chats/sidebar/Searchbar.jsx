import React from 'react';

/*
- Gear button for dropdown
- Title
- button to create a new message
*/
const Searchbar = () => (
  <div className="searchbar-holder">
    <label className="searchbar-label">
      <i className="fa fa-search icon-shift" aria-hidden="true"></i>
      <input
        className="searchbar"
        type="text"
        placeholder="Search WizardChat">
      </input>
    </label>
  </div>
);

export default Searchbar;
