import React, { Component } from 'react';
import AppRouter from './AppRouter';
class App extends Component {
  render() {
    return (
      <section className="container">
        <div className="row">
          <AppRouter/>
        </div>
      </section>
    );
  }
}

export default App;
