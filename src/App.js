import React, { Component } from 'react';
import './App.css';
import { Btn, m } from "./Bronze/"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Btn size="sm" color="red">My Button</Btn>
        <Btn>My Button</Btn>
        <Btn size="sm" color="white">My Button</Btn>
      </div>
    );
  }
}

export default App;
