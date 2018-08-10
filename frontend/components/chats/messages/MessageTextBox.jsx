import React from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../../../actions/chat_actions';

class MessageTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: '', chatId: props.currentChat};
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  updateHandler(fieldName) {
    return (e => this.setState({ [fieldName]: e.target.value }));
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.createMessage(this.state);
    this.setState({body: '', chatId: this.props.currentChat});
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          className="message-text-box"
          type="text"
          onChange={this.updateHandler('body')}
          placeholder="Type a message!"
          value={this.state.body}>
        </input>
      </form>
    );
  }
}

const mapStateToProps = (state, {currentChat}) => {
  return (
    {currentChat}
  );
};

const mapDispatchToProps = (dispatch) => ({
  createMessage: (message) => dispatch(createMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageTextBox);
