import React, { Component } from 'react';
import { Button, Alert  } from 'reactstrap';
import axios from 'axios';

class Home extends Component {
  constructor(props){
      super(props);

      this.state={
        title:"Home" ,
        userData:[],
        fetched:false
      };
  }

  componentWillMount(){
    this.getData();
    console.log("ComponentWillMount called");
  }
  componentDidMount(){
      console.log("ComponentDidMount called");
  }
  getData(){
  axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
        var result = res.data;
        console.log("====result===========");
        this.setState({ userData: result,fetched: true });
        console.log(result);
    });
  }
  render() {

    const Users = this.state.userData.map(function(user, index){
      return <li key={index}> {user.id} {user.name}; </li>
    });

    return (
      <div className="home">
        <h3> {this.state.title} </h3>
        <br/>
        {Users}
        <h3> User Data:- </h3>

        <ul>
         {this.state.userData.map(ud =>
           <li key={ud.id}>{ud.name}</li>
         )}
        </ul>

        <div>
          < StepCounter initialCounter={7}/>
          <Alert color="success">
            <strong>Well done!</strong> You successfully read this important alert message.
          </Alert>
        </div>


      </div>
    );
  }
}

export default Home;
// counter Component
class StepCounter extends React.Component{
    constructor(){
        super();
        this.state={
          counter:1
      }
      this.handleClick= function() {
        this.setState({counter: this.state.counter + 1})
    }
    }
  render() {
    return <Button onClick={this.handleClick.bind(this)}> OnClick Event, Click Here: {this.state.counter }</Button>;
  }
};
