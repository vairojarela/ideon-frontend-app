import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import moment from 'moment'
import postsService from '../services/posts-service';
import withAuth from '../components/withAuth';
import AuthService from '../services/auth-service'


export default class Home extends Component {

  state = {
    user: '',
    posts: [],
  }
  
  componentDidMount(){
    AuthService.me(this.props._id)  
      .then((response)=> {
        const userFromAPI = response
        this.setState({
          user: userFromAPI,
        })
      })
      .catch((error) => {
        console.log(error);
      })

    postsService.getAllPosts()
    .then(response => {
      console.log(response)
      if (!response.listOfPosts){
        response.listOfPosts = []
      }
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
/*     const {posts} = this.state */
    const posts = ['1','2','3']
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
      {Array.isArray(posts) && posts.length > 0 ? posts.reverse().map((post) => {
        return(
        <div className="card" key={post._id}>
          <div className="card-image waves-effect waves-block waves-light">
          </div>
          <div className="card-content">
          
            <span className="card-title activator grey-text text-darken-4">{post.title}<i className="material-icons right">more_vert</i></span>
            <span data-badge-caption={post.dreamType} className="new badge"></span> 
            <p>by <a href="#">{post.authorName}</a> {moment(post.created_at).fromNow()}</p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{post.title}<i className="material-icons right">close</i></span>
            <span className="badges right">{post.votes}</span>  
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
