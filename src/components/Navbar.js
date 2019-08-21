import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';
import M from "materialize-css";

class Navbar extends Component {
  
  componentDidMount(){
      var elems = document.querySelector('.sidenav');
      var instances = M.Sidenav.init(elems);
      
  }
  render() {  
    return (
      <div>
        {this.props.isLoggedIn ? (
        <>
          <nav className="nav-mobile">
             <img data-target="slide-out" className="sidenav-trigger circle small-img" src={this.props.user.image} alt={this.props.user.username}></img>
            <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" type="search" required />
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
          </nav>
          <ul id="slide-out" class="sidenav">
            <li>
              <div class="user-view">
                <div class="background">
                </div>
            <a href="#user"><img class="circle" src={this.props.user.image}/></a>
            <a href="#name"><span class="white-text name">{this.props.user.name}</span></a>
            <a href="#email"><span class="white-text email">{this.props.user.username}</span></a>
    </div></li>
    <li className="sidenav-close">
    <Link to='/profile'><i className="material-icons">person</i>Profile</Link></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    <button onClick={this.props.logout} className="sidenav-close btn waves-effect waves-light" type="submit" name="action">Logout
    <i className="material-icons right">exit_to_app</i>
</button>
  </ul>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </>
        )}
      </div>
    )
  }
}

export default withAuth(Navbar);