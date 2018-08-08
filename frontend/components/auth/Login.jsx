import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth_actions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {email: '', password: ''};
    this.submitHandler = this.submitHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.login(this.state);
    this.props.history.push('/chats');
  }

  updateHandler(fieldName) {
    return (e => this.setState({ [fieldName]: e.target.value }));
  }

  render() {
    return (
      <div>
        <h1>WizardChat</h1>
        <h2>Instantly connect with other wizards!</h2>
        <h2>Sign in with WizardChat to get started.</h2>
        <ul>
          {
            this.props.errors.map((error, idx)=>{
              return (<p>{error}</p>);
            })
          }
        </ul>
        <form onSubmit={this.submitHandler}>
          <label>Email
            <input
              onChange={this.updateHandler('email')}
              type="text">
            </input>
          </label>
          <br />
          <label>Password
            <input
              onChange={this.updateHandler('password')}
              type="password">
            </input>
          </label>
          <br />
          <input
            type="submit"
            value="Log In">
          </input>
        </form>
        <Link to="/signup">Signup Page Link</Link>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: (loginDetails) => dispatch(login(loginDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
