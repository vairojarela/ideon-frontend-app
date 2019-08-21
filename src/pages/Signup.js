import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth.js';

class Signup extends Component {

  state = {
    username: '',
    password: '',
    loginError: false
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.props.signup({ username, password })
      .then( (user) => {
        console.log(user)
        this.setState({
            username: '',
            password: '',
        });
      })
      .catch( error => {
        console.log(error)
        this.setState({
          loginError: true
        })
      } )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, loginError } = this.state;
    return (
      <div className="login-container">
      <div className="moon">
<div className="moon-shadow"></div>
</div>

<div className="star"></div>
<div className="star"></div>
<div className="star"></div>
<div className="star"></div>
<div className="star"></div>
      <div className="login-form valign-wrapper">
<h2 className="white-text" >dreamhub</h2>
        <form className="col s12" onSubmit={this.handleFormSubmit}>
        <div className="input-field col s6">
          <input value={username} name='username' id="username" type="text" className="validate" onChange={this.handleChange}/>
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-field col s6">
          <input value={password} name='password' id="password" type="text" className="validate" onChange={this.handleChange}/>
          <label htmlFor="password">Password</label>
        </div>
        <center>
          <input className='deep-purple accent-3 btn waves-effect waves-light" ' type='submit' value='Signup' />
          </center>
        </form>
        {loginError ? <p className="login-p ">Error signin up, try again later.</p> : null}
        <p className="login-p" >Already have account?</p> 
          <Link to={'/login'}>Login</Link>

      </div>
      </div>

    )
  }
}

export default withAuth(Signup);