import React  from 'react';
import InputPostalCode from './input'
import MultiInputPostalCode from './multi/input'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <InputPostalCode />
        <div className="multi">
          <MultiInputPostalCode />
        </div>
      </div>
    );
  }
}

export default App;
