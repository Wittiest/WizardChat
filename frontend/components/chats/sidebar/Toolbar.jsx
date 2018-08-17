import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth_actions';
import {
  receiveCurrentChatId,
  receiveNullChat
} from '../../../actions/chat_actions';
import { closeChatMenu } from '../../../actions/ui_actions';
import { updateUser } from '../../../actions/user_actions';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { menuOpen: false, modalOpen: false,
      photoUrl: this.props.photoUrl, profile_image: null};
    this.gearSubmitHandler = this.gearSubmitHandler.bind(this);
    this.newChatHandler = this.newChatHandler.bind(this);
    this.generateMenu = this.generateMenu.bind(this);
    this.logoutSubmitHandler = this.logoutSubmitHandler.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.generateModal = this.generateModal.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  newChatHandler(e) {
    e.preventDefault();
    this.props.closeChatMenu();
    const newMessageChat = {
      id: -1,
      firstMessageId: Number.MAX_SAFE_INTEGER,
      isGroupChat: false,
      name: "New Message"
    };
    this.props.receiveNullChat(newMessageChat);
    this.props.receiveCurrentChatId(newMessageChat.id);
  }

  logoutSubmitHandler(e) {
    e.preventDefault();
    this.props.logout();
  }

  gearSubmitHandler(e) {
    e.preventDefault();
    this.setState({ menuOpen: !this.state.menuOpen});
  }

  toggleModal() {
    this.setState({modalOpen: !this.state.modalOpen});
    this.setState({menuOpen: false});
  }

  generateMenu() {
    if (this.state.menuOpen) {
      return (
        <div className="gear-menu">
          <button
            className="gear-menu-button"
            onClick={this.toggleModal}>
            Settings
          </button>
          <button
            className="gear-menu-button"
            onClick={this.logoutSubmitHandler}>
            Logout
          </button>
        </div>
      );
    }
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({profile_image: file, photoUrl: fileReader.result});
      const formData = new FormData();
      formData.append('user[profile_image]', file);
      this.props.updateUser(formData);
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  generateModal() {
    if (this.state.modalOpen) {
      let preview;
      if (this.state.photoUrl) {
        preview = {backgroundImage: `url(${this.state.photoUrl})`};
      } else {
        preview = {backgroundImage: `url(${this.props.photoUrl})`};
      }
      return (
        <div className="modal">
          <div className="modal-menu-div">
            <div className="title-modal-menu-div">
              <h2 className="bold-h2">Settings</h2>
              <button
                className="modal-button"
                onClick={this.toggleModal}>
                Done
              </button>
            </div>
            <input
              id = "file-input"
              type="file"
              className="hidden"
              onChange={this.handleFile}/>
            <label
              htmlFor="file-input"
              className="photo-edit-label"
              style={preview}>
              EDIT
            </label>
          </div>
        </div>
      );
    }
  }

  render () {
    const menu = this.generateMenu();
    const modal = this.generateModal();
    return (
      <div className="toolbar">
        {modal}
        {menu}
        <button className="fa-button" onClick={this.gearSubmitHandler}>
          <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
        </button>
        <h1>WizardChat</h1>
        <button className="fa-button" onClick={this.newChatHandler}>
          <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[state.session.id];
  const photoUrl = (user) ? user.imageUrl : null;
  return ({
      user,
      errors: state.errors,
      photoUrl
    });
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  closeChatMenu: () => dispatch(closeChatMenu()),
  receiveCurrentChatId: (id) => dispatch(receiveCurrentChatId(id)),
  receiveNullChat: (chat) => dispatch(receiveNullChat(chat)),
  updateUser: (user, id) => dispatch(updateUser(user, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
