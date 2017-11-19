import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ajax from './ajax'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ajax />
      </div>
    );
  }
}

export default App;
