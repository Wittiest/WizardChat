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
          className="auth-textbox"
          onChange={this.updateHandler('first_name')}
          type="text"
          placeholder="First name">
        </input>
        <input
          className="auth-textbox"
          onChange={this.updateHandler('last_name')}
          type="text"
          placeholder="Last name">
        </input>
      </div>);
    }
  }

  render() {
    const loginInput = this.renderLoginInputs();
    const signupInputs = this.renderSignupInputs();
    return (
      <div className="auth-div">
        <AuthHeader />
        <h2 className="auth-h2">{this.props.questionText}</h2>
        <Link
          className="auth-h2"
          to={this.props.altLinkPath}
          >{this.props.linkText}
        </Link>
        <AuthErrors errors={this.props.errors}/>
        <form className="auth-form" onSubmit={this.submitHandler}>
          {signupInputs}
          <input
            className="auth-textbox"
            onChange={this.updateHandler('email')}
            type="text"
            placeholder="Email">
          </input>
          <input
            className="auth-textbox"
            onChange={this.updateHandler('password')}
            type="password"
            placeholder="Password">
          </input>
          <input
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
