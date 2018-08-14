import React from 'react';
import { connect } from 'react-redux';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  update(e) {
    // action that saves chat and receives back from DB
  }

  focusTextInput(e) {
    e.preventDefault();
    document.getElementById('group-name-input').focus();
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  render() {
    const { currentChat } = this.props;
    return (
      <div className="menu-div">
        <div className="menu-header">
          <form className="group-name-form" onSubmit={this.onSubmit}>
            <input
              id="group-name-input"
              value={currentChat.name}
              onChange={this.update}>
            </input>
            <button
              type="button"
              onClick={this.focusTextInput}
              className="group-name-focus-button">
              <i className="fa fa-edit fa-2x"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentChat: state.entities.chats[state.currentChatData.id]
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
