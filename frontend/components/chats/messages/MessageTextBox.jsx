import React from 'react';

class MessageTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messageText: ''};
    this.updateHandler = this.updateHandler.bind(this);
  }

  updateHandler(fieldName) {
    return (e => this.setState({ [fieldName]: e.target.value }));
  }

  render() {
    return (
      <form>
        <input
          className="message-text-box"
          type="text"
          onChange={this.updateHandler('messageText')}
          placeholder="Type a message!">
        </input>
      </form>
    );
  }
}

export default MessageTextBox;
