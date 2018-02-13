import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import Home from './components/Home'
import NavBar from './styled-components/NavBar'

class App extends Component {


  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Route exact path="/" component={Home} />

        </Router>
      </div>
    );
  }
}

export default App;
