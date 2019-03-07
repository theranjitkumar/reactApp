import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home",
      userData: [],
      fetched: false
    };
  }

  componentWillMount() {
    this.getData();
    console.log("ComponentWillMount called");
  }
  componentDidMount() {
    console.log("ComponentDidMount called");
  }
  getData() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      var result = res.data;
      console.log("====result===========");
      this.setState({ userData: result, fetched: true });
      console.log(result);
    });
  }
  render() {

    return (
      <div className="home">
        <h3> {this.state.title} </h3>
        <br />
        <div>
          <ul>
            {this.state.userData.map(user =>
              <li key={user.id}> {user.id} {user.name}; </li>
            )}
          </ul>
        </div>

      </div>
    );
  }
}

export default Home;

