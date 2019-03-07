import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import Home from './components/home/Home';
import About from './components/about';
import User from "./components/user/User";
import Posts from "./components/posts/Posts";

import {
  BrowserRouter as Router,
  Route,
  Link, HashRouter
} from 'react-router-dom'

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <HashRouter>

        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">React App</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/about">About</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/user">User</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/posts">Posts</Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Angular
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      React
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>

          <Row>
            <Col>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/user" component={User} />
              <Route path="/posts" component={Posts} />
            </Col>
          </Row>

        </div>
      </HashRouter>
    );
  }
}

export default AppRouter;
