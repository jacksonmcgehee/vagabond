import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from './components/Home'
import CityPage from './components/CityPage'
import NavBar from './styled-components/NavBar'

class App extends Component {


  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cities/:id" component={CityPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
