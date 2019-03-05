import React, { Component } from 'react';
import { Button, Alert } from 'reactstrap';
class About extends Component {
  render() {
    return (
      <div className="avout">
        <h3>About</h3>
        <Alert> Alert message </Alert>
        <Button>Click Me</Button>
      </div>
    );
  }
}

export default About;