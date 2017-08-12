import React, { Component } from 'react';
import './App.css';
import { Btn, BtnBlue } from "./Bronze/"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Btn size="lg"> My Button </Btn>
        <BtnBlue size="lg"> My Blue Button </BtnBlue>
      </div>
    );
  }
}

export default App;
