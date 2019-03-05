import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import Home from './components/home/Home';
import About from './components/about';
import User from "./components/user/User";
import Employee from "./components/employee";
import {
  BrowserRouter as Router,
  Route,
  Link,HashRouter
} from 'react-router-dom'

class AppRouter extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/user">User</Link></li>
                <li><Link to="/employee">Employee</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/user" component={User}/>
            <Route path="/employee" component={Employee}/>
            </div>
        </HashRouter>
    );
  }
}

export default AppRouter;
