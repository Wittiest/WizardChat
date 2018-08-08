import React from 'react';
import { connect } from 'react-redux';
import { signup, receiveAuthErrors } from '../../actions/auth_actions';
import { Link } from 'react-router-dom';
import AuthHeader from './AuthHeader';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {email: '', password: '',
                  first_name: '', last_name: ''
                };
    this.submitHandler = this.submitHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  updateHandler(fieldName) {
    return (e => this.setState({ [fieldName]: e.target.value }));
  }

  componentWillUnmount() {
    this.props.receiveAuthErrors([]);
    this.props.history.push('/chats');
  }

  render() {
    return (
      <div className="auth-div">
        <AuthHeader />
        <h2 className="auth-h2">Already have an account?</h2>
        <Link className="auth-h2" to="/">Log In</Link>
        {
          this.props.errors.map((error, idx)=>{
            return (<p className="auth-h2 error" key={idx}>{error}</p>);
          })
        }
        <form className="auth-form" onSubmit={this.submitHandler}>
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
            value="Sign Up!">
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
  signup: (signupDetails) => dispatch(signup(signupDetails)),
  receiveAuthErrors: (errors) => dispatch(receiveAuthErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
