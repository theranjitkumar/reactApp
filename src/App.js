import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AppRouter from './AppRouter';
class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <AppRouter />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
