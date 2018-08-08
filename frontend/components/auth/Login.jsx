import React from 'react';
import { connect } from 'react-redux';
import { login, receiveAuthErrors } from '../../actions/auth_actions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {email: '', password: ''};
    this.demo = {email: 'harry@hogwarts.edu', password: '123456'};

    this.submitHandler = this.submitHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
    this.demoHandler = this.demoHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.login(this.state);
    this.props.history.push('/chats');
  }

  demoHandler(e) {
    e.preventDefault();
    this.props.login(this.demo);
    this.props.history.push('/chats');
  }
  updateHandler(fieldName) {
    return (e => this.setState({ [fieldName]: e.target.value }));
  }

  componentWillUnmount() {
    this.props.receiveAuthErrors([]);
  }

  render() {
    return (
      <div className="auth-div">
        <img className="auth-logo" src="https://i.imgur.com/eqCpW4e.png"></img>
        <h1 className="auth-h1">WizardChat</h1>
          <h2 className="auth-h2 bigger-margin">Instantly connect
              with other wizards in your life!</h2>
        <h2 className="auth-h2">No Account?</h2>
        <Link className="auth-h2" to="/signup">Sign Up</Link>
        {
          this.props.errors.map((error, idx)=>{
            return (<p className="auth-h2 error" key={idx}>{error}</p>);
          })
        }
        <form className="auth-form" onSubmit={this.submitHandler}>
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
            value="Log In">
          </input>
        </form>
        <button
          className="auth-button"
          onClick={this.demoHandler}>
          Demo Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: (loginDetails) => dispatch(login(loginDetails)),
  receiveAuthErrors: (errors) => dispatch(receiveAuthErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
