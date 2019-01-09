import React, { Component } from 'react';
import logo from './logo.svg';
import RideFinder from '../RideFinder/RideFinder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RideFinder />
      </div>
    );
  }
}

export default App;
