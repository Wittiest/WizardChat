import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth_actions';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>THIS IS THE CHAT PAGE</h1>
        <button onClick={this.submitHandler}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
