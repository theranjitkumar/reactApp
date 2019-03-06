import React, { Component } from 'react';
import Users from "./Users";
import AddUser from "./AddUser";

class User extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    console.log("componentwillMount");

    this.setState({
      users: [
        { userId: 101, userName: "Alex" },
        { userId: 102, userName: "Alex" },
        { userId: 103, userName: "Alex" }
      ]
    })

  }

  render() {

    const userList = this.state.users.map(function (usrlst, index) {
      return (
        <li key={usrlst.userId}> {usrlst.userId} </li>
      )
    });

    return (
      <div className="user">
        <ul>
          {userList}
        </ul>
        <AddUser />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default User;
