import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import moment from 'moment'
import postsService from '../services/posts-service';
import withAuth from '../components/withAuth';


export default class Home extends Component {

  state = {
    posts: [],
  }
  
  
  componentDidMount(){
    postsService.getAllPosts()
    .then(response => {
      console.log(response)
      this.setState({
        posts: response.listOfPosts 
      })
    })
  }

 

  
  handleDeleteClick = (id) => {
    postsService.deleteOnePost(id)
    .then(() => {
      const filteredPosts = this.state.posts.filter((singlePost) => {
        return singlePost._id !== id
      })
      this.setState({
        posts: filteredPosts
      })
    })
  }

  handleSearch= (e) => {
    let {posts} = this.state
    let newDreamsList = [];
    if (e.target.value !== "") {
      newDreamsList = posts.filter(post => {
      const lc = post.title.toLowerCase();
      const filter = e.target.value.toLowerCase();
      return lc.includes(filter);
    });
  } else {
    newDreamsList = posts
    }

    this.setState({
      posts: newDreamsList
    });
  }

  render() {
    const {posts} = this.state
    console.log(this.state)

    return (
      <>
      <Navbar/>
      <section className="home container">
      <form>
        <div className="input-field">
          <input onChange={this.handleSearch} id="search" type="search" required />
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
      {posts.length > 0 ? posts.map((post) => {
        return(
        <div className="card" key={post._id}>
          <div className="card-image waves-effect waves-block waves-light">
          </div>
          <div className="card-content">
          
            <span className="card-title activator grey-text text-darken-4"><span className="badges">{post.votes}</span>{post.title}<i className="material-icons right">more_vert</i></span>
            <span data-badge-caption={post.dreamType} class="new badge"></span> 
            <p>Posted by <a href="#">{post.authorName}</a> {moment(post.created_at).fromNow()}</p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{post.title}<i className="material-icons right">close</i></span>
            <small>{moment(post.created_at).fromNow()}</small>
            <p>{post.description}</p>
          </div>
        </div>
        )
        }) : 
        <Loader />
      }
      </section>
      <Footer/>
      </>
    )
  }
}
