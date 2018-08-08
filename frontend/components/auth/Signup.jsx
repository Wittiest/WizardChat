import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth_actions';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {email: '', password: '', birth_date: '01-01-0000',
                  first_name: '', last_name: ''
                };
    this.submitHandler = this.submitHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.signup(this.state);
    this.props.history.push('/chats');
  }

  updateHandler(fieldName) {
    return (e => this.setState({ [fieldName]: e.target.value }));
  }

  render() {
    return (
      <div className="auth-div">
        <h1 className="auth-h1">WizardChat</h1>
        <h2 className="auth-h2">Already have an account?</h2>
        <Link className="auth-h2" to="/">Log In</Link>
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
          <label className="auth-h2">Birthday
            <input
              className="auth-textbox"
              onChange={this.updateHandler('birth_date')}
              type="date">
            </input>
          </label>
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
  signup: (signupDetails) => dispatch(signup(signupDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
