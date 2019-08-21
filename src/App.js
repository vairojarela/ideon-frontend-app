import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import CreatePosts from './pages/posts/Create';
import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';
import Messages from './pages/messages/Messages';



import AuthProvider from './contexts/auth-context.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div>
            <Switch>
              <AnonRoute path="/login" component={Login} />
              <AnonRoute path="/signup" component={Signup} />
              <PrivateRoute path="/private" component={Private} />
              <PrivateRoute path="/profile/edit" component={ProfileEdit}/>
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/posts/create" component={CreatePosts} />
              <PrivateRoute path="/messages" component={Messages} />
              <PrivateRoute path="/" component={Home}/>
            </Switch>   
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
