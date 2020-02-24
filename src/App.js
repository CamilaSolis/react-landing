import React, { Component } from 'react';
import logo from './logo.svg';
import Dashboard from './Dashboard/dashboard';
import './App.scss';

class App extends Component {
  render(){
    return(
      <div className="App">
      <h1>oli</h1>

      <Dashboard />
    </div>
    )
  }
}

export default App;
