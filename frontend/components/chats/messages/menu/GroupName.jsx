import React from 'react';
import { connect } from 'react-redux';
import { updateChat } from '../../../../actions/chat_actions';


class GroupName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonSubmit: false,
      name: props.currentChat.name,
    };

    this.update = this.update.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
    this.onFocusInput = this.onFocusInput.bind(this);
    this.onBlurInput = this.onBlurInput.bind(this);
  }

  update(e) {
    this.setState({ name: e.target.value});
  }

  focusTextInput(e) {
    e.preventDefault();
    document.getElementById('group-name-input').focus();
    this.setState({ buttonSubmit: true });
  }

  updateChat() {
    const newChat = this.props.currentChat;
    newChat.name = this.state.name;
    this.props.updateChat(newChat);
  }

  onSubmit(e) {
    e.preventDefault();
    this.updateChat();
    document.getElementById('group-name-input').blur();
  }

  onFocusInput(e) {
    this.setState({ buttonSubmit: true });
  }

  onBlurInput(e) {
    e.preventDefault();
    this.updateChat();
    this.setState({ buttonSubmit: false });
    // SetTimeout necessary to prevent double click of editButton after clicking
    // save
  }

  saveButton() {
    return (
      <div
        className="group-name-focus-button">
        <i className="fa fa-save fa-lg"></i>
      </div>
    );
  }

  editButton() {
    return (
      <button
        type="button"
        onClick={this.focusTextInput}
        className="group-name-focus-button">
        <i className="fa fa-edit fa-2x"></i>
      </button>
    );
  }

  render() {
    const { currentChat } = this.props;
    const button = this.state.buttonSubmit ?
      (this.saveButton()) : (this.editButton());
    return (
      <div className="menu-header">
        {/*TODO Display group image in clickable button that can upload new image*/}
        <form className="group-name-form" onSubmit={this.onSubmit}>
          <input
            id="group-name-input"
            value={this.state.name}
            onChange={this.update}
            onFocus={this.onFocusInput}
            onBlur={this.onBlurInput}>
          </input>
          {button}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentChat: state.entities.chats[state.currentChatData.id]
});

const mapDispatchToProps = (dispatch) => ({
  updateChat: (chat) => dispatch(updateChat(chat))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupName);
