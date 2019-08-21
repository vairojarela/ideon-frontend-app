import axios from 'axios';

class PostsService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:4000',
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
    const { authorId, title, description } = user;
    return this.auth.post('/posts/create', {authorId, title, description})
      .then(({ data }) => data);
  }

  deleteOnePost(id) {
    return this.auth.delete(`/posts/${id}/delete`)
    .then(response => response)
  }

  

}

const postsService = new PostsService()

export default postsService