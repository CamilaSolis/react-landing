import React, { Component } from 'react';
import Dashboard from './Dashboard/dashboard';
import './App.scss';

class App extends Component {
  render(){
    return(
      <div className="container">
        <Dashboard />
      </div>
    )
  }
}

export default App;
