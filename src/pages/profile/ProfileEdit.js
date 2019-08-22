import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import withAuth from '../../components/withAuth';
import profileService from '../../services/profile-service';
import InputText from '../../components/forms/InputText';


class Profile extends Component {
  
  state={
    _id: this.props.user._id,
    username: this.props.user.username,
    name: this.props.user.name,
    description: this.props.user.description,
    image: '',
    votes: 0,
    interests: [],
    date: '',
    redirect: false,
    path: ''
  }
  

  handleOnChange = (event) => {
    const {name, value} = event.target;
    //Dinamico, no un valor determinado!
    this.setState({
      [name]: value,
    })
  }

  handleOnSubmit = (event) => {
    const {_id, name, description, image, interests} = this.state
    event.preventDefault();
    profileService.updateOneUser(_id,{
      name,
      description,
      interests
    }).then(this.redirect('/profile'))
    .catch(error=> {
        console.log(error)
    })
   
  
  }


  handleOnDelete = (event) => {
    const {_id} = this.state
    event.preventDefault();
    profileService.deleteOneUser(_id).then(this.redirect('/login'))
    .catch(error=> {
        console.log(error)
    })
  }

  redirect = (path) => {
    this.setState({
      redirect: true,
      path: path
    })
  }

  goBack = () => {
    this.props.history.goBack();
}
  render() {
    const {username, name, description, image, interests, date, redirect} = this.state
    return (
      <>
      <div className="container">
        <a className="waves-effect waves-teal btn-flat back" onClick={this.goBack}><i className="material-icons">arrow_back</i></a>
        <div className="container">
        <h3>Edit Profile</h3>
        <form onSubmit={this.handleOnSubmit}>
        
        <InputText onChange={this.handleOnChange} value={username} label='Username'name='username' id='username' disabled={true}/>
        <div className="uk-margin">
      <div className="uk-form-controls">
      <label className="uk-form-label" htmlFor='name'>Name</label>
        <input onChange={this.handleOnChange} placeholder='Your name' type="text" className="uk-input" name='name' id='name'  value={name} ></input>
      </div>
      </div>
        <div className="uk-margin">
      <div className="uk-form-controls">
      <label className="uk-form-label" htmlFor='description'>Description</label>
        <input onChange={this.handleOnChange} placeholder='Write an interesting description about yourself' type="text" className="uk-textarea" name='description' id='description'  value={description} ></input>
      </div>
      </div>
      <button className="btn waves-effect waves-light deep-purple accent-3" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
</button>
        </form>
        <form onSubmit={this.handleOnDelete}>
          <button className='btn waves-effect waves-light red accent-3' type='submit'>Delete
          <i className="material-icons right">cancel</i>
          </button> 
        </form>
        </div>
        {redirect ? <Redirect edited={true} to={this.state.path} props={this.props}/> : null}
        </div>
      </>
    )
  }
}

export default withAuth(Profile);