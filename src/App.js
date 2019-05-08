import React, { Component } from 'react';
import './styles/App.css';
import { PinMap, NavBar } from './components';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <NavBar />
        <PinMap />
      </div>
    );
  }
}

export default App;
