import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddUser extends Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.userId.value)
    console.log(document.getElementById("userName").value)
    console.log("submitted...!")

  }

  render() {

    return (
      <div className="adduser">
        <h3>Add Users :- </h3>
        <Form action="" onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <Label for="userId">Email</Label>
            <input type="text" ref="userId" placeholder="enter user id" />
          </FormGroup>
          <FormGroup>
            <Label for="userName">Password</Label>
            <Input type="text" id="userName" placeholder="enter user name" />
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>

      </div>
    );
  }
}

export default AddUser;
