import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Header></Header>
        <NavBar></NavBar>
      </div>
    );
  }
}

export default App;
