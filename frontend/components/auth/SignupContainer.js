import { connect } from 'react-redux';
import { signup, receiveAuthErrors } from '../../actions/auth_actions';
import AuthForm from './AuthForm';

const mapStateToProps = (state) => ({
  errors: state.errors,
  user: {email: '', password: '', first_name: '', last_name: ''},
  formType: 'signup',
  questionText: "Already have an account?",
  altLinkPath: '/login',
  linkText: "Log in!",
  buttonText: "Sign up"
});

const mapDispatchToProps = (dispatch) => ({
  action: (signupDetails) => dispatch(signup(signupDetails)),
  receiveAuthErrors: (errors) => dispatch(receiveAuthErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
