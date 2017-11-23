import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ajax from './ajax/ajax'
import AjaxInput from './ajax/input'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ajax />
        <AjaxInput />
      </div>
    );
  }
}

export default App;
