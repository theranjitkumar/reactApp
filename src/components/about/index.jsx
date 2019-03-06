import React, { Component } from 'react';
import { Button, Alert } from 'reactstrap';
class About extends Component {
  constructor() {
    super();
    this.state = {
      title: 'About',
      data: []
    }
  }

  componentWillMount(){
    console.log('componentWillMount form about');
  }


  render() {

    return (
      <div className="avout">
        <h3> {this.state.title} </h3>

      </div>
    );
  }
}

export default About;