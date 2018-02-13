import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import HomePage from './components/HomePage'
import CityPage from './components/CityPage'
import NewPostPage from './components/NewPostPage'
import PostPage from './components/PostPage'
import ProfilePage from './components/ProfilePage'
import NavBar from './styledcomponents/NavBar'
import UserSignIn from './components/UserSignIn'
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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/login" component={UserSignIn} />
        {/* <Route path="/artist/:id" component={Artist} /> */}
      </Router>
      </div>
    );
  }
}

export default App;
