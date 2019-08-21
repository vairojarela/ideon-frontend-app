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
            <div className="nav-wrapper">
    </div>
          </nav>
          <ul id="slide-out" className="sidenav">
            <li>
              <div className="user-view">
                <div className="background">
                </div>
            <a href="#user"><img className="circle" src={this.props.user.image}/></a>
            <a href="#name"><span className="white-text name">{this.props.user.name}</span></a>
            <a href="#email"><span className="white-text email">{this.props.user.username}</span></a>
    </div></li>
    <li className="sidenav-close">
    <Link to='/profile'><i className="material-icons">person</i>Profile</Link></li>
    {/* <li><a href="#!">Second Link</a></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">Subheader</a></li>
    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li> */}
    <center>
      <button onClick={this.props.logout} className="deep-purple accent-3 sidenav-close btn waves-effect waves-light" type="submit" name="action">Logout
    <i className="material-icons right">exit_to_app</i>
</button>
</center>
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