import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth_actions';
import { withRouter } from 'react-router';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  render () {
    return (
      <div className="toolbar">
        <button onClick={this.submitHandler}>
          <i className="fa fa-cog" aria-hidden="true"></i>
        </button>
        <h1>WizardChat</h1>
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Toolbar));
