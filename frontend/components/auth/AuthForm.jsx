import React from 'react';
import { Link } from 'react-router-dom';
import AuthHeader from './AuthHeader';
import AuthErrors from './AuthErrors';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.user;
    this.demo = {email: 'harry@hogwarts.edu', password: '123456'};

    this.submitHandler = this.submitHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
    this.demoHandler = this.demoHandler.bind(this);
    this.renderLoginInputs = this.renderLoginInputs.bind(this);
    this.renderSignupInputs = this.renderSignupInputs.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  createNewMessageChat() {
    const newMessageChat = {
      id: -1,
      firstMessageId: Number.MAX_SAFE_INTEGER,
      isGroupChat: false,
      name: "New Message"
    };
    this.props.receiveNullChat(newMessageChat);
    this.props.receiveCurrentChatId(newMessageChat.id);
  }

  submitHandler(e) {
    e.preventDefault();
    if (this.props.formType === 'signup') {
      const formData = new FormData();
      formData.append('user[email]', this.state.email);
      formData.append('user[password]', this.state.password);
      formData.append('user[first_name]', this.state.first_name);
      formData.append('user[last_name]', this.state.last_name);
      formData.append('user[profile_image]', this.state.profile_image);
      this.props.action(formData);
      this.createNewMessageChat();
    } else {
      this.props.history.push('/chats');
      this.props.action(this.state);
    }
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({profile_image: file, photoUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  demoHandler(e) {
    e.preventDefault();
    // TODO Complete ghost-typing with setTimeout for demo login
    // Add 4 default colored hats to choose from for a wizard, hover = name
    this.props.action(this.demo);
    this.props.history.push('/chats');
  }

  updateHandler(fieldName) {
    return (e => this.setState({ [fieldName]: e.target.value }));
  }

  componentWillUnmount() {
    this.props.receiveAuthErrors([]);
    if (this.props.formType === 'signup') {
      this.props.history.push('/chats');
    }
  }

  renderLoginInputs() {
    if (this.props.formType === 'login') {
      return (
        <button
          className="auth-button"
          onClick={this.demoHandler}>
          Demo Login
        </button>
      );
    }
  }

  renderSignupInputs() {
    if (this.props.formType === 'signup') {
      const preview = this.state.photoUrl ?
      {backgroundImage: `url(${this.state.photoUrl})`}: {};
      return (<div>
        <input
          id = "file-input"
          type="file"
          className="hidden"
          onChange={this.handleFile}/>
        <label htmlFor="file-input" className="photo-input" style={preview}>
          Upload
        </label>
        <input
          required
          className="auth-textbox"
          onChange={this.updateHandler('first_name')}
          type="text"
          placeholder="First name">
        </input>
        <input
          required
          className="auth-textbox"
          onChange={this.updateHandler('last_name')}
          type="text"
          placeholder="Last name">
        </input>
      </div>);
    }
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return <AuthErrors errors={this.props.errors}/>;
    } else {
      return <div className="empty_error"><p></p></div>;
    }
  }

  render() {
    const loginInput = this.renderLoginInputs();
    const signupInputs = this.renderSignupInputs();
    const errors = this.renderErrors();
    return (
      <div className="auth-div">
        <AuthHeader />
        <h2 className="auth-h2">{this.props.questionText}</h2>
        <Link
          className="auth-h2"
          to={this.props.altLinkPath}
          >{this.props.linkText}
        </Link>
        {errors}
        <form className="auth-form" onSubmit={this.submitHandler}>
          {signupInputs}
          <input
            required
            className="auth-textbox"
            onChange={this.updateHandler('email')}
            type="text"
            placeholder="Email">
          </input>
          <input
            required
            className="auth-textbox"
            onChange={this.updateHandler('password')}
            type="password"
            placeholder="Password">
          </input>
          <input
            required
            className="auth-button"
            type="submit"
            value={this.props.buttonText}>
          </input>
        </form>
        {loginInput}
      </div>
    );
  }
}

export default AuthForm;
