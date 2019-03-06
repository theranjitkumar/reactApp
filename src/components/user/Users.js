import React, { Component } from 'react';

class Users extends Component {

  render() {
    let userList;
    if (this.props.users) {
      userList = this.props.users.map(function (user, index) {
        return (
          <li key={user.userId}> {user.userId} - <strong> {user.userName}</strong> </li>
        )
      });
    }

    return (
      <div className="users">
        <h3>Users :- </h3>
        <ul>
          {userList}
        </ul>
      </div>
    );
  }
}

export default Users;
