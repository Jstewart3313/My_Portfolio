import React, { Component } from 'react';
import './App.css';
import Header from '../Header/index.js'
import ProjectContainer from '../ProjectContainer/index.js'
import HeaderImage from '../assets/headerImage.jpeg'

class App extends Component {
  constructor(){
    super();
    this.state = {
      heroImage: HeaderImage
    }
  }


  render() {
    return (
      <div className="App">
        <Header HeaderImage/>
        <ProjectContainer/>
      </div>
    );
  }
}

export default App;
