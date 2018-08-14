import React from 'react';
import { connect } from 'react-redux';
import { usersInChat } from '../../../../actions/selectors';
import UserNickNameItem from './UserNickNameItem';

class UserManager extends React.Component {
  render() {
    return (
        <ul className="menu-users">
          <label className="menu-h1">Wizards</label>
          {
            this.props.users.map((user)=>(
              <UserNickNameItem key={user.id} user={user}/>
            ))
          }
        </ul>
    );
  }
}

const mapStateToProps = ({entities, currentChatData}) => ({
  users: usersInChat(currentChatData.id, Object.values(entities.chatUsers),
    entities.users)
});


export default connect(mapStateToProps, null)(UserManager);
