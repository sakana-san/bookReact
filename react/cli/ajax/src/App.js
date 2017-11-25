import React, { Component } from 'react';
import './App.css';
import Ajax from './ajax/ajax'

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
