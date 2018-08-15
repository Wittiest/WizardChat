import React from 'react';
import { connect } from 'react-redux';
import { updateChatUser } from '../../../../actions/chat_user_actions';
import { getUserNickname, selectChatUser } from '../../../../actions/selectors';

class UserNickNameItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonSubmit: false,
      name: props.userNickname,
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
    document.getElementById(`user-item-${this.props.user.id}`).focus();
    this.setState({ buttonSubmit: true });
  }

  updateChatUser() {
    const newChatUser = this.props.currentChatUser;
    newChatUser.userNickname = this.state.name;
    this.props.updateChatUser(newChatUser);
  }

  onSubmit(e) {
    e.preventDefault();
    this.updateChatUser();
    document.getElementById(`user-item-${this.props.user.id}`).blur();
  }

  onFocusInput(e) {
    this.setState({ buttonSubmit: true });
  }

  onBlurInput(e) {
    e.preventDefault();
    this.updateChatUser();
    this.setState({ buttonSubmit: false });
  }

  saveButton() {
    return (
      <div
        className="force-button-width group-name-focus-button">
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
    const { currentChat, user } = this.props;
    const button = this.state.buttonSubmit ?
      (this.saveButton()) : (this.editButton());
    return (
      <li className="user-nickname-item">
          <form className="group-name-form" onSubmit={this.onSubmit}>
            <input
              className="user-item"
              id={`user-item-${user.id}`}
              value={this.state.name}
              onChange={this.update}
              onFocus={this.onFocusInput}
              onBlur={this.onBlurInput}>
            </input>
            {button}
          </form>
      </li>
    );
  }
}

const mapStateToProps = ({entities, currentChatData}, {user}) => ({
  currentChatUser: selectChatUser(Object.values(entities.chatUsers),
    user.id, currentChatData.id),
  user,
  userNickname: getUserNickname(Object.values(entities.chatUsers),
    user.id, currentChatData.id)
});

const mapDispatchToProps = (dispatch) => ({
  updateChatUser: (chatUser) => dispatch(updateChatUser(chatUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNickNameItem);
