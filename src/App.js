import React, { Component } from "react";
import {Redirect} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <NavBar />        
      </div>
    )
  }
}

export default App;
