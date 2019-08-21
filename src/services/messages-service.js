import axios from 'axios';

class MessagesService {
  constructor() {
    this.auth = axios.create({
      url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/c30b8cc8-125e-4f4b-a8e1-ebb4307f1258/token",
      withCredentials: true,
    })
  }

  signup(user) {
    const { _id, username } = user;
    return this.auth.post('/token', {_id})
      .then(({ response }) => console.log(response));
  }

/*   login(user) {
    const { username, password } = user;
    return this.auth.post('/auth/login', {username, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout')
      .then(response => response.data)
  }

  me() {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  } */
  
}

const messagesService = new MessagesService();

export default messagesService;