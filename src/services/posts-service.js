import axios from 'axios';

class PostsService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  getAllPosts() {
   /*  const { username, password } = user; */
    return this.auth.get('/posts')
      .then(({ data }) => data);
  }

  getAllPostsFromUser(id) {
    console.log(id)
     return this.auth.get(`/posts/${id}`)
       .then(({ data }) => data);
   }

  createPosts(user) {
    console.log(user)
    const { authorId, authorName, title, description, dreamType} = user;
    return this.auth.post('/posts/create', {authorId, authorName, title, description, dreamType})
      .then(({ data }) => data);
  }

  deleteOnePost(id) {
    return this.auth.delete(`/posts/${id}/delete`)
    .then(response => response)
  }
}

const postsService = new PostsService()

export default postsService