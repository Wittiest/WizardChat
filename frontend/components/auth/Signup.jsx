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
      <div>
        <h1>WizardChat</h1>
        <h2>Sign up for WizardChat!</h2>
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
          <label>Birth Date
            <input
              onChange={this.updateHandler('birth_date')}
              type="date">
            </input>
          </label>
          <br />
          <label>First Name
            <input
              onChange={this.updateHandler('first_name')}
              type="text">
            </input>
          </label>
          <br />
          <label>Last Name
            <input
              onChange={this.updateHandler('last_name')}
              type="text">
            </input>
          </label>
          <br />
          <input
            type="submit"
            value="Sign Up!">
          </input>
        </form>
        <Link to="/">Login Page Link</Link>

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
