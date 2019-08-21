import React, { Component } from 'react'
import Footer from '../../components/Footer';
import moment from 'moment'
import postsService from '../../services/posts-service';
import withAuth from '../../components/withAuth';
import {Redirect} from 'react-router-dom';


class CreatePosts extends Component {

  
  state = {
    authorId: this.props.user._id,
    authorName: this.props.user.username,
    title: '',
    description: '',
    dreamType: '',
    redirect: false
  }

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleOnCheck = (event) => {
    if (event.target.checked){
      this.setState({
        dreamType: event.target.value
      })
    } else {
      this.setState({
        dreamType: '',
      })
    }
  }

  handleOnChange = (event) => {
    const {name, value} = event.target;
    console.log(event.target.checked)
    this.setState({
      [name]: value,
    })
  }

  handleOnSubmit = (event) => {
    const {authorId, authorName, title, description, dreamType} = this.state
    event.preventDefault();
    postsService.createPosts({
      authorId,
      authorName,
      title,
      description,
      dreamType
    }).then(this.redirect('/'))
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
    const {title, description, redirect} = this.state
    return (
      <>
      <div className="container">
      <a className="waves-effect waves-teal btn-flat" onClick={this.goBack}>Back</a>
      <div className="row">
      <h4>Talk about your dream</h4>
      <form onSubmit={this.handleOnSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input required value={title} name='title' onChange={this.handleOnChange} id="title" type="text" className="validate"/>
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className="row">
        <div className="input-field col s12">
          <textarea required onChange={this.handleOnChange} value={description} name='description' id="description" className="materialize-textarea"></textarea>
          <label htmlFor="description">Description</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 types">
        <div className="type-item">
              <i className="create-icons material-icons">add</i>
              <label>
              <input onChange={this.handleOnCheck} type="checkbox" className="filled-in" value="Daydream"/>
              <span>Daydream</span>
            </label>
            </div>
        </div>
        <div className="input-field col s12 types">
        <div className="type-item">
              <i className="create-icons material-icons">add</i>
              <label>
              <input onChange={this.handleOnCheck} type="checkbox" className="filled-in" value='Lucid'/>
              <span>Lucid</span>
            </label>
            </div>
            </div>
        <div className="input-field col s12 types">
        <div className="type-item">
              <i className="create-icons material-icons">mood_bad</i>
              <label>
              <input onChange={this.handleOnCheck} type="checkbox" className="filled-in" value='Nightmare'/>
              <span>Nightmare</span>
            </label>
            </div>
            </div>
        <div className="input-field col s12 types">  
        <div className="type-item">
              <i className="create-icons material-icons">add</i>
              <label>
              <input onChange={this.handleOnCheck} type="checkbox" className="filled-in" value='Recurring'/>
              <span>Recurring</span>
            </label>
            </div>
            </div>
        <div className="input-field col s12 types">
        <div className="type-item">
              <i className="create-icons material-icons">add</i>
              <label>
              <input onChange={this.handleOnCheck} type="checkbox" className="filled-in" value='Healing'/>
              <span>Healing</span>
            </label>
            </div>
            </div>
        <div className="input-field col s12 types">
        <div className="type-item">
              <i className="create-icons material-icons">add</i>
              <label>
              <input onChange={this.handleOnCheck} type="checkbox" className="filled-in" value='Prophetic'/>
              <span>Prophetic</span>
            </label>
            </div>
            </div>
        <div className="input-field col s12 types">
        <div className="type-item">
              <i className="create-icons material-icons">add</i>
              <label>
              <input onChange={this.handleOnCheck} type="checkbox" className="filled-in" value='Signal'/>
              <span>Signal</span>
            </label>
            </div>
            </div>
        <div className="input-field col s12 types">
        <div className="type-item">
              <i className="create-icons material-icons">add</i>
              <label>
              <input onChange={this.handleOnCheck} type="checkbox" className="filled-in" value='Epic'/>
              <span>Epic</span>
            </label>
            </div>
            </div>
        <div className="input-field col s12 types">
        <div className="type-item">
              <i className="create-icons material-icons">add</i>
              <label>
              <input onChange={this.handleOnCheck} type="checkbox" className="filled-in" value='Other'/>
              <span>Other</span>
            </label>
            </div>
            </div>
        </div>        
  <button className="btn waves-effect waves-light" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
</button>
      </form>
      </div>
    </div>
   
      {redirect ? <Redirect to={this.state.path} props={this.props}/> : null}
    </>      
    )
  }
}

export default withAuth(CreatePosts)
