import React, { Component } from 'react';
import { Button, Alert } from 'reactstrap';

import store from '../../redux/store'

class About extends Component {
  constructor() {
    super();
    this.state = {
      title: 'About',
      data: []
    }
  }

  componentWillMount() {
    console.log('componentWillMount form about');
    store.subscribe(() => {
      console.log("now store is: " + store.getState());
    });

    store.dispatch({ type: "increase", payload: 3 });
    store.dispatch({ type: "increase", payload: 6 });
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