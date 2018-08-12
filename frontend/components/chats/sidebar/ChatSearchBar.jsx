import React from 'react';

const ChatSearchbar = () => (
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

export default ChatSearchbar;
