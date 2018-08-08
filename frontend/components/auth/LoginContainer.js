import { connect } from 'react-redux';
import { login, receiveAuthErrors } from '../../actions/auth_actions';
import AuthForm from './AuthForm';

const mapStateToProps = (state) => ({
  errors: state.errors,
  user: {email: '', password: ''},
  formType: 'login',
  questionText: "No Account?",
  altLinkPath: '/signup',
  linkText: "Sign Up!",
  buttonText: "Log In"
});

const mapDispatchToProps = (dispatch) => ({
  action: (loginDetails) => dispatch(login(loginDetails)),
  receiveAuthErrors: (errors) => dispatch(receiveAuthErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
