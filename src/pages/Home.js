import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import moment from 'moment'
import postsService from '../services/posts-service';
import withAuth from '../components/withAuth';


class Home extends Component {

  state = {
    posts: [],
  }
  
  
  componentDidMount(){
   /*  postsService.getAllPosts()
    .then(response => {
      console.log(response)
      this.setState({
        posts: response.listOfPosts 
      })
    }) */
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

  render() {
    const {posts} = this.state
    console.log(this.state)

    return (
      <>
      <Navbar/>
      <section className="home container">  
      {posts.length > 0 ? posts.map((post) => {
        return(
        <div className="card" key={post._id}>
          <div className="card-image waves-effect waves-block waves-light">
          </div>
          <div className="card-content">
          
            <span className="card-title activator grey-text text-darken-4"><span className="votes">{post.votes}</span>{post.title}<i className="material-icons right">more_vert</i></span>
            <div class="chip">
              <i src="images/yuna.jpg" alt="Contact Person"/>
              Jane Doe
            </div>
            <p><a href="#">Comment</a></p>
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

export default withAuth(Home)
