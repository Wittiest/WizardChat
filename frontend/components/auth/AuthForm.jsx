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
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.action(this.state);
    if (this.props.formType === 'login') {
      this.props.history.push('/chats');
    }
  }

  demoHandler(e) {
    e.preventDefault();
    // TODO Complete ghost-typing with setTimeout for demo login
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
      return (<div>
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
          {/* TODO 5 buttons with different wizard hats to choose for default wizard hat*/}
          {/*TODO Option to upload own avatar image w / preview*/}
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
