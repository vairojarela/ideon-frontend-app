import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class Footer extends Component {
  render() {  
    return (
          <nav className="nav-bottom">
            <div className="row">
            <Link to='/'>
            <i className="material-icons">home</i>
            </Link>
            </div>
            <div>
            <Link to='/profile'>
            <i className="material-icons">dashboard</i>
            </Link>
            </div>
            <div>
            <Link to='/posts/create'>
            <button className="btn-floating btn-large waves-effect waves-light red deep-purple accent-3"><i className="material-icons">add</i></button>
            </Link>
            </div>
            <div>
            <Link to='/messages'>
            <i className="material-icons">chat</i>
            </Link>
            </div>
            <div>
            <Link to='/messages'>
            <i className="material-icons">favorite</i>
            </Link>
            </div>
          </nav>
    )
  }
}

export default withAuth(Footer);