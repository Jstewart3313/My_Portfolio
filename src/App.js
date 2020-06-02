import React, { Component } from 'react';
import './App.css';

import Header from "./Components/Header/Header.js"
import Photo from "./Components/Photo/Photo.js"

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Photo/>
      </div>
    );
  }
}

export default App;
