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
      <div className="auth-div">
        <h1 className="auth-h1">WizardChat</h1>
        <h2 className="auth-h2 bigger-margin">Instantly connect with other wizards in your life!</h2>
        <h2 className="auth-h2">No Account?</h2>
        <Link className="auth-h2" to="/signup">Sign Up</Link>
        <ul>
          {
            this.props.errors.map((error, idx)=>{
              return (<p>{error}</p>);
            })
          }
        </ul>
        <form className="auth-form" onSubmit={this.submitHandler}>
            <input
              className="auth-textbox"
              onChange={this.updateHandler('email')}
              type="text"
              placeholder="Email">
            </input>
          <br />
            <input
              className="auth-textbox"
              onChange={this.updateHandler('password')}
              type="password"
              placeholder="Password">
            </input>
          <br />
          <input
            className="auth-button"
            type="submit"
            value="Log In">
          </input>
        </form>
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
