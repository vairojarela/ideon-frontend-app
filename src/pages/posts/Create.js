import React, { Component } from 'react'
import Footer from '../../components/Footer';
import moment from 'moment'
import postsService from '../../services/posts-service';
import withAuth from '../../components/withAuth';
import {Redirect} from 'react-router-dom';


class CreatePosts extends Component {

  state = {
    authorId: this.props.user._id,
    title: '',
    description: '',
    dreamType: ['Daydream', 'Lucid', 'Nightmare', 'Recurring', 'Healing', 'Prophetic', 'Signal', 'Epic', 'Other'],
    redirect: false
  }

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleOnSubmit = (event) => {
    const {authorId, title, description, dreamType} = this.state
    event.preventDefault();
    postsService.createPosts({
      authorId,
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
    const {title, description, dreamType, redirect} = this.state
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
              <i className="material-icons">add</i>
              <label>
              <input onChange={this.handleOnChange} type="checkbox" className="filled-in" value={dreamType[0]}/>
              <span>{dreamType[0]}</span>
            </label>
            </div>
        <div className="type-item">
              <i className="material-icons">add</i>
              <label>
              <input onChange={this.handleOnChange} type="checkbox" className="filled-in" value={dreamType[1]}/>
              <span>{dreamType[1]}</span>
            </label>
            </div>
        <div className="type-item">
              <i className="material-icons">mood_bad</i>
              <label>
              <input onChange={this.handleOnChange} type="checkbox" className="filled-in" value={dreamType[2]}/>
              <span>{dreamType[2]}</span>
            </label>
            </div>
            </div>
        </div>
            <div className="row">
        <div className="input-field col s12 types">
        <div className="type-item">
              <i className="material-icons">add</i>
              <label>
              <input onChange={this.handleOnChange} type="checkbox" className="filled-in" value={dreamType[3]}/>
              <span>{dreamType[3]}</span>
            </label>
            </div>
        <div className="type-item">
              <i className="material-icons">add</i>
              <label>
              <input onChange={this.handleOnChange} type="checkbox" className="filled-in" value={dreamType[4]}/>
              <span>{dreamType[4]}</span>
            </label>
            </div>
        <div className="type-item">
              <i className="material-icons">add</i>
              <label>
              <input onChange={this.handleOnChange} type="checkbox" className="filled-in" value={dreamType[5]}/>
              <span>{dreamType[5]}</span>
            </label>
            </div>
        </div>
        </div>
        <div className="row">
        <div className="input-field col s12 types">
        <div className="type-item">
              <i className="material-icons">add</i>
              <label>
              <input onChange={this.handleOnChange} type="checkbox" className="filled-in" value={dreamType[6]}/>
              <span>{dreamType[6]}</span>
            </label>
            </div>
        <div className="type-item">
              <i className="material-icons">add</i>
              <label>
              <input onChange={this.handleOnChange} type="checkbox" className="filled-in" value={dreamType[7]}/>
              <span>{dreamType[7]}</span>
            </label>
            </div>
        <div className="type-item">
              <i className="material-icons">add</i>
              <label>
              <input onChange={this.handleOnChange} type="checkbox" className="filled-in" value={dreamType[8]}/>
              <span>{dreamType[8]}</span>
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
