import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import Home from './components/Home'
import NavBar from './styledcomponents/NavBar'

class App extends Component {

  
  render() {
    return (
      <div>
      <NavBar>
        <ul>
          <div>
            <a href="/user/login"></a>
          </div>
        </ul>
        </NavBar>
      <Router>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/user/login" component={UserSignIn} /> */}
        {/* <Route path="/artist/:id" component={Artist} /> */}
      </Router>
      </div>
    );
  }
}

export default App;
