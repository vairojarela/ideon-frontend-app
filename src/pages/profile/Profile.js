import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import withAuth from '../../components/withAuth';
import Navbar from '../../components/Navbar';
import AuthService from '../../services/auth-service'
import Footer from '../../components/Footer';
import postsService from '../../services/posts-service';

class Profile extends Component {

  state={
		user: '',
		description: '',
    posts: null
  }

  componentWillMount() {

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
	 
    
		}
		
		

  render() {
    return (
      <>
      <Navbar/>
<header>

<div class="container">

	<div class="profile">

		<div class="profile-image">

			<img id='profile-avatar' src={this.state.user.image} alt=""/>

		</div>

		<div class="profile-user-settings">

			<h1 class="profile-user-name">{this.state.user.username}</h1>
			<button class="btn profile-edit-btn deep-purple accent-3 edit">
			<Link to="/profile/edit">
				Edit Profile
			</Link>	
				</button>
			

		</div>

		<div class="profile-stats">

			<ul>
				<li><span class="profile-stat-count">12</span> dreams</li>
				<li><span class="profile-stat-count">18</span> followers</li>
				<li><span class="profile-stat-count">21</span> following</li>
			</ul>

		</div>

		<div class="profile-bio">

			<p><span class="profile-real-name">{this.state.user.name}</span>{this.state.user.description === '' ? <code>No descrption yet</code> : <p>{this.state.user.description}</p>}</p>

		</div>

	</div>

</div>

</header>

<main>
	<div className="container">

		<div className="gallery">
			}
			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
						<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
					</ul>

				</div>

			</div>

		</div>
	</div>

</main>
      <Footer/>
      </>
    )
  }
}

export default withAuth(Profile);