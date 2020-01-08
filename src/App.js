import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
            <NavBar></NavBar>
            <Switch>
                <Route path = '/about' component={About}/>
                <Route path = '/portfolio' component={Portfolio}/>
                <Route path = '/resume' component={Resume}/>
                <Route path = '/' component={Home}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
