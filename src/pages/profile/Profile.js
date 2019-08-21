import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import withAuth from '../../components/withAuth';
import Navbar from '../../components/Navbar';
import AuthService from '../../services/auth-service'
import M from "materialize-css";
import moment from 'moment'
import Footer from '../../components/Footer';
import postsService from '../../services/posts-service';

class Profile extends Component {

  state={
    user: '',
    posts: null
  }

  componentWillMount() {
    AuthService.me(this.props._id)
      .then((response)=> {
        const userFromAPI = response
        console.log(userFromAPI)
        this.setState({
          user: userFromAPI,
        })
      })
      .catch((error) => {
        console.log(error);
      })
    
		}
		
		componentDidMount(){
      postsService.getAllPostsFromUser(this.props.user._id)
      .then((response)=> {
        const postsFromUserFromAPI = response
        console.log(postsFromUserFromAPI)
        this.setState({
          posts: postsFromUserFromAPI,
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

	<div className="container">

		<div className="profile">

			<div className="profile-image">
				<img src={this.props.user.image} alt={this.state.user.username}/>
			</div>

			<div className="profile-user-settings">

				<h1 className="profile-user-name">{this.state.user.username}</h1>
        <Link to="/profile/edit">
				<button className="btn-p profile-edit-btn">Edit Profile</button>
        </Link>

				<button className="btn-p profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

			</div>

			<div className="profile-stats">

				<ul>
					<li><span className="profile-stat-count">164</span> dreams</li>
					<li><span className="profile-stat-count">188</span> points</li>
				</ul>

			</div>

			<div className="profile-bio">

				<p><span className="profile-real-name">{this.state.user.name}</span> {this.state.user.description} 📷✈️🏕️</p>
        <p>Member since: {moment(this.state.user.created_at).fromNow()}</p>
			</div>

		</div>


	</div>

</header>

<main>

	<div className="container">

		<div className="gallery">

			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
						<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
					</ul>

				</div>

			</div>

			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 89</li>
						<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 5</li>
					</ul>

				</div>

			</div>

			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-type">

					<span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>

				</div>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 42</li>
						<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
					</ul>

				</div>

			</div>

			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-type">

					<span className="visually-hidden">Video</span><i className="fas fa-video" aria-hidden="true"></i>

				</div>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 38</li>
						<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 0</li>
					</ul>

				</div>

			</div>

			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-type">

					<span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>

				</div>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 47</li>
						<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
					</ul>

				</div>

			</div>

			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 94</li>
						<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 3</li>
					</ul>

				</div>

			</div>

			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-type">

					<span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>

				</div>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 52</li>
						<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 4</li>
					</ul>

				</div>

			</div>

			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 66</li>
						<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
					</ul>

				</div>

			</div>

			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-type">

					<span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>

				</div>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 45</li>
						<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 0</li>
					</ul>

				</div>

			</div>

			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 34</li>
						<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
					</ul>

				</div>

			</div>

			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 41</li>
						<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 0</li>
					</ul>

				</div>

			</div>

			<div className="gallery-item" tabindex="0">

				<img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop" className="gallery-image" alt=""/>

				<div className="gallery-item-type">

					<span className="visually-hidden">Video</span><i className="fas fa-video" aria-hidden="true"></i>

				</div>

				<div className="gallery-item-info">

					<ul>
						<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 30</li>
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