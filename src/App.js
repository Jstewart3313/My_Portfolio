import React, { Component } from 'react';
import './App.css';

import Header from "./Components/Header/Header.js"
import Photo from "./Components/Photo/Photo.js"
import Intro from "./Components/Intro/Intro.js"
import Contact from "./Components/Contact/Contact.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='body'>
          <Header />
          <Photo />
          <Intro />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
